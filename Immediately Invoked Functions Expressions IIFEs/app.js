// using a function expression
const greetFunc = function(name) {
  console.log(`Hello ${name}`);
};
greetFunc("James");

// using an immediately Invoked Function Expression (IIFE)
const greeting = (function(name) {
  return `Hello ${name}`;
})("James");
console.log(greeting);

// Example of IIFE
const firstname = "James";
const lastname = "Hattersley";

(function(firstname, lastname) {
  const greeting = "Inside IIFE: Hello";
  console.log(`${greeting} ${firstname} ${lastname}`);
})(firstname, lastname);
