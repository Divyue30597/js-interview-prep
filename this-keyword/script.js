"use strict";

console.log(this); // by default displays the window object

// Function Expression
const calcAgeExpr = function (year) {
  console.log(2031 - year);
  console.log(this); // undefined - Since there is no owner for this function or the function is not attached to any object.
};

calcAgeExpr(1997);

// Arrow function
const calcAgeArr = (birthYear) => {
  console.log(2031 - birthYear);
  console.log(this); // window object -> uses lexical this -> it uses the `this` of its parent function or its parents scope, in this case it is pointing to the window object
};

calcAgeArr(1997);

const tomchi = {
  year: 1997,
  getAge: function () {
    console.log(this); // When we have a method call, the this keyword inside the method will be the object that is calling the method.
    console.log(2023 - this.year);
  },
};

tomchi.getAge();

const puru = {
  year: 2000,
};
puru.getAge = tomchi.getAge;
puru.getAge();
