// Using Object Literals
const person1 = {
    name: "John",
    age: 30,
    profession: "Developer"
  };
  
  // Using Constructor Function
  function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
  const person2 = new Person("Jane", 25, "Designer");
  
  // Using Object.create() Method
  const person3 = Object.create(null);
  person3.name = "Mike";
  person3.age = 35;
  person3.profession = "Engineer";

console.log(person1.name); // Output: John
console.log(person2["age"]); // Output: 25

person1.age = 32;
person2["profession"] = "Manager";

person1.location = "New York";
person2["salary"] = 60000;


// Using for...in loop
for (let key in person1) {
    console.log(`${key}: ${person1[key]}`);
  }
  
  // Using Object.keys() method
  Object.keys(person2).forEach(key => {
    console.log(`${key}: ${person2[key]}`);
  });

  console.log("name" in person1); // Output: true
//console.log(person3.hasOwnProperty("salary")); // Output: false

delete person1.location;
delete person2.salary;

person1.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
  person2.introduce = () => {
    console.log(`I'm ${person2.name}, a ${person2.age}-year-old ${person2.profession}.`);
  };

  const address = {
    city: "San Francisco",
    country: "USA"
  };
  
  const personWithAddress = { ...person1, ...address };
  console.log(personWithAddress);

  const jsonPerson = JSON.stringify(person1);
console.log(jsonPerson);

const parsedPerson = JSON.parse(jsonPerson);
console.log(parsedPerson);