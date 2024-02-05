// CALLBACK FUNCTIONS

// Function that handles successfull response
function successCallback(result) {
    console.log('Resource FOUND', result);
}

// Function that handles unsuccessful response
function failureCallback(error) {
    console.log('Resource NOT FOUND', error);
}


function fetchResource(url, successCallback, failureCallback) {
    fetch(url)
    .then(response => response.json())
    .then(data => successCallback(data))
    .catch(error => failureCallback(error))
}

// CALLBACK HELL
fetchResource('https://jsonplaceholder.typicode.com/users', users => {
    console.log('Users found', users);
    fetchResource('https://jsonplaceholder.typicode.com/todos', todos => {
        console.log('Todos found', todos)
        fetchResource('https://jsonplaceholder.typicode.com/posts', posts => {
            console.log('Posts found', posts)
        }, failureCallback)
    }, 
    failureCallback)
}, 
failureCallback)


// PROMISES
const randomNumberPromise = new Promise((resolve, reject) => {
    const num = Math.random();
    // console.log(num);
    if (num >= 0.5) {
        resolve('Promise is FULFILED');
    } else {
        reject('Pomise FAILED');
    }
})


function handleReslove(value) {
    console.log(value);
}

function handleReject(reason) {
    console.error(reason);
}

randomNumberPromise.then(handleReslove, handleReject);


// HANDLING PROMISES WITH AJAX
function getStarWarsPeople() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://swapi.dev/api/people',
            success: (response) => {
                resolve(response);
            },
            error: (err) => {
                reject(err);
            }
        })
    })
}

const starWarsPeoplePromise = getStarWarsPeople();
console.log(starWarsPeoplePromise);

getStarWarsPeople()
.then(data => {
    let maleCharacters = data.results.filter(char => char.gender === 'male');
    console.log(maleCharacters);
    return maleCharacters;
})
.then(filteredData => {
    const maleCharNames = filteredData.map(char => char.name);
    console.log(maleCharNames);
    return maleCharNames;
})
.catch(err => {
    console.log('SOMETHING WRONG HAPPENED', err);
})


// HANDLING PROMISES WITH FETCH
function fetchCountryInfo(countryCode) {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then(response => {
        if (response.ok === false) {
            console.log('GRESNO TI E APITO!')
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return response.json();
    })
    .then(data => {
        console.log('Country information:', data);
        return data;
    })
    .then(countryInfo => {
        let countryName = countryInfo[0].name.common;
        console.log(countryName);
        return countryName;
    })
    .catch(error => {
        console.error('Error with parsing the data', error);
    })
}

// fetchCountryInfo('blabla');

// ASYNC/AWAIT
async function fetchCountryInfoAsync(countryCode) {
    let url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    let response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`HTTP ERROR. Status: ${response.status}`);
    }

    let data = await response.json();
    return data;
}


let result = fetchCountryInfoAsync('MK');
result.then(data => {
    let countryName = data[0].name.common;
    console.log(countryName);
    return countryName;
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log('FROM FINALLY BLOCK');
});
// console.log(result);

// WILL NOT WORK - top level await is not allowed, only inside another function (which need to be marked as async)
// let a = await fetchCountryInfoAsync('MK');


// TRY/CATCH
async function fetchData(code) {
    try {
        let result = await fetchCountryInfoAsync(code);
        console.log(result);
    } catch (error) {
        console.log('UNEXPECTED ERROR HAPPENED', error);
    } 
    return result;
}

// fetchData('blabla');


function divide(first, second) {
    try {
        if (second === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return first / second;
    } catch (error) {
        // Handle the error
        console.log("Error:", error.message);
    }
}

divide(10, 0);



