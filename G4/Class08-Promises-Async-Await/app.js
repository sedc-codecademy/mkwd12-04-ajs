console.log("it is working sync");

const makeSaladCallback = () => {
  setTimeout(() => {
    console.log("All vegatables diced");
    setTimeout(() => {
      console.log("Salt added");
      setTimeout(() => {
        console.log("Oil added");
        setTimeout(() => {
          console.log("Vinegar added");
          setTimeout(() => {
            console.log("Salad Mixed");
            setTimeout(() => {
              console.log("Salad served");
            }, 2000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 2000);
};

// makeSaladCallback();

const testPromiseFunc = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => {
        resolve("Promise was successful");
      }, 1500);
    } else {
      setTimeout(() => {
        reject("Something went wrong");
      }, 1500);
    }
  });
};

// testPromiseFunc()
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/todos/1213123123123")
//   .then(response => {
//     console.log(response);

//     if (response.status === 404) {
//       console.log("resource was not found");
//     }

//     return response.json();
//   })
//   .then(json => console.log(json))
//   .catch(error => console.log(error));

// Promises chaining

const firstPromiseFunc = () => {
  return new Promise((resolve, reject) => {
    // reject("Something Went Wrong");

    setTimeout(() => {
      resolve({ msg: "First Promise Success" });
    }, 1500);
  });
};

const secondPromiseFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ msg: "Second Promise Success" });
    }, 1500);
  });
};

// firstPromiseFunc()
//   .then(value => {
//     console.log(value);
//     return secondPromiseFunc();
//   })
//   .then(value => console.log(value))
//   .catch(err => console.error(err))
//   .finally(() => console.log(`Promise finished at ${new Date()}`));
// secondPromiseFunc().then(value => console.log(value));

// Promise functions for making a salad

const cutVegetables = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All vegetables diced");
    }, 2000);
  });
};

const addOil = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Oil added");
    }, 1000);
  });
};

const addSalt = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Salt added");
      //   reject("No salt, please try again later");
    }, 1000);
  });
};

const addVinegar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Vinegar added");
    }, 1000);
  });
};

const mixSalad = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Salad mixed");
    }, 2000);
  });
};

const serveSalad = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Salad served!");
    }, 1500);
  });
};

const makeSaladPromise = () => {
  cutVegetables()
    .then(value => {
      console.log(value);
      return addOil();
    })
    .then(value => {
      console.log(value);
      return addSalt();
    })
    .then(value => {
      console.log(value);
      return addVinegar();
    })
    .then(value => {
      console.log(value);
      return mixSalad();
    })
    .then(value => {
      console.log(value);
      return serveSalad();
    })
    .then(value => {
      console.log(value);
    })
    .catch(error => console.error(error))
    .finally(() => {
      console.log(`Salad finished at ${new Date()}`);
    });
};

// makeSaladPromise();

// Async/Await

// All async functions always without an exception return a promise, they will never return data as normal functions
async function testAsync() {}

const asyncExample = async () => {
  const firstPromiseData = await firstPromiseFunc();

  console.log(firstPromiseData);

  const secondPromiseData = await secondPromiseFunc();

  console.log(secondPromiseData);
};

// asyncExample();

// Fetching users and rendering list of users in html

const fetchUsersPromise = () => {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
};

// fetchUsersPromise();

const fetchUsersAsync = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.co");
    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong in fetch users");
  }
};

const renderUsers = users => {
  console.log("render users called");

  const usersListEl = document.querySelector(".user-list");

  usersListEl.innerHTML = users
    .map(user => `<li>Name: ${user.name} | Email: ${user.email}</li>`)
    .join("");
};

// fetchUsersAsync();

const app = async () => {
  try {
    // 1. Fetch users using await
    const users = await fetchUsersAsync();

    // 2. Use user data to render list
    renderUsers(users);
  } catch (error) {
    document.querySelector(".error").innerText = error;
  }
};

// app();

const makeSaladAsync = async () => {
  try {
    const stepOne = await cutVegetables();
    console.log(stepOne);
    const stepTwo = await addSalt();
    console.log(stepTwo);
    const stepThree = await addOil();
    console.log(stepThree);
    const stepFour = await addVinegar();
    console.log(stepFour);
    const stepFive = await mixSalad();
    console.log(stepFive);
    const stepSix = await serveSalad();
    console.log(stepSix);
  } catch (error) {
    console.log(error);

    document.querySelector(".error").innerText = error;
  }
};

makeSaladAsync();
