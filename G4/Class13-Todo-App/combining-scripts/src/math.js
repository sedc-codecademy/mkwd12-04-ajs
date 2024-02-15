const addTwoNumbers = (numOne, numTwo) => numOne + numTwo;

const subtractTwoNumbers = (numOne, numTwo) => numOne - numTwo;

export const multiplyTwoNumbers = (numOne, numTwo) => numOne * numTwo;

export const divideTwoNumbers = (numOne, numTwo) => numOne / numTwo;

export const printFullName = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
};

// We can only have 1 default export
export default { addTwoNumbers, subtractTwoNumbers };
