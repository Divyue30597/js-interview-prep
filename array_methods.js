const fruits = ["apple", "banana", "grapes"];

console.log(fruits);
console.log(fruits[0]);

fruits[4] = "Lemon";

console.log(fruits);
// length of an array
console.log(fruits.length);

// alert(fruits);
// position of elements in array using at
console.log(fruits.at(-1));
console.log(fruits.at(-2));
fruits[3] = "not a fruit";

console.log(fruits);
// to remove the element from the end of an array.
console.log(fruits.pop());

// to add an element at the end of the array
fruits.push("notApple");
console.log(fruits);

// shift to remove element from beginning of the array
console.log(fruits.shift());
console.log(fruits);

// unshift to add element to the beginning of the array
fruits.unshift("isAnApple");
console.log(fruits);

const fruits2 = [];

fruits2[9999] = 2;
console.log(fruits2.length);

// array is an object and behaves like an object
let fruits3 = ["banana"];
let arr = fruits3; // copy by reference (2 vars reference the same array)
console.log(arr === fruits3); // true
arr.push("Pear");
console.log(arr, fruits3); // [ 'banana', 'Pear' ] [ 'banana', 'Pear' ]

fruits3.age = 25;
console.log(fruits3.age); // creating a property with arbitrary name

// The ways to misuse an array:

// Add a non-numeric property like arr.test = 5.
// Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// Fill the array in the reverse order, like arr[1000], arr[999] and so on.

// shift and unshift are costly methods of array, because we are removing the element from 0th
// position and moving all the elements to the left like renumbering the index from 1 to 0 and 2 to
// 1 and so on, finally updating the length property.

// Basically, the more elements in the array, the more time to move them, more in-memory operations.

// loops in array
console.log("-------------normal-for-loop-----------");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("-------------for...of...---------------");
for (let fruit of fruits) {
  console.log(fruit);
}
console.log("-------------for...in...---------------");
for (let key in fruits) {
  console.log(fruits[key]);
}
console.log("---------length manipulating arr-------");
// length can manipulate existing arr
fruits.length = 3;
console.log(fruits[4]); // this gives us undefined

fruits.length = 6;
console.log(fruits[4], fruits[5]); // undefined undefined
console.log("------------new Array()----------------");

// creating arr using new keyword
let newArr = new Array("Apple", "Pear", "Banana");
console.log(newArr);

console.log("----------------new Array(4)-----------");

let newArr2 = new Array(4);
console.log(newArr2[0]);
console.log(newArr2.length);

console.log("--------------String(Arr)--------------");
console.log(String(arr));

console.log("------------miscellaneous--------------");
console.log("[] + 1:", [] + 1); // 1
console.log("[1] + 1:", [1] + 1); // 11
console.log("[1, 2] + 1:", [1, 2] + 1); // 1,21
console.log("[(1, 2)] + 1:", [(1, 2)] + 1); // 21

console.log("" + 1); // "1"
console.log("1" + 1); // "11"
console.log("1,2" + 1); // "1,21"

const fruitArr = [...fruits, ...fruits];
console.log(fruitArr);

const styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
styles[1] = "Classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);

let fineArr = ["a", "b"];

fineArr.push(function () {
  console.log(this);
});

fineArr[2](); // a,b,function(){...}

console.log("===========ADD or REMOVE items ===============");
console.log("------------splice/delete---------------------");
let constArr = ["I", "go", "home", "today"];
// delete constArr[1];
// console.log(constArr);

constArr.splice(-1, 1);
console.log(constArr); // original arr mutated

let someArr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
let newSomeArr = someArr.splice(-1, 0, 3, 4);

console.log(someArr); // 1,2,3,4,5
console.log(newSomeArr); // [1,2,3,4,5]

console.log("-----------------slice-----------------");
const test = ["t", "e", "s", "t"];
console.log(test.slice(1, 2)); // we get the array in the range from 1 to 2
console.log(test); // original arr not mutated
console.log(test.slice(-2));

console.log("-----------------concat-----------------");
let anotherArr = ["a", "n", "o"];
console.log(anotherArr);
console.log(anotherArr.concat(["t", "h"]));
console.log(anotherArr.concat(["t", "h"], ["e", "r"]));

// Normally it copies elements from arrays. Other objects, even if they look like array are added as whole
let arrayLike = {
  0: "something",
  length: 1,
};
console.log(anotherArr.concat(arrayLike)); // added as an object

// But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated
// as an array by concat
let arrayLike2 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

console.log(anotherArr.concat(arrayLike2)); // added as array's element

console.log("================ITERATE================");
fruits.forEach(function (item, index, array) {
  console.log(`${item} is present at ${index} in ${array}`);
});

fruits.forEach((item, ind, arr) => {
  console.log(`${item} is present at ${ind} in ${arr}`);
});

