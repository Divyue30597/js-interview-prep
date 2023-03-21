"use strict";

// Rest operator -> It takes in the data and stuffs that data into an array and it works in function arguments as well as in array and object destructuring assignments.
console.log("------ Rest Operator ------");
function addFiveToNumOfArr(...numbers) {
  return numbers.map((num) => num + 5);
}

console.log(addFiveToNumOfArr(1, 2, 3, 4, 5));

const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);

// Destructuring with rest operator
const { e, f, ...others } = {
  e: 1,
  f: 2,
  g: 3,
  h: 4,
};

console.log(e, f, others);

// Spread operator - unpacking an array/object of data. we can say the it let's us spread open an array or create copy of objects without using the Object.Create or slice or a library function.
console.log("------ Spread Operator ------");
function addFiveToNumbersArr(numbers) {
  return [...numbers, 5];
}

console.log(addFiveToNumbersArr([1, 2, 3, 4]));

const person = {
  name: "tomchi",
  age: 25,
};

const copyOfTomchi = { ...person };

console.log(person);
copyOfTomchi.fullName = "Tomchi Sharma";
copyOfTomchi.originalName = function () {
  return "Divyue Sharma";
};
console.log(copyOfTomchi);
