let header = document.getElementById("header");
header.innerText = "Weather Alert App";

let greetingResult = document.getElementById("greetingResult");
greetingResult.innerText = "Welcome to the most accurate weather app!";

//navigation service is responsible for the navigation in our app. This is why we are keeping all the info 
//and functionalities about the navigation here
let navigationService = {
    navItems: document.getElementsByClassName("nav-item"),
    pages: document.getElementsByClassName("page"),
    activateItem: function(item){
            for(let navItem of this.navItems){
                navItem.classList.remove("active");
            }
            item.classList.add("active");
    },
    dipsplayPage:function(index){
        //we hide all the pages, beacuse we don't know which one is active
       for(let page of this.pages){
        page.style.display = "none";
       }
       this.pages[index].style.display = "block";
    },
    registerClickEventListeners : function(){
        for(let i = 0; i < this.navItems.length; i++){
            this.navItems[i].addEventListener("click", function(e){
                navigationService.dipsplayPage(i);
                navigationService.activateItem(this); // this => target of the event, the navItem that is clicked
            })
        }
    }
}

let weatherApiService={
    apiKey: "31b3375edaaf1a0b94cb96483eb94296",
    getWeatherData: async function(city){
        // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${this.apiKey}`)
        // .then(function(response){
        //     return response.json();
        // })
        // .then(function(data){ //this then is for the .json() promise
        //         console.log(data);
        //      //calculate the statistics
        //      let statiscsResult = statisticsService.calculateStatistics(data);
        //      console.log(statiscsResult);
        //      //display the statistics
        //      uiService.displayStatistcs(statiscsResult);
            
        // })
        // .catch(function(error){
        //     console.log(error);
        // })
        try{
            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${this.apiKey}`;
            let response = await fetch(url);
            let data = await response.json();
            //find statistics
            let statisticsResult = statisticsService.calculateStatistics(data);
            uiService.displayStatistcs(statisticsResult);
        }catch(error){
            console.log(`An error: ${error} occured`)
        }   
    }
}


let statisticsService ={
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
        //     averageTemp: avgTemp.toFixed(3),
        //     averageHumidity: avgHumidity,
        //     minTemperature: minTemp,
        //     maxTemperature: maxTemp,
        //     minHumidity: minHumidity,
        //     maxHumidity: maxHumidity
        // }

        // return result;

        let initialValues = {
            tempSum: 0,
            humiditySum :0,
            minTemp :data.list[0].main.temp,
            maxTemp :data.list[0].main.temp,
            minHumidity: data.list[0].main.humidity,
            maxHumidity : data.list[0].main.humidity,
        }

        //let resultInitialValues = initialValues; //PASSED BY REFERENCE
        //the function inside reduce takes two params: the inital values and each item of the array (data.list)
        let res = data.list.reduce(function(resultInitialValues, listItem){
            resultInitialValues.tempSum += listItem.main.temp;
            resultInitialValues.humiditySum += listItem.main.humidity;

            if(listItem.main.temp < resultInitialValues.minTemp){
                resultInitialValues.minTemp = listItem.main.temp;
            }

            if(listItem.main.temp > resultInitialValues.maxTemp){
                resultInitialValues.maxTemp = listItem.main.temp;
            }
            if(listItem.main.humidity < resultInitialValues.minHumidity){
                resultInitialValues.minHumidity = listItem.main.humidity;
            }

            if(listItem.main.humidity > resultInitialValues.maxHumidity){
                resultInitialValues.maxHumidity = listItem.main.humidity;
            }

            return resultInitialValues;
        }, initialValues)

        //initial values is the object which we use as initial value for reduce
        //it is being passed in each iteration of reduce
        //in each iteration of reduce, the values of its properties change 
        //at the end we have sums and mins and maxs in initialValues properties
        //initalValues is passed by reference in each iteration
        console.log(initialValues);

        
        let result = {
            averageTemp: initialValues.tempSum /  data.list.length,
            averageHumidity: initialValues.humiditySum /  data.list.length,
            minTemperature: initialValues.minTemp,
            maxTemperature: initialValues.maxTemp,
            minHumidity: initialValues.minHumidity,
            maxHumidity: initialValues.maxHumidity
        }
        return result;
    }
}

let uiService = {
    displayStatistcs: function(statiscsResult){
        document.getElementById("statisticsResult").innerHTML = "";
        document.getElementById("statisticsResult").innerHTML = `
        <div class="container">
            <div class="row">
                <h2 class="col">AVG TEMP: ${statiscsResult.averageTemp} C </h2>
                <h2 class="col">AVG HUMIDITY: ${statiscsResult.averageHumidity} % </h2>
            </div>
            <div class="row">
                <h2 class="col-sm-6">MIN TEMP: ${statiscsResult.minTemperature} C </h2>
                <h2 class="col-sm-6">MIN HUMIDITY: ${statiscsResult.minHumidity} % </h2>
             </div>
          <div class="row">
                <h2 class="col-sm-6">MAX TEMP: ${statiscsResult.maxTemperature} C </h2>
                <h2 class="col-sm-6">MAX HUMIDITY: ${statiscsResult.maxHumidity} % </h2>
            </div>
        </div>
        `
    }
}

navigationService.registerClickEventListeners();
weatherApiService.getWeatherData("Skopje");