// function greet(userName, age) {
//   console.log("Hello " + userName + " and I am " + age + " years old");
// }

// greet("George");
// greet("Saba", 23);
// greet("Nick", 20);

// function sum(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// let number3 = sum(5, 12);
// console.log(number3);

// greet1();

// function greet1() {
//   console.log("Hello JS from greet1!");
// }

// const greet2 = function () {
//   console.log("Hello JS from greet2!");
// };

// greet2();

// const multiply = (a, b) => a * b;

// const num3 = multiply(2, 3);
// const num4 = multiply(10, 4);
// console.log(num3);
// console.log(num4);

// const isEven = function (num1) {
//   if (num1 % 2 === 0) {
//     console.log(num1 + " არის ლუწი");
//   } else {
//     console.log(num1 + " არის კენტი");
//   }
// };

// isEven(15);
// isEven(24);
// isEven(37);
// isEven(12);
// isEven(128);

// const fruits = ["Apple", "Banana", "Orange", "Kiwi"];

// fruits[0] = "Kiwi";
// fruits[1] = "Orange";

// // ჩამატება
// fruits.push("Strawberry");
// fruits.unshift("Kiwi");

// // წაშლა
// fruits.pop();
// fruits.shift();

// fruits.splice(1, 1, "");

// let index = fruits.indexOf("Strawberry");

// if (index !== -1) {
//   fruits.splice(index, 1);
// } else {
//   console.log("მასივში არ გვაქვს მარწყვი");
// }
// console.log(fruits, index);
// console.log(fruits);

// const fruitsLength = fruits.length;

// console.log(fruits[fruitsLength - 1]);

// console.log(fruits[0]);

const fruits = ["Apple", "Banana", "Kiwi", "Strawberry"];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Kiwi") {
    console.log("Favorite fruit!");
    break;
  }
  console.log(fruits[i]);
}

// for (let element of fruits) {
//   console.log("Fruit:" + element);
// }
