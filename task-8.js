// Create a function that takes a string and returns the number (count) of vowels contained within it.

// Examples
// countVowels("Celebration") ➞ 5

// countVowels("Palm") ➞ 1

// countVowels("Prediction") ➞ 4


function countVowels(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}


console.log(countVowels("Celebration")); // 5

console.log(countVowels("Palm")); // 1