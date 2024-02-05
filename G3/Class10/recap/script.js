const swapiBtn = document.getElementById("callSwapiBtn");
const swapiUrl = "https://swapi.dev/api/people";

// swapiBtn.addEventListener("click", () => {
//     fetch(swapiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("SERVER ERROR !!!")
//             }
//             return response.json();
//         })
//         // .then(function (response) {
//         //     return response.json();
//         // })
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.log("ERROR HANDLING !!!");
//             console.error(error)
//         });
// })

// swapiBtn.addEventListener("click", async () => {
//     debugger;
//     let response = await fetch(swapiUrl);
//     let result = await response.json();
// })

async function handleClick() {
    try {
        debugger;
        let response = await fetch(swapiUrl);
        let result = await response.json();
    }
    catch {
        console.log("SOMETHING WENT WRONG");
    }
}

swapiBtn.addEventListener("click", handleClick);