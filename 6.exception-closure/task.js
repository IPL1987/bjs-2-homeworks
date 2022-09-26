'use strict'

// Task_1

function parseCount(parseNum) {
  let number = Number.parseInt(parseNum);

  if (isNaN(number)) {
    throw new Error('Невалидное значение');
  }
  return number;
}

function validateCount(parseNumber) {
  try {
    return parseCount(parseNumber);
  } catch (error) {
    return error;
  }
}

//  Task_2

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter(number) {
    return number = this.a + this.b + this.c;
  }
  getArea() {
    let p = this.getPerimeter() / 2;
    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return new Object({
      getPerimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      getArea() {
        return 'Ошибка! Треугольник не существует';
      }
    });
  }
}
