// ============================================================================
// JAVASCRIPT PRACTICE PROBLEMS - BEGINNER TO JUNIOR ENGINEER
// ============================================================================
// Instructions: Solve each problem in order. Run the file with Node.js to test.
// To test: node practice.js
// ============================================================================

console.log("=== JavaScript Practice Problems ===\n");

// ============================================================================
// PROBLEM 1: Variable Declaration and Basic Math
// ============================================================================
// TODO: Create two variables (a and b) with values 5 and 10.
// Calculate their sum and store it in a variable called 'result'.
// Log the result to the console.
// 
// HINT: Use const or let for variables. Use console.log() to print.
// Expected output: 15

// Your code here:
const a = 5
const b = 10

const sum = a+b

console.log(sum)




// ============================================================================
// PROBLEM 2: String Concatenation
// ============================================================================
// TODO: Create a variable with your first name and another with your last name.
// Combine them with a space in between and store in a 'fullName' variable.
// Log "Hello, [fullName]!" to the console.
//
// HINT: You can use the + operator or template literals (`${variable}`)
// Expected output: "Hello, John Doe!" (or your name)

// Your code here:
const fname = "Motley"
const lname = "Crue"

console.log(`Hello ${fname} ${lname}, hope everythgin is doing well`)




// ============================================================================
// PROBLEM 3: Write Your First Function
// ============================================================================
// TODO: Write a function called 'greet' that takes a name parameter
// and returns "Welcome, [name]!".
// Call the function with "Riley" and log the result.
//
// HINT: function greet(name) { return ... }
// Expected output: "Welcome, Riley!"

// Your code here:
// const daName = "Chet"

// const rString = `Hello, ${daName}`

function pString(rString){ 
    return "welcome " + rString
}

console.log(pString("Booby"))




// ============================================================================
// PROBLEM 4: Conditional Logic (if/else)
// ============================================================================
// TODO: Write a function called 'checkAge' that takes an age parameter.
// If age is 18 or older, return "Adult", otherwise return "Minor".
// Test with ages 16 and 21.
//
// HINT: Use if/else statement with comparison operators (>=, <)
// Expected output: "Minor" for 16, "Adult" for 21

// Your code here:
function checkAge(testingAge){
    if(testingAge > 18 ){
        return "Adult"
    }
    else{
        return "Minor"
    } 
}

console.log(checkAge(19))




// ============================================================================
// PROBLEM 5: Working with Arrays
// ============================================================================
// TODO: Create an array called 'fruits' with 5 different fruit names.
// Log the first fruit and the last fruit in the array.
//
// HINT: Array indices start at 0. Last index is array.length - 1
// Expected output: First and last fruit names

// Your code here:
const fruits = ["Apple", "Pear", "Orange", "Grape", "Strawberry"]

console.log(fruits[0])
console.log(fruits[fruits.length-1])



// ============================================================================
// PROBLEM 6: Array Iteration with For Loop
// ============================================================================
// TODO: Create an array of numbers [1, 2, 3, 4, 5].
// Use a for loop to print each number multiplied by 2.
//
// HINT: for (let i = 0; i < array.length; i++) { ... }
// Expected output: 2, 4, 6, 8, 10 (each on a new line)

// Your code here:
const digits = [1, 2, 3, 4, 5]

for (let num = 0; num < digits.length; num++) {
    const multiNum = digits[num] * 2;
    console.log(multiNum)
}




// ============================================================================
// PROBLEM 7: Array Methods - forEach
// ============================================================================
// TODO: Create an array of colors. Use the forEach method to log each color
// with its index: "Color 0: red"
//
// HINT: array.forEach((item, index) => { ... })
// Expected output: "Color 0: red", "Color 1: blue", etc.

// Your code here:
const colors = ["Red", "Green", "Blue", "Purple", "Black", "Steel Grey"]

colors.forEach((color, index)=> {console.log(`Color ${index}: ${color}`)})



// ============================================================================
// PROBLEM 8: Finding Array Elements
// ============================================================================
// TODO: Create an array of numbers [10, 25, 30, 45, 50].
// Use the find() method to get the first number greater than 30.
//
// HINT: array.find(num => num > 30)
// Expected output: 45

// Your code here:
const digitsOne = [1, 2, 3, 3, 3, 4, 5]

const theAnswer = digitsOne.find(num => num > 3)

console.log(theAnswer)


// ============================================================================
// PROBLEM 9: Filtering Arrays
// ============================================================================
// TODO: Create an array of numbers from 1 to 10.
// Use filter() to create a new array with only even numbers.
//
// HINT: A number is even if num % 2 === 0
// Expected output: [2, 4, 6, 8, 10]

// Your code here:
const oneTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNum = oneTen.filter(num => num % 2 == 0)

console.log(evenNum)

// ============================================================================
// PROBLEM 10: Mapping Arrays
// ============================================================================
// TODO: Create an array of prices [10.50, 20.75, 5.99, 15.25].
// Use map() to create a new array with a 10% discount applied to each price.
// Round each result to 2 decimal places.
//
// HINT: discountedPrice = price * 0.9; Use toFixed(2) or Math.round()
// Expected output: [9.45, 18.68, 5.39, 13.73]

