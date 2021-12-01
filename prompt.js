let prompt = require('prompt-sync')() // declaring a variable called promt and assigning it a value, which is a function coming from of "promt-sync" (small package library)
let num = prompt('Welcome to prompt:')

console.log(typeof num) // always going to be a string " "

num = Number(num) // parseInt // converts strings into a number 


console.log(typeof num)

//num === "7"

// num === 7

//Just to reiterate, prompt allows you take user input from a user through the terminal so the user can determine the values in your program (or loop in this case). If you have a loop that runs from 0 to X, the user can determine what X is and therefore change how many times your loop runs. This makes it more dynamic because how your code executes can change based on what the user inputs