// Closure example
function greet(saysomething) {
  return function(name) {
    console.log(`${saysomething} ${name}`);
  };
}

const sayHi = greet("Hi");
sayHi("James");
