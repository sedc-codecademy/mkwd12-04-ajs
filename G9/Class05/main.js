// const myFunction = () => {
//   setTimeout(() => {
//     console.log("This is first");
//     setTimeout(() => {
//       console.log("This is 2");
//       setTimeout(() => {
//         console.log("This is 3");
//         setTimeout(() => {
//           console.log("This is 4");
//           setTimeout(() => {
//             console.log("This is 5");
//             setTimeout(() => {
//               console.log("This is 6");
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// };

// myFunction();

// In 2015 javascript developers finally got the highly anticipated feature, promise. Promises are basically a more elegant and sophisticated way of waiting on things. When we know that we have to wait for some kind of data we create a Promise object and put it as a placeholder for the data that we need. The promise then goes through its states that represent the status of the data that we need. A promise can be in one of 3 states at any point in time

// 1. Pending
// 2. Fulfilled
// 3. Rejected

// When we wait for our data, the promise is in the pending state. The moment we get a result of our request for the data, the state will change either to Fulfilled or Rejected depending on the data that we get. If we successfully get the data, the promise state will turn in to Fulfilled and the promise will execute the methods that we have written to handle the requested data. If we don't get the data that we need or there were some problems in the process of acquiring the data, the state will change to Rejected and promise the code that we have written when expecting problems and errors

// ### Handling promises

// The cool thing about promises is that we don't have to write code inside the promise to have something executed in a particular order ( Synchronously ). We can write the function that returns the promise and then calls methods that will be executed after the promise is resolved or rejected.
// * myFunction()**.then**( data => ...handling the data ) - a function that is executed when a promise is resolved and accepts a callback with a parameter in which the data from the resolved promise is stored.
// * myFunction().then(...)**.catch**( error => ...handling error ) - a function that is executed when a promise is rejected and accepts a callback with a parameter in which the error message from the rejected promise is stored. This can also be executed if there is an exception or error while executing the code in the .then() function.
// * myFunction().then(...).catch(...).**finally**(()=>... some code) - a function that is executed at the end of the whole resolve chain. This function is executed always no matter if the promise is resolved or rejected and has no parameters

// first(-1000)
//   .then((success) => {
//     console.log(success);
//     second();
//   })
//   .catch((error) => console.log(`ERROR: ${error}`))
//   .finally(() => console.log(`Everything is done at: ${new Date()}`));

// fetch(
//   "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
// )
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log(`Everything is done at: ${new Date()}`));

// console.log(data);

// function getDocuments() {
//   return new Promise((resolve, reject) => {
//     fetch(
//       "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// function getImportantDocuments(documents) {
//   let importantDocuments = documents.filter((doc) => doc.important);
//   return new Promise((resolve, reject) => {
//     if (importantDocuments.length === 0) {
//       reject("There are no important documents!");
//     }
//     setTimeout(() => {
//       resolve(importantDocuments);
//     }, 3000);
//   });
// }

// function checkDocuments(documents) {
//   if (!documents || typeof documents != "object") {
//     throw new Error("Problem with documents!");
//   }
//   if (documents.length === 0) {
//     throw new Error("There is no documents!");
//   }
// }

// function showDocuments(documents) {
//   documents.forEach((doc) => {
//     console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
//   });
// }

// getDocuments()
//   .then((data) => {
//     // data = documents from server
//     console.log("We got the documents!");
//     checkDocuments(data);
//     return getImportantDocuments(data); // return results from getImportantDocuments(data)
//   })
//   .then((data) => {
//     return showDocuments(data);
//   })
//   .then((data) => {
//     // some code
//   })
//   .catch((error) => console.log(error.message));

// console.log("nesho");

// Looking now at promises we can safely say that callbacks are not that fun anymore. We can do the same but quicker and more organized with promises. But in 2016 along with ES7 came another even nicer-looking feature in javascript that help us solve the problem with waiting for data and executing code in a particular order. This is the async/await feature and it works on top of the feature we discussed previously promises. Basically, we create a **function** and we write **async** before it. This makes the function asynchronous, meaning that some code inside of it can wait until it is ready without blocking the whole execution stack. If we want to wait on some function ( that returns promise, because it works with promises ) we only write **await** before the function call that has a result promise. Then the function waits on that result and then continues with the code inside that function. The code outside of the function is executed as normal ( doesn't wait for the await inside the async function )

const myDataTwo = async (data) => {
  console.log("function 2 data", data);
};

async function myData() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/alpha/MKD");
    const data = await res.json();
    console.log(data);
    myDataTwo(data);
  } catch {
    (err) => console.log(err);
  }
}

myData();

// function first(workTime) {
//   return new Promise((resolve, reject) => {
//     if (workTime <= 0) {
//       reject("It's too short of a work time. Please try again!");
//     }
//     setTimeout(() => {
//       resolve("First thing, preparing for the second");
//     }, workTime);
//   });
// }

// function second() {
//   console.log("second thing!");
// }

// async function runFunctions() {
//   console.log(await first(2000)); // 2
//   second(); // 4
//   console.log(`Everything is done at: ${new Date()}`); // 5
// }
// runFunctions(); // 1
// console.log("This does not wait for the async function to finish!");

// When handling errors, in promises we used the catch function to catch any errors that might happen in the then method or if the promise changed its state to rejected. But we can also handle errors outside of the promises. We do that with the try/catch block. The try/catch block is an error-handling method used not only in javascript but in other languages as well. It works pretty simply. There are two blocks where we need to write code. The first is the **try** block. In it, we write our code and logic. That code will be observed and when error strikes, it is delegated in the other block called **catch**. The catch block accepts an error parameter and in it, the error that we get is stored. We can then handle the error in any way we see fit

// try {
//   showImportantDocuments();
//   console.log("This does not wait for the async function to finish!");
// } catch (error) {
//   console.log(error);
// }
