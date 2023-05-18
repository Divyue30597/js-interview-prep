"use strict";

let animal = {
  eat: true,
};

let rabbit = {
  __proto__: animal,
  longEar: true,
  jumps: true,
};

console.log(rabbit.eat);
console.log(rabbit.longEar);

// isRabbit method is added on animal object as well as rabbit object, if this was added only at
// the animal object and not on the rabbit object, we get to see the rabbit object calling this
// method. rabbit.isRabbit() call finds the method immediately in the object and executes it,
// without using the prototype.
animal.isRabbit = function () {
  return false;
};

// rabbit.isRabbit = function () {
//   return true;
// };

let hops = {
  distance: 10,
  __proto__: rabbit,
};

console.log(hops.isRabbit());

console.log(rabbit.isRabbit());

let user = {
  firstName: "John",
  lastName: "Doe",

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.fullName);

// Setter triggers
admin.fullName = "Tomchi Sharma"; // (*)
console.log(admin.fullName); // (**)
console.log(user.fullName);

// Here in the line (*) the property admin.fullName has a getter in the prototype user, so it is
// called. And in the line (**) the property has a setter in the prototype, so it is called.

let a = [20];
let b = ["20"];
console.log(a[0] == b[0]); // true
console.log(a[0] === b[0]); // false
