
    //initially we add information as title and text. We add them to the elements on the first page.
    let header = document.getElementById("header");
    header.innerText = "Weather Alert App";
    let greetingResult = document.getElementById("greetingResult");
    greetingResult.innerText = "Welcome to the most accurate weather app!";
    //since the about info is static data, it is a good practice to keep it in the code and use
    //object, since it is kind of a package. It is not a good practice to be fixed in the HTML!
    let aboutInfo = {
        creator: "SEDC Team",
        yearOfCreation: 2021,
        rank: "First place award"
    }
    //Since we have different responsibilities in our app, it is good to group the data and the functionalities.
    //We use kind of services for that, represented as object.
    //The helperService has methods such as manipulating data.
    let helperService = {
        aggregateStatistics: function (responseData) {
            debugger
            //we need to find min and max. We can set them to the first member of the array and then compare
            //each member with the set min and max. If needed, they will change.
            let tempSum = 0;
            let humiditySum = 0;
            let highestTemp = responseData.list[0].main.temp_max;
            let lowestTemp = responseData.list[0].main.temp_min;
            let highestHumidity = responseData.list[0].main.humidity;
            let lowestHumidity = responseData.list[0].main.humidity;
            for (let item of responseData.list) {
                tempSum += item.main.temp;
                humiditySum += item.main.humidity;
                //We compare each member with the current mins and maxs and if needed it will change.
                if (highestTemp < item.main.temp_max) {
                    highestTemp = item.main.temp_max;
                }
                if (highestHumidity < item.main.humidity) {
                    highestHumidity = item.main.humidity;
                }
                if (lowestHumidity > item.main.humidity) {
                    lowestHumidity = item.main.humidity
                }
                if (lowestTemp > item.main.temp_min) {
                    lowestTemp = item.main.temp_min
                }
            }
            //we return the needed data as a  package. The best way is to have an object with named properties.
            //Each property can also be an object.
            return {
                temperature: {
                    highest: highestTemp,
                    lowest: lowestTemp,
                    average: tempSum / responseData.list.length
                },
                humidity: {
                    highest: highestHumidity,
                    lowest: lowestHumidity,
                    average: humiditySum / responseData.list.length
                }
            }
        }
    }


    //The uiService is responsible for rendering and manipulating the HTML.
    let uiService = {
        showAboutInfo: function () {
            document.getElementById("aboutResult").innerHTML = `<h2>This application is created by ${aboutInfo.creator}, in ${aboutInfo.yearOfCreation} year</h2>.
            <p>It has the following award <b>${aboutInfo.rank}</b>.</p>`;
        },
        showStatistics: function (aggregatedStatisticsData) {
            document.getElementById("statisticsResult").innerHTML = "";
            document.getElementById("statisticsResult").innerHTML = `<div class="container">
            <div class="row">
            <h3 class="col-sm-6">AVG TEMP: ${aggregatedStatisticsData.temperature.average}</h3>
            <h3 class="col-sm-6">AVG HUMIDITY: ${aggregatedStatisticsData.humidity.average}</h3>
            </div>
            <div class="row">
            <h3 class="col-sm-6">HIGHEST TEMP: ${aggregatedStatisticsData.temperature.highest}</h3>
            <h3 class="col-sm-6">HIGHEST HUMIDITY: ${aggregatedStatisticsData.humidity.highest}</h3>
            </div>
            <div class="row">
            <h3 class="col-sm-6">LOWEST TEMP: ${aggregatedStatisticsData.temperature.lowest}</h3>
            <h3 class="col-sm-6">LOWEST HUMIDITY: ${aggregatedStatisticsData.humidity.lowest}</h3>
            </div>
            </div>`;
        }
    }

    //The weatherService is responsible for accessing weather data.
    //Api key and base url are fixed data, we can keep them as properties. it has one method for
    //making AJAX calls.
    let weatherApiService = {
        

        apiKey: "f369d0b7d1652d9e091fe8121aa44ede", // Everybody enters their own key here. If you use this key it will be overloaded and will block
        city: "skopje",
        apiUrl: "https://api.openweathermap.org/data/2.5/forecast",
        currentData: {},
        getData: function(){
            fetch(`${this.apiUrl}?q=${this.city}&units=metric&APPID=${this.apiKey}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(weatherResult) {
                debugger
                console.log("Request succeeded");
                console.log(weatherResult);
                //after we get the response, we need to do some data aggregations. We call the appropriate service and method.
                let aggregatedStatistics = helperService.aggregateStatistics(weatherResult);
                console.log(aggregatedStatistics);
                //after we get the aggregated data, we need to show it on the UI with appropriate HTML, so we send it
                //to our service and its method.
                uiService.showStatistics(aggregatedStatistics);
            })
            .catch(function(error){
                console.log('The request failed!');
                console.log(error);
            });
        },
    }

    //Navigation service is responsible for the navigation in our app. That is why it is keeping info 
    //for the navigation items and navigation functionalities.
    let navigationService = {
        

        navItems: document.getElementsByClassName("nav-link"),
    navSearch: document.getElementById("citySearchInput"),
    searchBtn: document.getElementById("citySearchBtn"),
    pages: document.getElementById("pages").children,
    activateItem: function(item){
        for (let navItem of this.navItems) {
            navItem.classList.remove("active");
        }
        item.classList.add("active");
    },
    showPage(page){
        for (let pageElement of this.pages) {
            pageElement.style.display = "none";
        }
        page.style.display = "block";
    }, 
    registerNavListeners(){
        for(let i = 0; i < this.navItems.length; i++){
            this.navItems[i].addEventListener("click", function(){
                navigationService.activateItem(this);
                navigationService.showPage(navigationService.pages[i]);
            })
        }
        this.searchBtn.addEventListener("click", function(e){
            e.preventDefault();
            weatherService.city = navigationService.navSearch.value;
            weatherService.getData();
        })
        
    }
    }
    //initially, we must get data for a default city, to be shown on the first page.
    weatherApiService.getData();
    //initially, we fill the about info. It will be shown when we get to the About page.
    uiService.showAboutInfo();
    //when the document is ready we must set the event listeners to our elements.
    navigationService.registerNavListeners();