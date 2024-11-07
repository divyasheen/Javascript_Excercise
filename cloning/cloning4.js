// Task 4
// Given the array of product objects:
// const products = [
// {
// type: "t-shirt",
// price: 19,
// color: "green",
// },
// {
// type: "jeans",
// price: 27,
// color: "blue",
// },
// {
// type: "shirt",
// price: 32,
// color: "white",
// },
// ...
// ];

// Create a function called applyDiscount that takes in input an array of product objects and a discount value.
// The function should apply the discount to all the products in the array.
// The function then returns the array with the discounted prices.
// : the original array should not be modified.
// Formula to calculate a discount:
// discountedPrice = price - (price * discount / 100);

// 20% discount of 100€:
// 100 - (100 * 20 / 100) -> 100 - (200 / 100) -> 100 - 20 -> 80


// 15% discount of 70€:
// 70 - (70 * 15 / 100) -> 70 - (1050 / 100) -> 70 - 10.5 -> 59.5

const products = [
    {
    type: "t-shirt",
    price: 19,
    color: "green",
    },
    {
    type: "jeans",
    price: 27,
    color: "blue",
    },
    {
    type: "shirt",
    price: 32,
    color: "white",
    }
];

function applyDiscount(products, discount) {
    const discountedProducts = [];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const discountedPrice = product.price - (product.price * discount / 100);
        const discountedProduct = {
            ...product,
            price: discountedPrice
        };
        discountedProducts.push(discountedProduct);
    }
    return discountedProducts;
}

console.log(applyDiscount(products, 20));
console.log(applyDiscount(products, 15));
console.log(applyDiscount(products, 10));