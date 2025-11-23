const username = "Sam";
const course = "Web Dev";
console.log(Hello `${username}, welcome to the course!`);

const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

const getFullName = (first, last) => `${first} ${last}`;