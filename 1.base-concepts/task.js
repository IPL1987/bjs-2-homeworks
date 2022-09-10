'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) {
  } else if (discriminant == 0) {
    arr = [-b / (2 * a)]
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(percent)) {
   return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } 

  function monthDiff(d1, d2) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  let totalAmount
  let creditBody = amount - contribution;
  let mortgageRate = (percent / 100) * (1 / 12)
  let data2 = new Date()
  let data1 = new Date(date)
  let loanTerm = monthDiff(data2, data1);
  totalAmount = (creditBody * (mortgageRate + (mortgageRate / (((1 + mortgageRate) ** loanTerm) - 1)))) * loanTerm
  totalAmount = (Math.round(totalAmount * 100) / 100)
  console.log(totalAmount)

  return totalAmount;
}