// Your code here:
const prices = [10.50, 20.75, 5.99, 15.25]

const disPrice = prices.map(dp => dp *0.9)

console.log(disPrice)

// ============================================================================
// PROBLEM 11: Working with Objects
// ============================================================================
// TODO: Create an object called 'person' with properties: name, age, and city.
// Add a method called 'introduce' that returns "Hi, I'm [name] from [city]".
// Call the introduce method and log the result.
//
// HINT: Methods are functions inside objects. Use 'this' to access properties.
// Expected output: "Hi, I'm Riley from Boston" (or your values)

// Your code here:
const person = {
    fname: "Nibbel",
    lname: "Riddle",
    age: 24,
    city: "Melborune"
}

function welcome(obby){
    console.log(`Hi, I'm ${obby.fname} from ${obby.city}`   
    )
}

console.log(welcome(person))

// ============================================================================
// PROBLEM 12: Array of Objects
// ============================================================================
// TODO: Create an array of 3 book objects. Each book should have:
// title, author, and pages properties.
// Use filter() to find books with more than 300 pages.
//
// HINT: books.filter(book => book.pages > 300)
// Expected output: Array of books with > 300 pages

// Your code here:




// ============================================================================
// PROBLEM 13: Reduce Method - Summing Values
// ============================================================================
// TODO: Create an array of order totals [25.50, 30.00, 15.75, 40.25].
// Use reduce() to calculate the total of all orders.
//
// HINT: array.reduce((accumulator, current) => accumulator + current, 0)
// Expected output: 111.5

// Your code here:




// ============================================================================
// PROBLEM 14: String Methods and Manipulation
// ============================================================================
// TODO: Write a function 'formatTitle' that takes a string and:
// 1. Converts it to lowercase
// 2. Splits it into words
// 3. Capitalizes the first letter of each word
// 4. Joins them back together
// Test with "hello world from javascript"
//
// HINT: Use toLowerCase(), split(' '), map(), toUpperCase(), slice(), join()
// Expected output: "Hello World From Javascript"

// Your code here:




// ============================================================================
// PROBLEM 15: Error Handling with Try/Catch
// ============================================================================
// TODO: Write a function 'safeDivide' that takes two numbers.
// If the divisor is 0, throw an error "Cannot divide by zero".
// Use try/catch to handle the error gracefully.
// Test with safeDivide(10, 2) and safeDivide(10, 0).
//
// HINT: Use throw new Error(), try { }, catch(error) { }
// Expected output: 5 for first call, error message for second

// Your code here:




// ============================================================================
// PROBLEM 16: Destructuring and Spread Operator
// ============================================================================
// TODO: Create an object with properties: name, age, email, phone.
// Use destructuring to extract name and age into variables.
// Create a new object with the remaining properties using the spread operator.
//
// HINT: const {name, age, ...rest} = object
// Expected output: Separate variables for name, age, and a rest object

// Your code here:




// ============================================================================
// PROBLEM 17: Arrow Functions and Array Chaining
// ============================================================================
// TODO: Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
// Chain array methods to:
// 1. Filter even numbers
// 2. Square each number
// 3. Sum them all up
// Use arrow functions for each step.
//
// HINT: array.filter().map().reduce()
// Expected output: 220 (2²+4²+6²+8²+10² = 4+16+36+64+100)

// Your code here:




// ============================================================================
// PROBLEM 18: Asynchronous JavaScript - Promises
// ============================================================================
// TODO: Create a function 'fetchUserData' that returns a Promise.
// The promise should resolve after 1 second with a user object {id: 1, name: 'Riley'}.
// Use .then() to log the user data when it resolves.
//
// HINT: return new Promise((resolve, reject) => { setTimeout(() => resolve(data), 1000) })
// Expected output: User object after 1 second delay

// Your code here:




// ============================================================================
// PROBLEM 19: Async/Await with Error Handling
// ============================================================================
// TODO: Rewrite the previous problem using async/await instead of .then().
// Create a function 'getUserData' that uses await on fetchUserData.
// Add try/catch for error handling.
// Add a second promise that sometimes fails (random) to test error handling.
//
// HINT: async function name() { try { const data = await promise } catch(e) {} }
// Expected output: User data or error message

// Your code here:




// ============================================================================
// PROBLEM 20: Building a Mini Class System (Junior Level)
// ============================================================================
// TODO: Create a 'BankAccount' class with:
// - Properties: accountNumber, balance (private with #), accountHolder
// - Constructor that sets initial values
// - Methods: deposit(amount), withdraw(amount), getBalance(), getTransactionHistory()
// - Keep track of all transactions in an array
// - Prevent withdrawing more than the balance
// - Make sure amounts are valid (positive numbers)
//
// Create 2 accounts, perform various transactions, and display their history.
//
// HINT: class BankAccount { #balance; constructor() {}; deposit() {} }
// Expected output: Transaction history showing deposits/withdrawals with updated balances

// Your code here:




// ============================================================================
// TESTING SECTION
// ============================================================================
// Uncomment the section you're working on to test your solution

console.log("\n=== End of Practice Problems ===");
console.log("Great job working through these! Keep practicing! 🚀");
