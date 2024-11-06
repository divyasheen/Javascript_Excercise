// Task 1
// Given the object below, change the value of the read property from false to true. Then, output the whole object to the console.
// const book = {
//     title: "A Smarter Way to Learn JavaScript",
//     author: "Mark Myers",
//     price: 19.95,
//     read: false
// };
// Expected output:
// {
//     title: "A Smarter Way to Learn JavaScript",
//     author: "Mark Myers",
//     price: 19.95,
//     read: true
// }

const book = {
    title: "A Smarter Way to Learn JavaScript",
    author: "Mark Myers",
    price: 19.95,
    read: false
};

book.read = true;

console.log(book);

// Task 2
// Given the object below, increase the age property by 1. Then, output the whole object to the console.
// const person = {
//     firstName: "Martha",
//     lastName: "Martin",
//     age: 27
// };
// Expected output:
// {
//     firstName: "Martha",
//     lastName: "Martin",
//     age: 28
// };


const person = {
    firstName: "Martha",
    lastName: "Martin",
    age: 27
};

person.age++;

console.log(person);

// Task 3
// Given the object below, modify the value of the property discountedPrice so that it's half of the price property.
// Then, output a message to the console as shown below.
// const product = {
//     type: "hat",
//     color: "green",
//     brand: "Dolphin",
//     price: 22,
//     discountedPrice: 22,
// };
// IMPORTANT: when modifying discountedPrice, make sure to use the property price to calculate the new value, rather than typing 22 directly.
// Expected output:
// SALE: the green Dolphin hat costs now only 11€ instead of 22€!


const product = {
    type: "hat",
    color: "green",
    brand: "Dolphin",
    price: 22,
    discountedPrice: 22,
};

product.discountedPrice = product.price / 2;

console.log(`SALE: the ${product.color} ${product.brand} ${product.type} costs now only ${product.discountedPrice}€ instead of ${product.price}€!`);

// Task 4
// Given the object below, add a new property to it called fullName.
// The property should combine the values from firstName and lastName, separated by a space.
// const person = {
//     firstName: "Jim",
//     lastName: "Jameson",
//     age: 37
// };
// Expected output:
// {
//     firstName: "Jim",
//     lastName: "Jameson",
//     age: 37,
//     fullName: "Jim Jameson"
// };


const person2 = {
    firstName: "Jim",
    lastName: "Jameson",
    age: 37
};

person2.fullName = `${person2.firstName} ${person2.lastName}`;

console.log(person2);



// Task 5
// Given the object below, modify the value of the property city so that the first letter is correctly capitalised.
// const person = {
//     firstName: "Sylvia",
//     lastName: "Sun",
//     city: "london"
// };
// IMPORTANT: try to use and modify the current value of city rather than manually typing London.
// Expected output:
// {
//     firstName: "Sylvia",
//     lastName: "Sun",
//     city: "London"
// };

const person3 = {
    firstName: "Sylvia",
    lastName: "Sun",
    city: "london"
};

person3.city = person3.city.charAt(0).toUpperCase() + person3.city.slice(1);

console.log(person3);