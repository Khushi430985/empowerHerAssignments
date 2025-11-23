// a) Output of code
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x); // ReferenceError: x is not defined


// b) Optional chaining
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);


// c) Example preventing runtime error
const data = {};
console.log(data?.info?.value);