console.log("================SEARCHING IN ARRAY================");
const someNewArr = [2, 3, 5, 7, 11, 13, 17, 2, NaN];
console.log(someNewArr.indexOf(0)); // -1 no 0 found so -1
console.error(someNewArr.indexOf(11)); // 4
console.warn(someNewArr.includes(1)); // false
console.log(someNewArr.lastIndexOf(1)); // -1
console.log(someNewArr.lastIndexOf(2)); // 7

console.log(
  `indexOf does not handle NaN properly "someNewArr.indexOf(NaN):${someNewArr.indexOf(
    NaN
  )}", while includes handles it well returning true or false if it is present in the array ("someNewArr.includes(NaN): ${someNewArr.includes(
    NaN
  )}"), since includes was added later to the js and has more up to date comparison algorithm.`
);

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "Pete" },
];

console.log(`find takes item, index, arr as an input in callback function`);

let user = users.find((item) => item.id === 1);
console.log(user.name);
console.log(users.findIndex((user) => user.name === "John"));
console.log(users.findLastIndex((user) => user.name === "Pete"));

console.log("================FITLER================");
let someUsers = users.filter((item) => item.id < 3);
console.log(someUsers);
console.log(someUsers.length);

console.log("================TRANSFORM AN ARRAY================");
console.log("map");
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths); // 5,7,6

console.log("sort");
let primeArr = [2, 3, 11, 5, 13, 7];
primeArr.sort(); // this converts every element of the arr into string and then those string values are compared.
console.log(primeArr); // [ 11, 13, 2, 3, 5, 7 ]

// In order to sort numbers, we need to write our own function
function SortNumber(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}

primeArr.sort((a, b) => SortNumber(a, b));
console.log(primeArr);

// comparison function can be implemented in case of number for sorting
primeArr = [2, 3, 11, 5, 13, 7];
primeArr.sort((a, b) => a - b);
console.log(primeArr);

// Use localeCompare for strings
let countries = ["Österreich", "Andorra", "Vietnam"];
console.log("countries.sort()", countries.sort(), "WRONG");
console.log(
  "countries.sort((a, b) => (a > b ? 1 : -1))",
  countries.sort((a, b) => (a > b ? 1 : -1)),
  "WRONG"
); // Andorra, Vietnam, Österreich (wrong)
console.log(
  "countries.sort((a, b) => a.localeCompare(b))",
  countries.sort((a, b) => a.localeCompare(b)),
  "RIGHT"
); // Andorra,Österreich,Vietnam (correct!)

console.log("reverse");
primeArr.reverse();
console.log(primeArr);

console.log("split and join");
let names = "Bilbo, Gandalf, Nazgul";
let nameArr = names.split(", ");
let nameArr2 = names.split(", ", 2); // rarely used
for (let name of nameArr) {
  console.log(`A message to ${name}`);
}
console.log("--");
for (let name of nameArr2) {
  console.log(`A message to ${name}`);
}

let str = "test";
console.log(str.split("")); // [ 't', 'e', 's', 't' ]

let lotrArr = ["Bilbo", "Gandalf", "Nazgul"];
let newLotrStr = lotrArr.join(", ");
console.log(newLotrStr);

console.log("reduce / reduceRight");
console.log(
  "reduce is used to calculate a single value based off of input arr"
);

console.log(
  `Reduce syntax: 
    let value = arr.reduce((acc, item, ind, arr) => {
        // ....
    }, [init]);
`
);

const numArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

let result = numArr.reduce((sum, curr) => sum + curr, 0);
console.log(result);

const emptyArr = [];
let result2 = numArr.reduce((sum, curr) => sum + curr);
console.log(result2);
// console.log(emptyArr.reduce((sum, curr) => sum + curr)); // Error
console.log(emptyArr.reduce((sum, curr) => sum + curr, 0)); // 0

console.log(
  `Notes:
    - sort, reverse and splice modify the array itself
    - A cheat sheet of array methods:
    - To add/remove elements:
        - push(...items) – adds items to the end,
        - pop() – extracts an item from the end,
        - shift() – extracts an item from the beginning,
        - unshift(...items) – adds items to the beginning.
        - splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
        - slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
        - concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

    - To search among elements:
        - indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
        - includes(value) – returns true if the array has value, otherwise false.
        - find/filter(func) – filter elements through the function, return first/all values that make it return true.
        - findIndex is like find, but returns the index instead of a value.

    - To iterate over elements:
        - forEach(func) – calls func for every element, does not return anything.

    - To transform the array:
        - map(func) – creates a new array from results of calling func for every element.
        - sort(func) – sorts the array in-place, then returns it.
        - reverse() – reverses the array in-place, then returns it.
        - split/join – convert a string to array and back.
        - reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

    - Additionally:
        - Array.isArray(value) checks value for being an array, if so returns true, otherwise false
`
);
