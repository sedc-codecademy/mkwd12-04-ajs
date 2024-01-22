// 1) DECLARING/INITIALIZING GLOBAL VARIABLES AND CONSTANTS





// 2) SELECTING ELEMENTS FROM HTML





// 3) FUNCTION DEFINITIONS

// Function for retriving and rendering data from API (*OPTIONAL*)
// More advanced concept that will be discussed more thoroughly in the following lectures
function renderDataFromApi(url, renderFunction) {
    fetch(url)
        .then(response => response.json())
        .then(result => {
            renderFunction(result);
        })
        .catch(error => {
            console.error(error);
        })
}



// 4) HANDLE EVENTS
