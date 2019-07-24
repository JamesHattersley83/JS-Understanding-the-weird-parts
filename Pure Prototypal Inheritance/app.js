const person = {
  firstname: "default",
  lastname: "default",
  greet: function() {
    return "Hi" + " " + this.firstname;
  }
};

const James = Object.create(person);
console.log(James);
James.firstname = "James";
James.lastname = "Hattersley";
