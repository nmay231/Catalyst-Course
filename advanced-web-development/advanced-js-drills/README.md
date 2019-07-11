# Advanced JavaScript Drills
## Objective
The objective of this lab assignment is to practice using advanced JavaScript that were explored in lecture.

## Hoisting and Functions
1. Set the word name equal to your name

1. Use the var keyword to define name as a variable

1. Log the value of name to the console

```
    name = 'Covalence';
    var name;
    console.log(name);
```
_What do you expect to be logged?_

4. Open your developer tools and view what is printed in the console. You'll see that the current name was printed.

    This is the effect of hoisting. When the browser interprets our JavaScript code it hoisted the declaration for the variable name and then assigned it to the current name so when name was logged, it is defined.

1. Change the var keyword to let

1. Save and refresh the browser

    - There is now a ReferenceError and name is no longer defined!
    - Only the declarations using the var keyword are hoisted

1. Change the let keyword back to var and create a function named setName

1. Inside the setName function write the following code and then call it BEFORE the function is declared
```
    setName();
    function setName() {
        var name = 'Covalence';
        console.log(name);
    }
```

_What do you expect to be logged in the console?_

9. Save and refresh the browser

1. The value logged is the value for name.
We called the function before it was declared and when it was interpreted, the function was hoisted above the function call so we were successfully able to log the value of name.

1. Create a new function declaration that will accept two parameters. The value of the parameters will be used to determined the average and the result will be returned.

1. Add console logs to monitor each stage. Your code should look similar to:

```
    console.log('some text');
    let avg = findAvg(2, 2);
    console.log('some text', avg);
    function findAvg(a, b) {
        console.log('some text');
        var answer = ( a + b) / 2;
        return answer;
    }
```

_In what order will the logs be printed in the console?_

## Now that we have exercised hoisting, let's practice scoping.

1. Create an array called fruits

1. The fruits array should have three fruits

1. Declare a global variable named favFruit using the let keyword.

1. Create a function declaration that will print the first fruit in the fruits array

1. Inside this function create a new variable and set it equal to your favorite fruit

1. Call the function

1. Save and refresh the browser. You should now see the first fruit printed in the console

1. Declare another function that will print your favorite fruit.

1. Call the function
    
    Your code should look similar to:

```
    let fruits = ['apple', 'tomato', 'banana'];
    let favFruit;
    function printFruits() {
        favFruit = fruits[2];
        console.log(fruits[0]);
    }

    function printFavFruit() {
        console.log(favFruit);
    }

    printFruits();
    printFavFruit();
```

10. Save and refresh the browser.
Why was the printFavFruit function able to log favFruit?

11. Remove the declaration of favFruit in the global scope

12. Declare favFruit using the let keyword in the printFruits function

```
    let favFruit = fruits[2];
```

13. Save and refresh the browser. favFruit is no longer in the global scope so printFavFruit() does not have access to the favFruit variable and is now undefined.
14. Nest the printFavFruit function inside of the printFruits function.

```
    function printFruits() {
        let favFruit = fruits[2];
        console.log(fruits[0]);

        function printFavFruit() {
            console.log(favFruit);
        }
    }

    printFruits();
    printFavFruit();
```

15. Call the printFavFruit function inside printFruits function

1. Save and refresh the browser. favFruit is now logged because the printFavFruit has access to variables in its parent function.

1. Create a new variable named leastFav using the let keyword

1. Assign it to your least favorite fruit

1. Log leasFav to the console after the printFavFruit function is declared

1. Save and refresh the browser. leastFav is undefined because the parent function does not have access to variables declared within the nested function.

1. Create a new function and name the function whatever you would like, make sure to create this using the function keyword, have this function console.log “Hello, “ and then your name. Call this function BEFORE the function body. Example:

```
    someFunc();
    function someFunc() {

    }
```

*You’ll notice the function runs no problem, because the function is hoisted*

21. Create a new function and name the function using a function expression (create it using let, not ver). Have this function have an alert appear with some text of your choosing.

22. Call the function before it is declared as an expression, what happens? Because of hoisting and the use the ES6 an error may occur. Adjust the code to allow the function to run.

## Submission
Commit and your changes and push to your GitHub profile.