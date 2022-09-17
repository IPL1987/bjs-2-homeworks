'use strict'
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student('first', 'male', '18');
let student2 = new Student('secons', 'male', '20');
let student3 = new Student('third', 'female', '18');

console.log(student1)
console.log(student2)
console.log(student3)
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  this.marks === undefined ? this.marks = [mark] : this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  this.marks === undefined ? this.marks = [...marks] : this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  let avg = 0;
  for (let elem in this.marks) {
    avg += this.marks[elem]
  }
  return avg / this.marks.length
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}