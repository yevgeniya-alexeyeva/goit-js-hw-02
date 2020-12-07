"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Введите число цифрами");
  } else {
    numbers.push(input);
  }
} while (input !== null);
for (let number of numbers) {
  total += Number(number);
}
console.log(`Общая сумма чисел равна ${total}`);
