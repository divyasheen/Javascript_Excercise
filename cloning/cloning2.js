// Task 2
// Given an array tasks containing a series of objects:
// const tasks = [
// {
// task: "clean apartment",
// priority: 5
// },
// {
// task: "learn objects",
// priority: 2
// },
// {
// task: "practice JavaScript",
// priority: 1
// }
// ]

// Create a function called finishTask that:
// takes in input an array of tasks
// removes the last item from the array
// returns the updated array
// The original task array must not be modified.

const tasks = [
    {
    task: "clean apartment",
    priority: 5
    },
    {
    task: "learn objects",
    priority: 2
    },
    {
    task: "practice JavaScript",
    priority: 1
    }
]

function finishTask(tasks) {
    let newTasks = tasks.slice(0, tasks.length - 1);
    return newTasks;
}

console.log(finishTask(tasks)); // [ { task: 'clean apartment', priority: 5 }, { task: 'learn objects', priority: 2 } ]