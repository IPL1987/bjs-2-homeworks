'use strict'

// Задание 1
let arr = [-99, 75, 10]
function getArrayParams(arr) {
  let min = Math.min(...arr);
  let max = Math.min(...arr);
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
    if (elem >= max) {
      max = elem;
    }
    if (elem <= min) {
      min = elem;
    }
  }
  let avg = +((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
let arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]]
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    let totalSum = worker(arrOfArr[i]);
    if (totalSum > max) {
      max = totalSum;
    }
  }
  return max;
}

//Задание 3
function worker2(arr) {
  return getArrayParams(arr).max - getArrayParams(arr).min;
}
