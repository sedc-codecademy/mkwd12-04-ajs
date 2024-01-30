const app = () => {
  console.log("what is a callback actually?");

  const clickBtn = document.querySelector("#clickBtn");

  clickBtn.addEventListener("click", () => {
    console.log("i was clicked");
  });

  const numArray = [2, 23, 1, 23, 123, 4, 3, 234, 6, 45, 7, 6, 45, 43, 3];

  numArray.forEach(num => {
    console.log("The number value is:", num);
  });

  // Calling filter returns a new filtered array
  const filteredNums = numArray.filter(num => {
    // Tis function always returns a boolean
    return num > 20;
  });

  console.log(filteredNums);

  const multipliedNums = numArray.map(num => {
    return num * 10;
  });

  console.log(multipliedNums);

  // Method chaining example

  const result = numArray
    .filter(num => num > 10)
    .map(num => num * 10)
    .reduce((acc, el) => acc + el, 0);

  console.log(result);

  const foundNum = numArray.find(num => num + 6 === 12);

  console.log(foundNum);

  const numArrCopy = numArray.map(el => el);

  console.log(numArray, numArrCopy);

  numArrCopy.sort((a, b) => b - a);

  console.log(numArrCopy);

  // IIFE

  const printHello = () => {
    console.log("Helooo");
  };
};

(function () {
  console.log("i am called from an iife");
  app();
})();

const sayHello = name => {
  return () => {
    console.log(`Hello there name ${name}`);
  };
};

sayHello("Borche")();
