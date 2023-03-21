# JS Interview topics

## Event Delegation

Instead of assigning some event listener to specific nodes, we assign the event listener to their parent node and that event will fire whenever the event is triggered on the descendent element to event bubbling up in the DOM.

Advantages:

- Memory footprints goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.
- There is no need to unbind/bind the handler from elements that are removed/added.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event delegation</title>
  </head>
  <body>
    <ul id="parent-list">
      <li id="post-1">Item 1</li>
      <li id="post-2">Item 2</li>
      <li id="post-3">Item 3</li>
      <li id="post-4">Item 4</li>
    </ul>
    <script>
      document
        .getElementById("parent-list")
        .addEventListener("click", function (e) {
          // e.target is clicked element
          // console.log(e.target);
          if (e.target && e.target.nodeName == "LI") {
            console.log(
              "List item",
              e.target.id.replace("post-", ""),
              "was clicked!"
            );
          }
        });
    </script>
  </body>
</html>
```

## Hoisting

Hoisting is **JavaScript's default behavior of moving declarations to the top**. The process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

In JavaScript, a variable can be declared after it has been used. In other words, a variable can be used before it has been declared.

Hoisting explains the behaviour of the variable declaration in the code. Variables declared or initialized with the `var` keyword will have their **declaration** "moved" up to the top of their module/function-level scope, which we refer to as hoisting. However, only the **declaration is hoisted**, the assignment (if there is one), will stay where it is.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p id="demo-1"></p>
    <p id="demo-2"></p>
    <p id="demo-3"></p>
    <p id="demo-4"></p>
    <p id="demo-5"></p>
    <p id="demo-6"></p>

    <script>
      // Test case 1: Initialized x first and then initialized y later.
      var x = 5; // Initialize x
      elem = document.getElementById("demo-1"); // Find an element
      elem.innerHTML = "x is " + x + " and y is " + y; // Display x and y
      var y = 7; // Initialize y
      // OP : x is 5 and y is undefined

      // Test Case 2: Initialized q first and declared w, and then later w is initialized.
      var q = 5; // Initialize x
      var w; // declared w
      elem = document.getElementById("demo-2"); // Find an element
      elem.innerHTML = "q is " + q + " and w is " + w; // Display x and y
      w = 7; // Initialized w
      // OP: q is 5 and w is undefined

      // Test case 3: Intializing e and r at the top
      var e = 5; // Initialize x
      var r = 7; // Initialize w
      elem = document.getElementById("demo-3"); // Find an element
      elem.innerHTML = "e is " + e + " and r is " + r; // Display x and y
      // OP: e is 5 and r is 7

      // Test case 4: Intializing e and r at the top
      elem = document.getElementById("demo-4"); // Find an element
      elem.innerHTML = "t is " + t + " and u is " + u; // Display x and y
      var t = 5; // Initialize t
      var u = 7; // Initialize y
      // OP: t is undefined and u is undefined

      // Test case 5: Declaring i and o at the top
      var i; // Initialize t
      var o; // Initialize y
      elem = document.getElementById("demo-5"); // Find an element
      elem.innerHTML = "i is " + i + " and o is " + o; // Display x and y
      i = 5; // Initialize t
      o = 7; // Initialize y
      // OP: i is undefined and o is undefined

      // Test case 5: Declaring i and o at the top
      p = 5; // assign to p
      a = 7; // assign to a
      elem = document.getElementById("demo-6"); // Find an element
      elem.innerHTML = "p is " + p + " and a is " + a; // Display x and y
      var p; // Initialize t
      var a; // Initialize y
      // OP: p is 5 and a is 7

      // Using let and const
      // This will throw referenceError: Cannot access 'carName' before initialization
      // carName = "Volvo";
      // let carName;

      // This will throw error Missing initializer in const declaration
      // carName2 = "Volvo"
      // const carName2;

      // Hoisting and TDZ in Practice
      // Variables
      console.log(me); // undefined Why?? -> variables declared with var are actually hoisted, but they are hoisted to the value of undefined.
      console.log(job); // Reference Error -> Why?? Because the job variable is still in temporal dead zone the temporal dead zone of a variable declared with a let or const, starts from the beginning of the current scope and so that's basically here, so in this case, it's the global scope. So from the beginning of the scope until the point of the code where it is defined and so here.
      console.log(year);
      var me = "Jonas";
      let job = "teacher";
      const year = 1991;
      // Functions
      console.log(addDecl(2, 3));
      // console.log(addExpr(2, 3)); We get the error here
      // Because the function is now a const variable and so now the addExpr (74) is in the temporal dead zone.
      // Here you can see this will return is undefined.
      console.log(addArrow);
      // Any variable declared with var will be hoisted and set to undefined.
      // Here (67) we are trying to call undefined. We are doing the same as undefined(2, 3) in console and get the same error.
      // console.log(addArrow(2, 3));
      function addDecl(a, b) {
        return a + b;
      }
      // We are simply assigning a function value to this variable. And since the variable was assigned with const it is now in a temporal dead zone.
      const addExpr = function (a, b) {
        return a + b;
      };
      var addArrow = (a, b) => a + b;
      // Example
      console.log(undefined);
      //It is happening because of hoisting because numProducts value is not 10 but undefined. Since undefined is a falsy value. And the below block will run and thus deleteShoppingCart() function is called. Use const and let all the time and not to use var
      if (!numProducts) deleteShoppingCart();
      var numProducts = 10;
      function deleteShoppingCart() {
        console.log("All products deleted!");
      }
      // Variables declared with let and const donot create properties on the window object.
      var x = 1;
      let y = 2;
      const z = 3;
      console.log(x === window.x);
      console.log(y === window.y);
      console.log(z === window.z);

      // Function Declaration
      console.log(foo); // [Function: foo]
      foo(); // 'FOOOOO'
      function foo() {
        console.log("FOOOOO");
      }
      console.log(foo); // [Function: foo]

      // Function Expression
      console.log(bar); // undefined
      bar(); // Uncaught TypeError: bar is not a function
      var bar = function () {
        console.log("BARRRR");
      };
      console.log(bar); // [Function: bar]
    </script>
  </body>
</html>
```

