class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

let user = new User("Tomchi");
user.sayHi();

console.log(typeof user); // object
console.log(`
    In JS a class is kind of a function.
`);
console.log(typeof User); // function
