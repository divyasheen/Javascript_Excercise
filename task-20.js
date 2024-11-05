// Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.

// Examples
// pluralize(["cow", "pig", "cow", "cow"]) ➞ ["cows", "pig"]

// pluralize(["table", "table", "table"]) ➞ ["tables"]

// pluralize(["chair", "pencil", "arm"]) ➞ ["chair", "pencil", "arm"]
// Notes
// This is an oversimplification of the English language so no edge cases will appear.
// Only focus on whether or not to add an s to the ends of words.
// All tests will be valid.

function pluralize(arr) {

    let count = {};
    let result = [];

    for (let word of arr) {
        if (count[word]) {
            count[word]++;
        } else {
            count[word] = 1;
        }
    }

    for (let word of arr) {
        if (count[word] > 1 && !result.includes(word + 's')) {
            result.push(word + 's');
        } else if (!result.includes(word)) {
            result.push(word);
        }
    }

    return result;
}

console.log(pluralize(["cow", "pig", "cow", "cow"])); // ["cows", "pig"]

console.log(pluralize(["table", "table", "table"])); // ["tables"]