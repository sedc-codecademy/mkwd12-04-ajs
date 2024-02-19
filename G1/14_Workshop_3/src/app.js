let navService = {
  navItems: document.getElementsByClassName("nav-link"),
  navSearch: document.getElementById("citySearchInput"),
  searchBtn: document.getElementById("citySearchBtn"),
  pages: document.getElementById("pages").children,

  activateItem: function (item) {
    for (let navItem of this.navItems) {
      navItem.classList.remove("active");
    }
    item.classList.add("active");
  },

  showPage(page) {
    for (let pageElement of this.pages) {
      pageElement.style.display = "none";
    }
    page.style.display = "block";
  },

  registerNavListeners() {
    for (let i = 0; i < this.navItems.length; i++) {
      this.navItems[i].addEventListener("click", function () {
        navService.activateItem(this);
        navService.showPage(navService.pages[i]);
      })
    }
    this.searchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      weatherService.city = navService.navSearch.value;
      weatherService.getData();
    })

  }
}

let weatherService = {
  apiKey: "74e59f6374abe0d9b758877616ae444c", // Everybody enters their own key here. If you use this key it will be overloaded and will block
  city: "skopje",
  apiUrl: "https://api.openweathermap.org/data/2.5/forecast",
  currentData: {},
  getData: function () {
    fetch(`${this.apiUrl}?q=${this.city}&units=metric&APPID=${this.apiKey}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (weatherResult) {
          console.log('The request succeeded!');
          console.log(weatherResult);
          uiService.loadStatistics(weatherResult);
          uiService.loadHourlyTable(weatherResult);
        })
        .catch(function (error) {
          console.log('The request failed!');
          console.log(error);
        });
  },
  aggregateStatistics: function (data) {
    let temperatureSum = 0;
    let highestTemp = data.list[0];
    let lowestTemp = data.list[0];
    let humiditySum = 0;
    let highestHumidity = data.list[0];
    let lowestHumidity = data.list[0];
    for (let reading of data.list) {
      temperatureSum += reading.main.temp;
      humiditySum += reading.main.humidity;
      if (highestTemp.main.temp < reading.main.temp) highestTemp = reading;
      if (lowestTemp.main.temp > reading.main.temp) lowestTemp = reading;
      if (highestHumidity.main.humidity < reading.main.humidity) highestHumidity = reading;
      if (lowestHumidity.main.humidity < reading.main.humidity) lowestHumidity = reading;
    }
    return {
      temperature: {
        highest: highestTemp.main.temp,
        average: temperatureSum / data.list.length,
        lowest: lowestTemp.main.temp
      },
      humidity: {
        highest: highestHumidity.main.humidity,
        average: humiditySum / data.list.length,
        lowest: lowestHumidity.main.humidity
      },
      warmestTime: helperService.unixTimeStampToDate(highestTemp.dt),
      coldestTime: helperService.unixTimeStampToDate(lowestTemp.dt)
    }
  }
}

let uiService = {
  statisticsResult: document.getElementById("statisticsResult"),
  tableResult: document.getElementById("tableResult"),

  appendColumn: function (row, text) {
    let col = document.createElement("div");
    col.classList.add("col");
    col.innerText = text;
    row.appendChild(col);
  },

  createStatisticsRow: function (firstColumnText, secondColumnText) {
    let row = document.createElement("div");
    row.classList.add("row");

    this.appendColumn(row, firstColumnText);
    this.appendColumn(row, secondColumnText);

    return row;
  },
  loadStatistics: function (data) {
    this.clearElement(this.statisticsResult);
    let statisticsData = weatherService.aggregateStatistics(data);
    this.statisticsResult.appendChild(
        this.createStatisticsRow(
            `MAX TEMP: ${statisticsData.temperature.highest} C`,
            `MAX HUMD: ${statisticsData.humidity.highest} %`
        )
    );
    this.statisticsResult.appendChild(
        this.createStatisticsRow(
            `AVG TEMP: ${statisticsData.temperature.average} C`,
            `AVG HUMD: ${statisticsData.humidity.average} %`
        )
    );
    this.statisticsResult.appendChild(
        this.createStatisticsRow(
            `LOW TEMP: ${statisticsData.temperature.lowest} C`,
            `LOW HUMD: ${statisticsData.humidity.lowest} %`
        )
    );

    let warmestTimeElement = document.createElement("h3");
    warmestTimeElement.innerText = `Warmest time of the following period: ${statisticsData.warmestTime.toDateString()}`;
    this.statisticsResult.appendChild(warmestTimeElement);

    let coldestTimeElement = document.createElement("h3");
    coldestTimeElement.innerText = `Coldest time of the following period: ${statisticsData.coldestTime.toDateString()}`;
    this.statisticsResult.appendChild(coldestTimeElement);
  },
  createHourlyRow: function (reading) {
    let row = document.createElement("div");
    row.classList.add("row");

    let imgCol = document.createElement("div");
    imgCol.classList.add("col");

    let img = document.createElement("img");
    img.src = `http://openweathermap.org/img/w/${reading.weather[0].icon}.png`;
    imgCol.appendChild(img);
    row.appendChild(imgCol);

    this.appendColumn(row, `${reading.weather[0].description}`);
    this.appendColumn(row, `${helperService.unixTimeStampToDate(reading.dt).toDateString()}`);
    this.appendColumn(row, `${reading.main.temp} C (${reading.main.feels_like} C)`);
    this.appendColumn(row, `${reading.main.humidity} %`);
    this.appendColumn(row, `${reading.wind.speed} km/h`);

    return row;
  },

  loadHourlyTable: function (data) {
    let readings = data.list;
    this.clearElement(this.tableResult);
    for (let reading of readings) {
      tableResult.appendChild(this.createHourlyRow(reading));
    }
  },

  clearElement(element) {
    element.innerHTML = "";
  }
}

let helperService = {
  unixTimeStampToDate: function (unixTimeStamp) {
    return new Date(unixTimeStamp * 1000);
  }
}

navService.registerNavListeners();
weatherService.getData();
