import {
  sum,
  subtract,
  division,
  product,
} from "../modules-in-js/functions.js";

const x = 10;
const y = 5;

document.getElementById("x").textContent = x;
document.getElementById("y").textContent = y;

document.getElementById("addition").textContent = sum(x, y);
document.getElementById("subtraction").textContent = subtract(x, y);
document.getElementById("multiplication").textContent = product(x, y);
document.getElementById("division").textContent = division(x, y);
