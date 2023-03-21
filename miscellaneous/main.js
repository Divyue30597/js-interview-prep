"use strict";

// let a = [];
// let b = [];
// console.log(a == b); // false
// console.log(a === b); // false
// Reason: the reference to memory address in heap is different.

// let a = [];
// let b = a;
// console.log(a == b); // true
// console.log(a === b); // true
// Reason: the reference to the memory address in heap of a copied to b, so basically they are pointing to the same memory address in the heap.

// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]); // true
// console.log(a[0] === b[0]); // true
// Reason: here we are checking the values present in each of the array.

let a = [20];
let b = ["20"];
console.log(a[0] == b[0]); // true
console.log(a[0] === b[0]); // false
// Reason: the == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands.
