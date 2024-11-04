
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples
// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]


function numberSplit(n) {
    let half = Math.floor(n / 2);
    return n % 2 === 0 ? [half, half] : [half, half + 1];
}

console.log(numberSplit(4)); // [2, 2]

console.log(numberSplit(10)); // [5, 5]

console.log(numberSplit(11)); // [5, 6]
