/*
1)
Using console.log will print anything
between the parantheses into your console.

Change the phrase being printed below, 
save, and then view your changes 
in the browser.

After confirming that it works, comment it out.
*/

console.log("Hello, Niamh 😍 You're looking radiant today!");

/*
2)
Using both the (+) and the (*) operators,
multiply and add any combination of numbers
together so that you get the number 10.
*/

// console.log(`9 + 1 = ${9 + 1}`);
// console.log(`5 + 5 = ${5 + 5}`);
// console.log(`4 + 6 = ${4 + 6}`);
// console.log(`5 * 2 = ${5 * 2}`);
// console.log(`10 * 1 = ${10 * 1}`);

/*
3)
console.log is often used to debug
issues. You can actually add multiple
arguments inside of console.log (which are
separated by a comma). Add everything
below into console.log!

3 + 4, " should equal 7"
*/

// console.log(3 + 4, " should equal 7");

/*
4)
Add two strings together so that you
are printing your full name!
*/

// console.log("Niamh " + "Doyle");

/*
5)
Using modulo to get the remainder of
a number divided by 2 will tell you whether a 
number is even or odd. Try it below!
*/

// const num = 10;
// const num = 13;
// const isEven = (num) => num % 2 === 0;

// console.log(isEven(num));

/*
6)
Change Mia's location by reassigning the location
variable to a new string! To do this, you will have 
to add a new line of code (do not delete any currently
written code). Note: you will also have to un-comment
the console.log to print the location.
*/

// const studentName = "Mia";
// let currentLocation = "school";
// currentLocation = "CodeOp";

// console.log(studentName, " is currently at", currentLocation);

/*
7)
Create variables so that the message is printed
to the screen!
*/

// let personName = "Julie";
// let eateryName = "The Good Plates";
// let foodItem = "sushi";

// console.log(personName, "went to the", eateryName, "to eat", foodItem, ".");

/*
8)
Now, reassign all the previous variables so that
a new message is printed to the screen!
*/

// personName = "Susan";
// eateryName = "The Little Nibble";
// foodItem = "muffins";

// console.log(personName, "went to the", eateryName, "to eat", foodItem, ".");

/*
9)
There are three ways to increase the
number stored in the variable "count".
However, there is a problem with how 
the variable has been declared. Debug it!
*/

// let count = 0;
// count = count + 1;
// count += 1;
// count++;

// Need to assign using "let" not "const"

// console.log(count, " should be 3");

/*
10)
Swap time! In the code below, we want to swap
the values being stored in both "a" and "b".

This code written below does not work. To accomplish
this task, you will need to create an additional
variable (you can name it "temp") to store either
"a" or "b" while you are swapping. Draw it out if
you are unsure!
*/

// let a = 1;
// let b = 2;

// console.log("BEFORE > a is: ", a, " - and b is: ", b);
// let temp = a;
// a = b;
// b = temp;

// console.log("AFTER > a is: ", a, " - and b is: ", b);

/*
11)
Make the statement below evaluate
to true!
*/

// console.log(3 > 2);
// console.log(3 == "3");
// console.log(3 === 3);
// console.log(!"");
// console.log(!0);
// console.log(!false);
// console.log(3 < 4);

/*
12)
Make the statement below evaluate
to false.
*/

// let x = 10;
// let y = x++;

// console.log(x <= y);

/*
13)
Fix the comparison operator so that
the statement evaluates to false.
*/

// console.log(3 === "3");

/*
14)
Change something in the expression below
so that it does not evaluate to false.
*/

// const sunny = true;
// const warm = true;

// console.log(!sunny != warm);
// console.log(sunny != warm ? false : true);

/*
15)
Practice with everything you've learned!

Come up with 10 expressions that use what
you've learned so far.
  - Use the data types: string, number, boolean, undefined, null.
  - Use the following operators: (+) (-) (*) (/) (%).
  - Use the keywords: var, const, let.
  - Use the operators: (=) (+=) (-=) (*=)(++) (--).
  - Use the operators: (>) (<) (>=) (<=) (== vs ===) (!=).
*/

// SIMPLE FUNCTION TO CHECK IF AN INPUT IS OF TYPE STRING:

