"use strict";
const logItems = function (array) {
  for (let i = 1; i <= array.length; i++) {
    console.log(`${i} - ${array[i - 1]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
