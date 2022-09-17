// function array(...mass) {
//   for (let elem of mass) {
//     console.log(elem)
//   }
// }
// array(456, 3453)
// array('456', '4563')

// let array=[1,2,3,4,5,667]
// array.forEach((element, index, array) => console.log(element, index, array));

function print(first, seccond, ...args) {
  console.log(first, seccond)
  for (let i in args) {
    console.log( i)
  }
}
print(1, 1, 1, 55, 3, 7, 6, 9, 3, 7)

// function result (...params) {
//   let sum = 0;
//   for (let i = 0; i < params.length; i++) {
//     sum += params[i];
//   }
//   console.log (sum)
// }
// result(1,4,6,23,8,6)

// function hell() {
//   return hello();
// }
// function hello() {
//   console.log("привет")
// }
// hell ();