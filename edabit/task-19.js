// Create a function that takes three collections of arguments and returns the sum of the product of numbers. 
// Add the result of the first digit in each collection multiplied together to the result of the second digit in 
// each collection multiplied together to get the final solution.

// Examples
// product(1,2)(1,1)(2,3) ➞ 8
// // 1 * 1 * 2 + 2 * 1 * 3

// product(10,2)(5,0)(2,3) ➞ 100
// // 10 * 5 * 2 + 2 * 0 * 3

// product(1,2)(2,3)(3,4) ➞ 30
// // 1 * 2 * 3 + 2 * 3 * 4

// product(1,2)(0,3)(3,0) ➞ 0
// // 1 * 0 * 3 + 2 * 3 * 0

function product(a, b) {
    return function(c, d) {
        return function(e, f) {
            return a * c * e + b * d * f;
        }
    }
}

console.log(product(1, 2)(1, 1)(2, 3)); // 8

console.log(product(10, 2)(5, 0)(2, 3)); // 100