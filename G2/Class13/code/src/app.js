let weatherData;
const tempParam = "temp";
const humidityParam = "humidity";
const ascParam = "asc";
const descParam = "desc";

let header = document.getElementById('header');
header.innerText = 'Weather Alert';

let greeting = document.getElementById('greeting');
greeting.innerText = 'Welcome to the Weather Alert App';
let helperService = {
    getDateFromSeconds: function(timeInSeconds){
        return new Date(timeInSeconds * 1000);
    },
    convertKelvinToCelsius: function(tempInKelvin){
        return tempInKelvin - 273.15;
    },
    sortHourlyData: function(param, order){
        if(param === tempParam){
            if(order === ascParam){
                weatherData.list.sort((item1, item2)=> item1.main.temp - item2.main.temp);
                uiService.loadHourlyData(weatherData);
                uiService.toggleElement(false, document.getElementById('sortTempAsc'));
                uiService.toggleElement(true, document.getElementById('sortTempDesc'));
            }
            else{
                weatherData.list.sort((item1, item2)=> item2.main.temp - item1.main.temp);
                uiService.loadHourlyData(weatherData);
                uiService.toggleElement(true, document.getElementById('sortTempAsc'));
                uiService.toggleElement(false, document.getElementById('sortTempDesc'));
            }
        }
        else{
            if(order === ascParam){
                weatherData.list.sort((item1, item2)=> item1.main.humidity - item2.main.humidity);
                uiService.loadHourlyData(weatherData);
                uiService.toggleElement(false, document.getElementById('sortHumidityAsc'));
                uiService.toggleElement(true, document.getElementById('sortHumidityDesc'));
            }
            else{
                weatherData.list.sort((item1, item2)=> item2.main.humidity - item1.main.humidity);
                uiService.loadHourlyData(weatherData);
                uiService.toggleElement(true, document.getElementById('sortHumidityAsc'));
                uiService.toggleElement(false, document.getElementById('sortHumidityDesc'));
            }
        }
    },
    registerSortListeners: function(){
       
        document.getElementById('sortTempAsc').addEventListener("click", function(){
            helperService.sortHourlyData(tempParam, ascParam);
        })
        document.getElementById('sortHumidityAsc').addEventListener("click", function(){
            helperService.sortHourlyData(humidityParam, ascParam);
        })
        document.getElementById('sortTempDesc').addEventListener("click", function(){
            helperService.sortHourlyData(tempParam, descParam);
        })
        document.getElementById('sortHumidityDesc').addEventListener("click", function(){
            helperService.sortHourlyData(humidityParam, descParam);
        })
    },
}

