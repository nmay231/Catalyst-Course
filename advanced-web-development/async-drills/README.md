# Asynchronous Code Drills
The purpose of this lab is to practice Asynchronous JavaScript concepts discussed in the video lectures. You'll want to feel comfortable writing your own functions that return new Promise objects, write setTimeOut functions, and using .then()/.catch().

## Steps
### Setup
1. Make sure all the html has loaded before using JavaScript
2. Create a new project folder and connect it to a github repository. Copy this README.md file into it.
3. Create an index.html file and an app.js file and link the two together.

### Timing Out
1. Create a function that takes a string message as an argument, and logs that message to the console
2. Now call your function with a message
3. Use setTimeout to call your function again, but with a different message and after 2 seconds
    - Hint: If you both of your messages log at the same time, look at the syntax of a setTimeout. You'll need to call your function within an anonymous function the timeOut executes.
4. Create a new function called getWords that will attempt to do the following using several setTimeout calls:
    - Log a word instantly
    - After 3 seconds, log another word
    - After 2 seconds, log another word
    - After 1 second, log a final word

### Callbacks and Recursion
1. Create a function called done that logs Job's done! to the console
2. Create a different function (on the global scope) called countdown that accepts two arguments, num and callback
    - The goal of this function will be to log a "countdown" from the number passed in as an argument, delayed by 1 second each time, and when it gets to 1, it should execute the callback argument
    - Hint: You'll need one setTimeout for this to work, an if/else statement, and NO for loop for this to work
    - Super Hint: You'll need to call countdown within itself, a concept called recursion
    - Mega Hint: There's a YouTube vid showing the concept off
3. Call the countdown function and pass it two arguments: a number of seconds to countdown from and the done function and see if it works

### Promises Promises ;)
1. Create a new global variable called lunchTime with a value of true
2. Create a new promise called orderMeSomeFood that returns a new Promise
    - Hint: If you're unsure of the correct syntax, check out this CodePen
3. In the resolver function of the Promise, write logic to check if the lunchTime variable is true
4. If lunchTime is true, create an object with two properties and values (key/value pairs) of your choice:
    - lunch: "your favorite lunch"
    - drink: "your favorite beverage"
5. Resolve the Promise with your object
6. If lunchTime is false, create a variable and set it equal to a new Erorr that has your own message
    - Hint: Check out this page on how to use a new Error
7. Reject the Promise with your new Error
8. Call your orderMeSomeFood function, chain you .then and don't forget your .catch
9. If the promise within the function resolves, it should then log the object it resolved with
10. Swap lunchTime to false, and then the promise should reject with your custom created error and be logged from you .catch
11. Toggle lunchTime and check out the results of your newly created Promise function.