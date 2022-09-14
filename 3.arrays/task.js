'use strict'

function compareArrays(arr1, arr2) {
  let result = arr1.every((elem, index) => elem === arr2[index]) && arr1.length === arr2.length;

  return result;
}

function advancedFilter(arr) {
  let resultArr = arr.filter(elem => elem > 0 && elem % 3 === 0).map(elem => elem * 10);

  return resultArr;
}
