// ---------------------------
// 1. Template Literals + Expressions
// ---------------------------

// a)
console.log(`5 + 7 = ${5 + 7}`);

// b)
const multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// ---------------------------
// 2. Arrow Functions & this
// ---------------------------

// a)
const square = (n) => n * n;
console.log(square(5));

// b) Why undefined?
// Arrow function does NOT bind its own 'this', so 'this' refers to global object
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); // undefined

// c) Fix using normal function
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();


// ---------------------------
// 3. Rest, Spread & Copying Objects
// ---------------------------

// a) Copy object
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

// b) Merge objects
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// c) Max using rest
function maxValue(...nums) {
  return Math.max(...nums);
}
console.log(maxValue(1, 5, 9, 3));


// ---------------------------
// 4. Destructuring & Optional Chaining
// ---------------------------

// a)
const arr = [10, 20, 30];
const [A, B] = arr;
console.log(A, B);

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c)
const info = {};
console.log(info?.address?.city); // undefined safely


// ---------------------------
// 5. Scoping (let/var/const)
// ---------------------------

// a)
for (var i = 0; i < 3; i++) {}
console.log(i); // prints 3

// b)
for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError

// c)
const value = 10; // can't be reassigned to maintain constant value


// ---------------------------
// 6. Ternary Operator
// ---------------------------

// a)
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

// b)
let age = 17;
console.log(age >= 18 ? "Adult" : "Minor");

// c)
let num = -5;
console.log(
  num > 0 ? "Positive" :
  num === 0 ? "Zero" :
  "Negative"
);


// ---------------------------
// 7. Spread, Rest & Arrays
// ---------------------------

// a)
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// b)
const arr1 = ["x", "y"];
const arr2 = ["z"];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

// c)
function printNames(...names) {
  return names;
}
console.log(printNames("A", "B", "C"));


// ---------------------------
// 8. Object Destructuring & Shorthand
// ---------------------------

// a)
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

// b)
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);

// c)
const person = {
  name: "Khushi",
  age: 20,
  greet() {
    console.log("Hello!");
  }
};
person.greet();


// ---------------------------
// 9. Template Literals (More Practice)
// ---------------------------

// a)
console.log(`Today's Date: ${new Date().toDateString()}`);

// b)
const NAME = "Khushi";
const SCORE = 95;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// ---------------------------
// 10. Arrow Function Shorthand
// ---------------------------

// a)
const add = (a, b) => a + b;

// b)
const isAdult = (age) => age >= 18;

// c)
const double = num => num * 2;


// ---------------------------
// 11. Spread Operator (Arrays & Objects)
// ---------------------------

// a)
const arrClone = [...nums];
console.log(arrClone);

// b)
const arrAdd = [100, ...nums];
console.log(arrAdd);

// c)
const obj1 = { name: "Alex", city: "Delhi" };
const ob2 = { city: "Mumbai", country: "India" };
const finalObj = { ...obj1, ...obj2 }; // city overridden
console.log(finalObj);


// ---------------------------
// 12. Optional Chaining (More Practice)
// ---------------------------

const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(user3?.address?.city);