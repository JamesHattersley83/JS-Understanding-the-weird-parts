// Function Constructor
function Person(firstname, lastname, age) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}

Person.prototype.getFullName = function() {
  return `${this.firstname} ${this.lastname}: ${this.age}`;
};

Person.prototype.getFormalFullName = function() {
  return `${this.lastname}, ${this.firstname}`;
};

// creates new object and invokes the function
const james = new Person("James", "Hattersley", 36);
console.log(james);

const john = new Person("John", "Doe", 54);
console.log(john);