let navbarService = {
    navigationLink: document.getElementsByClassName('nav-link'),
    pages: document.getElementsByClassName('page'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    displayPage : function(index) {
        for(let page of this.pages){
            page.style.display = 'none';
        }
        this.pages[index].style.display = 'block'
    },
    activateMenuItem: function(linkElement){
        for(let navLink of this.navigationLink){
            navLink.parentElement.classList.remove("active");
        }
        linkElement.parentElement.classList.add("active");
    },
    pageClickHandler : function(){
        for (let i = 0; i < this.navigationLink.length; i++) {
            this.navigationLink[i].addEventListener('click', function(){
                navbarService.displayPage(i);
                navbarService.activateMenuItem(this);
            })        
        }

        this.searchBtn.addEventListener('click', function(e){
            console.log(`City name: ${navbarService.searchInput.value}`)
            e.preventDefault();
            if(!!navbarService.searchInput.value)
            weatherApiService.getWeatherData(navbarService.searchInput.value);
        })
    }
}

let statisticsService = {
    calculateStatistics: function(data){
        // let tempSum = 0;
        // let humiditySum = 0;
        // let minTemp = data.list[0].main.temp;
        // let maxTemp = data.list[0].main.temp;
        // let minHumidity = data.list[0].main.humidity;
        // let maxHumidity = data.list[0].main.humidity;

        // for(let listItem of data.list){
        //     tempSum += listItem.main.temp;
        //     humiditySum += listItem.main.humidity;

        //     if(listItem.main.temp < minTemp){
        //         minTemp = listItem.main.temp;
        //     }
        //     if(listItem.main.temp > maxTemp){
        //         maxTemp = listItem.main.temp;
        //     }
        //     if(listItem.main.humidity < minHumidity){
        //         minHumidity = listItem.main.humidity;
        //     }
        //     if(listItem.main.humidity > maxHumidity){
        //         maxHumidity = listItem.main.humidity;
        //     }
        // }

        // let avgTemp = tempSum / data.list.length;
        // let avgHumidity = humiditySum / data.list.length;

        // let result = {
        //     averageTemperature: avgTemp,
        //     averageHumidity: avgHumidity,
        //     minTemperature: minTemp,
        //     maxTemperature: maxTemp, 
        //     minHumidity: minHumidity,
        //     maxHumidity: maxHumidity
        // }
        // return result;

        //REDUCE
        let initialValues = {
            tempSum: 0,
            humiditySum: 0,
            minTemperature: data.list[0].main.temp,
            maxTemperature: data.list[0].main.temp, 
            minHumidity: data.list[0].main.humidity,
            maxHumidity: data.list[0].main.humidity
        }
        let res = data.list.reduce(function(result, item){
            
            result.tempSum += item.main.temp;
            result.humiditySum += item.main.humidity;

            if(item.main.temp < result.minTemperature){
                result.minTemperature = item.main.temp;
            }
            if(item.main.temp > result.maxTemperature){
                result.maxTemperature = item.main.temp;
            }
            if(item.main.humidity < result.minHumidity){
                result.minHumidity = item.main.humidity;
            }
            if(item.main.humidity > result.maxHumidity){
                result.maxHumidity = item.main.humidity;
            }

            return result;
        }, initialValues);

        //here we make object that contains the six result values that we need for home page
        let result = {
            averageTemperature: initialValues.tempSum / data.list.length,
            averageHumidity: initialValues.humiditySum / data.list.length,
            minTemperature: initialValues.minTemperature,
            maxTemperature: initialValues.maxTemperature, 
            minHumidity: initialValues.minHumidity,
            maxHumidity: initialValues.maxHumidity
        }
        return result;
    }
}

let uiService = {
    statisticHtml: document.getElementById("statistics"),
    displayStatistics: function(statistics){
        uiService.statisticHtml.innerHTML = `
        <div class="container">
            <div class="row">
                <h3 class="col-sm-6">AVG TEMP: ${statistics.averageTemperature} °C</h3>
                <h3 class="col-sm-6">AVG HUMIDITY: ${statistics.averageHumidity} %</h3>
            </div>
            <div class="row">
                <h3 class="col-sm-6">MIN TEMP: ${statistics.minTemperature} °C</h3>
                <h3 class="col-sm-6">MIN HUMIDITY: ${statistics.minHumidity} %</h3>
            </div>
            <div class="row">
                <h3 class="col-sm-6">MAX TEMP: ${statistics.maxTemperature} °C</h3>
                <h3 class="col-sm-6">MAX HUMIDITY: ${statistics.maxHumidity} %</h3>
            </div>
        </div>
        `
    },
    loadHourlyData: function(data){
        document.getElementById("hourlyTableResult").innerHTML = "";
        document.getElementById("hourlyTableResult").innerHTML +=`<div class="row">
        <div class='col-sm-2'>Icon</div>
        <div class='col-sm-2'>Description</div>
        <div class='col-sm-2'>Date and time</div>
        <div class='col-sm-2'>Temp <button class='btn' id='sortTempAsc'>ASC</button><button class='btn' id='sortTempDesc'>DESC</button></div>
        <div class='col-sm-2'>Humidity <button class='btn' id='sortHumidityAsc'>ASC</button><button class='btn' id='sortHumidityDesc'>DESC</button></div>
        <div class='col-sm-2'>Wind speed</div>
        </div>`;

        data.list.forEach(item => {
            document.getElementById("hourlyTableResult").innerHTML += `<div class="row">
            <div class='col-sm-2'><img src="http://openweathermap.org/img/w/${item.weather[0].icon}.png"></div>
            <div class='col-sm-2'>${item.weather[0].description}</div>
            <div class='col-sm-2'>${helperService.getDateFromSeconds(item.dt).toGMTString()}</div>
            <div class='col-sm-2'>${helperService.convertKelvinToCelsius(item.main.temp).toFixed(2)} C</div>
            <div class='col-sm-2'>${item.main.humidity}</div>
            <div class='col-sm-2'>${item.wind.speed} m/s</div>
            </div>`;
        })

        helperService.registerSortListeners();
    },
    toggleElement: function(element, showElement){
        if(showElement){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    }
}

let weatherApiService = {
    getWeatherData: async function(city){
        // let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=f369d0b7d1652d9e091fe8121aa44ede`;
        // let response = await fetch(url);
        // let data = await response.json();
        // //1. find statistics
        // let statistics = statisticsService.calculateStatistics(data);
        // //2. display the statistics
        // uiService.displayStatistics(statistics);
        try{
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=f369d0b7d1652d9e091fe8121aa44ede`;
            let response = await fetch(url);
            let data = await response.json();
            weatherData = data;
            //1. find statistics
            let statisticsResult = statisticsService.calculateStatistics(data);
            //2. display the statistics
            uiService.displayStatistics(statisticsResult);
            uiService.loadHourlyData(data);
        }
        catch{
            console.log("An error occurred");
        }
    }
}


navbarService.pageClickHandler();
weatherApiService.getWeatherData("skopje");