## Explain `this` keyword

```javascript
"use strict";

console.log(this); // by default displays the window object

// Function Expression
const calcAgeExpr = function (year) {
  console.log(2031 - year);
  console.log(this); // undefined - Since there is no owner for this function or the function is not attached to
  // any object.
};

calcAgeExpr(1997);

// Arrow function
const calcAgeArr = (birthYear) => {
  console.log(2031 - birthYear);
  console.log(this); // window object -> uses lexical this -> it uses the `this` of its parent function or its
  // parents scope, in this case it is pointing to the window object
};

calcAgeArr(1997);

const tomchi = {
  year: 1997,
  getAge: function () {
    console.log(this); // When we have a method call, the this keyword inside the method will be the object that is
    // calling the method.
    console.log(2023 - this.year);
  },
};

tomchi.getAge();

const puru = {
  year: 2000,
};
puru.getAge = tomchi.getAge;
puru.getAge();
```

## Rest and Spread Operator

**Rest operator** -> It takes in the data and stuffs that data into an array and it works in function arguments as well as in array and object destructuring assignments.

**Spread operator**- unpacking an array/object of data. we can say the it let's us spread open an array or create copy of objects without using the Object.Create or slice or a library function.

```javascript
"use strict";

// Rest operator -> It takes in the data and stuffs that data into an array and it works in function arguments as
// well as in array and object destructuring assignments.
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

// Spread operator - unpacking an array/object of data. we can say the it let's us spread open an array or create
// copy of objects without using the Object.Create or slice or a library function.
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
```

## Deep Copy vs Shallow Copy of object in JS

```javascript
"use strict";

const person = {
  firstName: "person",
  lastName: "lastName",
  age: 1997,
};

// To copy objects in JS we can use the spread operator (...), Object.assign() or the JSON.parse() and JSON.stringify()

// Spread operator and Object.assign performs shallow copy, if reference type properties are
// present then their reference is copied as well and a new reference for the copied object is not
// created.
const spreadOpCopyOfPerson = { ...person };
console.log(
  "spreadOpCopyOfPerson",
  (spreadOpCopyOfPerson.name = "tomchi"),
  spreadOpCopyOfPerson
);

const assignCopyOfPerson = Object.assign({}, person);
console.log("assignCopyOfPerson", assignCopyOfPerson);

// JSON.parse(JSON.stringify()) performs deep copy of an object which means a new reference will be
// created when referring to the inner objects or properties of reference type.
const parseStringifyCopyOfPerson = JSON.parse(JSON.stringify(person));
console.log("parseStringifyCopyOfPerson", parseStringifyCopyOfPerson);

console.log(
  "------ Shallow Copy example using Object.assign and Spread Operator ------"
);
// Shallow Copy using Object.assign
let personV2 = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

// Object.assign performs a partial deep copy of the object
const copiedPersonV2 = Object.assign({}, personV2);
const copiedPersonV2Spread = { ...personV2 };

// Here we are updating copiedPersonV2 properties and expect to see this change when we
// console.log(copiedPersonV2)
copiedPersonV2.firstName = "Tomchi";
copiedPersonV2.address.street = "C-204, BK Enchanting Enclave";

copiedPersonV2Spread.firstName = "Tomchi";
copiedPersonV2Spread.address.street = "C-204, BK Enchanting Enclave";
copiedPersonV2Spread.address.country = "India";

console.log("------ Object.assign copy ------");
console.log(copiedPersonV2);

console.log("------ Spread Operator copy ------");
console.log(copiedPersonV2Spread);

console.log("------ Original Person Copy ------");
// When we console.log(personV2), we don't expect the value of address to be changed, we want to
// retaing it as it was initiated, but address' value will change. Since both the object share same
// reference address to the address object and it is pointing that address in case of personV2
// object as well as copiedPersonV2.
console.log(personV2);

console.log("------ Deep Copy ------");

let personV3 = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

// This method achieves deep copy only if there is no function attached to the object.
const parseStringifyCopyOfPersonV3 = JSON.parse(JSON.stringify(personV3));

parseStringifyCopyOfPersonV3.firstName = "Tomchi";
parseStringifyCopyOfPersonV3.address.street = "C-204, BK Enchanting Enclave";
parseStringifyCopyOfPersonV3.address.country = "India";

console.log("------ Using JSON.parse(JSON.Stringify(personV3)) ------");
console.log(parseStringifyCopyOfPersonV3);

console.log("------ Deep copy using Spread Operator ------");
const clone = {
  ...personV3,
  firstName: "Tomchi",
  address: {
    ...personV3.address,
    street: "C-204, BK Enchanting Enclave",
    country: "India",
  },
};

console.log(clone);

// We expect he personV3 to be unaffected if the changes are done on copied object of personV3
// i.e., parseStringifyCopyOfPersonV3
console.log(personV3);
```

