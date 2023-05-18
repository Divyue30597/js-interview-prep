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