const isString = (input) => typeof input === "string";
console.log(isString("happy"));
console.log(isString(""));
console.log(isString("3"));
console.log(isString(3));

// SIMPLE FUNCTION TO CHECK IF A NUMBER INPUT IS EVEN:

const isEven = (num) => num % 2 === 0;
console.log(isEven(3));
console.log(isEven(4));
console.log(isEven(10));
console.log(isEven(10 - 5));

// Messing with booleans

const person1 = {
  firstName: "Julie",
  age: 10,
};

const person2 = {
  firstName: "Mike",
  age: 50,
};

const isOldEnoughToDrive = (person) => {
  const isOldEnoughMessage = `Horray, ${person.firstName}! 🥳 You ARE old enough to drive.`;
  const isNotOldEnoughMessage = `Sorry, ${person.firstName}! 😢 You are NOT old enough to drive.`;

  return person.age >= 16 ? isOldEnoughMessage : isNotOldEnoughMessage;
};

console.log(isOldEnoughToDrive(person1));
console.log(isOldEnoughToDrive(person2));

// COMPARING TYPES

// Utility function – composes a message if both inputs are of type "number"
const composeNumCompareMessage = function (num1, num2) {
  if (num1 > num2) return `${num1} is greater than ${num2}`;
  if (num1 < num2) return `${num1} is less than ${num2}`;
  if ((num1 = num2)) return `${num1} equals ${num2}`;
};

// Utility function – composes a message
const composeTypeMessage = function (input1, input2, isSameType) {
  let messageStart = `Input 1 (${input1} [=${typeof input1}]) and input 2 (${input2} [=${typeof input2}]) are of`;
  const messageEnd = isSameType ? ` the same type.` : ` different types.`;
  return messageStart + messageEnd;
};

// Funtion to compare two inputs – returns a message about which type(s) the inputs are of, whether same or different, and in the case of inputs of type "number", compares value
const compareTwoInputs = function (input1, input2) {
  let numMessage;
  let outputMessage;
  const isSameType = typeof input1 === typeof input2;
  const typeMessage = composeTypeMessage(input1, input2, isSameType);

  if (isSameType && typeof input1 === "number") {
    numMessage = composeNumCompareMessage(input1, input2);
    outputMessage = `${typeMessage} ${numMessage}`;
  } else return typeMessage;

  return outputMessage;
};

// Sample data
const num1 = 3;
const num2 = 10;
const movie = "Barbie";
const numFive = "5";
const rating = 5;
const isExcitedAboutCoding = true;
const isWeekend = false;
let food;
const drink = null;

console.log(compareTwoInputs(num1, num2));
console.log(compareTwoInputs(num2, rating));
console.log(compareTwoInputs(movie, numFive));
console.log(compareTwoInputs(numFive, rating));
console.log(compareTwoInputs(isExcitedAboutCoding, isWeekend));
console.log(compareTwoInputs(food, drink));

// Just some fun with simple objects and the ternary operator again 😍

const school1 = {
  schoolName: "CodeOp",
  isAwesome: true,
  valuesArr: [
    "Excellence",
    "Humanity",
    "Diversity",
    "Community",
    "Transformation",
    "Great Music",
  ],
};

const school2 = {
  schoolName: "The Bad Coding School",
  isAwesome: false,
  valuesArr: null,
};

// utility function to compose a message
const outputMessage = (school) =>
  `${school.schoolName} is ${
    school.isAwesome ? "awesome!" : "NOT awesome!"
  } Its values are: ${
    school.valuesArr
      ? school.valuesArr.join(", ")
      : "A work in progress (we hope!!)."
  }`;

// function just to add additional layer of abstraction in order to make the below code more uniform and readable
const schoolIsAwesome = (school) => school.isAwesome;

// Aside from using the ternary operator, I also like using short-circuiting

//these next two lines return identical just using different logical operators
schoolIsAwesome(school1) && console.log(outputMessage(school1));
!schoolIsAwesome(school1) || console.log(outputMessage(school1));

//these next two lines return identical just using different logical operators
!schoolIsAwesome(school2) && console.log(outputMessage(school2));
schoolIsAwesome(school2) || console.log(outputMessage(school2));
