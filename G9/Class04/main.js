// #### setTimeout

// Will execute a function passed as an argument when a given time passes. The second parameter of this function is how
// many milliseconds do we actually want to wait, or delay some code

// setTimeout(() => {
//   console.log("Hello World");
// }, 1000);
// console.log("Hello World 2");

// #### setInterval

// Will execute a function passed as an argument when a given time passes. The second parameter of this function is how
// many milliseconds do we actually want to wait or delay some code

// setInterval(() => {
//   console.log("I'm running every second");
// }, 1000);

// const myFirstFunction = () => {
//   console.log("Hello World");
// };

// const mySecondFunction = () => {
//   setTimeout(() => console.log("Hello World 2"), 1000);
// };

// mySecondFunction();
// myFirstFunction();

// ## Callback functions

// Callback functions are functions that are executed inside of other functions ( usually after the execution of the other,
// parent function ). Since javascript executes line by line and throws functions out of the stack when we have to wait for
// them, it is easy to see that sometimes we would need a system that actually executes the code in our defined order. This
// is where callbacks come into the picture. If we want to be sure that a function is executed after another, then we just
// pass that function as an argument to the first one. That way when the first one completes inside of it we call it the
// second one. This way we keep the order of execution

// const calculator = (callBack, a, b) => {
//  console.log("I'm running");
//  return callBack(a, b);
// }

// let returnValue = calculator((a, b) => {
//   return a + b
// },2,4)

// console.log(returnValue);

// const first = (callback) => {
//  setTimeout(() => {
//   console.log("Hello World 1");
//   callback();
//  },1000)
// }

// const second = () => {
//  console.log("Hello World 2");
// }

// first(second)

const apiCallFunction = (url, callback, callBackTwo) => {
  fetch(url).then((response) => {
    response
      .json()
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        callBackTwo();
      });
  });
};

const dataFunction = (data) => {
  //   Use the split and map functions to extract and map character names from a film.
  // Endpoint: Any film endpoint, e.g., /api/films/1/
  console.log(data);
  // let dataaa = data.results.find(
  //   (el) => new Date(el.release_date).getFullYear() < 2000
  // );
  // console.log(dataaa);
  let popRes = data.results.reduce((acc, curr) => {
    // console.log(curr.population);
    if (isNaN(parseInt(curr.population))) {
      return acc;
    } else {
      acc.population + Number(curr.population);
    }
    return acc.population;
  });

  // let popRes = data.results.reduce((acc, curr) => {
  //   if (isNaN(parseInt(curr.population))) {
  //     return acc;
  //   } else {
  //     acc += Number(curr.population);
  //   }
  //   return acc;
  // }, 0);

  console.log(popRes);
};

const erroeFunction = () => {
  console.log("We dont have the data");
};

apiCallFunction("https://swapi.dev/api/planets/", dataFunction, erroeFunction);

console.log("we are done");
