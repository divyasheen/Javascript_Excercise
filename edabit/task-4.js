// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// To illustrate:

// largestSwap(27) ➞ false

// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.


function largestSwap(num) {
    let numString = num.toString();
    let swappedNum = numString[1] + numString[0];
    return num >= swappedNum;
}

console.log(largestSwap(27)); // false
console.log(largestSwap(43)); // true
console.log(largestSwap(14)); // false
console.log(largestSwap(53)); // true