## Constructor Function

A constructor function is a regular function with the following convention:

- The name of a constructor function starts with a capital letter like Person, Document, etc.
- A constructor function should be called only with the new operator.

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let person = new Person("Tomchi", "Sharma");
```

### What new operator does?

The new operator does the following:

- Create a new empty object and assign it to the this variable.
- Assign the arguments 'John' and 'Doe' to the firstName and lastName properties of the object.
- Return the this value.

```javascript
function Person(firstName, lastName) {
  // this = {};

  // add properties to this
  this.firstName = firstName;
  this.lastName = lastName;

  // return this;
}
```

### Adding methods to the JS objects

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

let person = new Person("John", "Doe");
console.log(person.getFullName());
```

## use strict

Since JS is evolving every year with new updates and feature, JS got some new features while old functionality did not change. This benefits in a way of never breaking the old existing code. But the downside was that any mistake or some imperfect decision made by JS creators got stuck in the language forever.

In ES5 release, some of the existing features of the language were modified and some new features were added to the language. To keep the old code working, these modifications are off by default, i.e., `"use strict"` is off by default.

Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable **use strict** automatically. So we don’t need to add the `"use strict"`directive, if we use them.

## Prototypal Inheritance

In JS, objects have a special hidden property `[[Prototype]]`, that is either null or references another object. That object is called **prototype**.

For instance, we have a `user` object with its properties and methods, and want to make `admin` and `guest` as slightly modified variants of it. We’d like to reuse what we have in `user`, not copy/reimplement its methods, just build a new object on top of it. Prototypal inheritance is a language feature that helps in that.

When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”

There are only two limitations:

- The references can’t go in circles. JavaScript will throw an error if we try to assign `__proto__` in a circle.
- The value of `__proto__` can be either an object or null. Other types are ignored.

```javascript
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
```

**NOTE:**

- `__proto__` is a historical getter/setter for `[[Prototype]]`. `__proto__` is not the same as the internal `[[Prototype]]` property. It’s a getter/setter for `[[Prototype]]`

- The `__proto__` property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use `Object.getPrototypeOf/Object.setPrototypeOf` functions instead that get/set the prototype.

**The value of `this`**

what’s the value of `this` inside set `fullName(value)`? Where are the properties `this.firstName` and `this.lastName` written: into `user` or `admin`?

The answer is simple: `this` is not affected by `prototypes` at all. No matter where the method is found: in an object or its prototype. In a method call, `this` is always the object before the dot. So, the setter call `admin.fullName=` uses `admin` as `this`, not `user`.

## Functions

Functions are `first-class objects`, because

- they can be passed to other function
- returned from functions
- assigned to variables and properties
- can have properties and methods just like other objects
- What distinguishes them from other objects is that functions can be called.

## Data types

### Primitive data types

number, string, Boolean, null, undefined, BigInt, Symbol

### Reference data type

Object literal, Arrays, functions

When comparing 2 reference values, there addresses are compared and when comparing primitive types, there values are compared.

```javascript
let a = [];
let b = [];
console.log(a == b); // false
console.log(a === b); // false

// Reason: the reference to memory address in heap is different.

let a = [];
let b = a;
console.log(a == b); // true
console.log(a === b); // true
// Reason: the reference to the memory address in heap of a copied to b, so basically they are pointing to the same
// memory address in the heap.

let a = [20];
let b = [20];
console.log(a[0] == b[0]); // true
console.log(a[0] === b[0]); // true
// Reason: here we are checking the values present in each of the array.

let a = [20];
let b = ["20"];
console.log(a[0] == b[0]); // true
console.log(a[0] === b[0]); // false
// Reason: the == operator does the type conversion of the operands before comparison, whereas the === operator 
// compares the values as well as the data types of the operands.
```

## Difference between `undefined` and `not defined`

```javascript
let b;
console.log(b); // undefined

// In strict mode only, a will be not defined. but without strict mode, we see no error and a is assigned the value
// of 0
a = 0;
console.log(a); // a is not defined
```
