// Task 1
// Given an array of products called cart and a product object hatProduct:
// const cart = [
// {
// type: "t-shirt",
// price: 19,
// color: "green",
// },
// {
// type: "jeans",
// price: 27,
// color: "blue",
// }
// ];

// const hatProduct = {
// type: "hat",
// price: 15,
// color: "pink",
// };

// Create a function called addProduct that takes the cart array and the hat product in input.
// The function should add the new product at the end of the array and return the updated cart.
// Make sure that the original cart is not modified. So, after calling the function, cart still has only 
// 2 products and the function returns a new array with 3 products.

const cart = [
    {
    type: "t-shirt",
    price: 19,
    color: "green",
    },
    {
    type: "jeans",
    price: 27,
    color: "blue",
    }
    ];
    
const hatProduct = {
    type: "hat",
    price: 15,
    color: "pink",
    };

function addProduct(cart, hatProduct) {
    let newCart = cart.concat(hatProduct);
    return newCart;
}

console.log(addProduct(cart, hatProduct)); // [ { type: 't-shirt', price: 19, color: 'green' }, { type: 'jeans', price: 27, color: 'blue' }, { type: 'hat', price: 15, color: 'pink' } ]
    
