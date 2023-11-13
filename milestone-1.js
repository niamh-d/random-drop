// UTILITY ERROR MESSAGE FUNCTION (*! DON'T COMMENT OUT !*)

function errorMessage(valType, payload) {
  const messageStart = "Error: Invalid input. Please provide";
  switch (valType) {
    case "PATTERN":
      return `${messageStart} the function with an object with values of type number only.`;
    case "NUMBER":
      return `${messageStart} a number.`;
    case "ARRAY_NUMBER":
      return `${messageStart} an array of numbers, or an array of arrays ultimately containing numbers.`;
    case "NUMBER_OR_STRING":
      return `${messageStart} a number, or a word or text in Latin alphabet without accented (non-English) characters.`;
    case "STRING":
      return `${messageStart} two arguments of type string.`;
    case "EXTENSION":
      return `${messageStart} one of the following extensions: ${payload.join(
        ", "
      )}.`;
  }
}

/* 
***********************************
COMMENTING IS EXCESSIVE JUST BECAUSE THIS IS A TEST
I DON'T WRITE COMMENTS LIKE THIS IRL :D
***************************************
*/

/*------------------
1)
Write a function that determines
if a number is a palindrome. A number is a
palindrome if it reads the same forwards and
backwards. 

Note:
- All negative numbers should return false.
- Single numbers should return true.

Test cases:
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false
------------------*/

// VERSION ONE – JUST FOR NUMBERS PER INSTRUCTIONS (EITHER NUMBER OR NUMERIC STRING)

function isPalindrome(num) {
  // guard clause to ensure input is a number or a numeric string
  if (!Number(num)) return errorMessage("NUMBER");
  // guard clause against negative numbers
  if (num < 0) return false;

  // create array of numbers
  const numArr = num.toString().split("");

  // in case of array of odd length, delete middle value
  if (numArr.length % 2) numArr.splice((numArr.length - 1) / 2, 1);

  // splitting array in two equal parts and reversing second half
  const firstHalf = numArr.slice(0, numArr.length / 2);
  const secondHalf = numArr.slice(numArr.length / 2).reverse();

  // loops through first array and makes sure each value is identical, otherwise returns false
  for (i in firstHalf) if (secondHalf[i] !== firstHalf[i]) return false;

  return true;
}

//TESTS
// console.log(isPalindrome(12321)); // true
// console.log(isPalindrome(-12321)); // false
// console.log(isPalindrome(1)); // true
// console.log(isPalindrome(84146)); // false
// console.log(isPalindrome(12)); // false

// ADDITIONAL TESTS
// console.log(isPalindrome({})); // type error
// console.log(isPalindrome("abc")); // type error
// console.log(isPalindrome("12321")); // true
// console.log(isPalindrome(22)); // true
// console.log(isPalindrome(2)); // true

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// VERSION TWO – ALSO WORKS ON ALPHABETIC STRINGS (ENGLISH ONLY CHARS)

// UTILITY FUNCTION TO CLEAN STRING INPUT (converts to lower case and removes punctuation)
const cleanseStr = function (str) {
  // array of lowercase alaphabetic characters a > z
  const alphaArr = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  // returns a string in lower case without spaces or punctuation
  return str
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .filter((char) => alphaArr.includes(char))
    .join("");
};

function isPalindromeV2(val) {
  // if input is a string, cleans string
  if (typeof val === "string") val = cleanseStr(val);
  // otherwise, if input is NOT a string
  else {
    // guard clause to ensure input is otherwise a number
    if (!Number(val)) return errorMessage("NUMBER_OR_STRING");
    // guard clause against negative numbers
    if (val < 0) return false;
  }

  // BELOW CODE IS SAME AS IN VERSION 1
  const arr = val.toString().split("");

  if (arr.length % 2) arr.splice((arr.length - 1) / 2, 1);

  const firstHalf = arr.slice(0, arr.length / 2);
  const secondHalf = arr.slice(arr.length / 2).reverse();

  for (i in firstHalf) if (secondHalf[i] !== firstHalf[i]) return false;

  return true;
}

//TESTS
// console.log(isPalindromeV2(12321)); // true
// console.log(isPalindromeV2(-12321)); // false
// console.log(isPalindromeV2(1)); // true
// console.log(isPalindromeV2(84146)); // false
// console.log(isPalindromeV2(12)); // false

// ADDITIONAL TESTS
// console.log(isPalindromeV2({})); // type error
// console.log(isPalindromeV2("abcba")); // true
// console.log(isPalindromeV2("12321")); // true
// console.log(isPalindromeV2(22)); // true
// console.log(isPalindromeV2(2)); // true
// console.log(isPalindromeV2("Aias sadas saia")); // true (Estonian palindrome – "It rained white bread in the garden.")
// console.log(isPalindromeV2("madam")); // true
// console.log(isPalindromeV2("Open the console to view your code!")); // false

/*------------------
2)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.

Examples:
const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3

const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(x)); // 50
------------------*/

function addGridItems(grid) {
  // recursive function, take input (could be number, or array)
  const sumUp = (input) => {
    for (item of input) {
      // guard clause for invalid data type
      // sets sum to error message and breaks out of the loop
      if (!Array.isArray(item) && typeof item !== "number") {
        sum = errorMessage("ARRAY_NUMBER");
        break;
      }
      // for each item (of valid type) checks whether the item has a length;
      // if it doesn't have a length, it must be a number,
      // so it increments sum by its value;
      // otherwise the function calls itself
      !item.length ? (sum += item) : sumUp(item);
    }
  };

  let sum = 0;

  sumUp(grid);

  return sum;
}

const y = [[[1], [2]]];
// console.log(addGridItems(y)); // 3

const x = [
  [[1, 0, -3], [2, 4], [3]],
  [
    [4, 4, 3],
    [5, -3, -1],
    [6, 10],
  ],
  [
    [7, -5, -5],
    [8, 0],
    [9, 1],
  ],
];
// console.log(addGridItems(x)); // 50

const z = [
  1,
  [
    [
      [6, 8, [[[[[1], 2]], 3]], 11, [[9, [[[5, 7]]], 8, 6, [[[[[[[8]]]]]]]]]],
      4,
      12,
    ],
  ],
];

// console.log(addGridItems(z)); // 91

const a = [["a", "b", "apple"]];
const b = [[4, 5, 6], { name: "Peter", favouriteColour: "blue" }, true];

// console.log(addGridItems(a)); // type error
// console.log(addGridItems("apple")); // type error
// console.log(addGridItems(b)); // type error

/*------------------
3)
Create a function that turns a string into a
file name: all letters are lowercase, spaces are
swapped for underscores, and it includes a
file extension. 

This function should take two parameters: the string, 
and the type of file it is (so you know what file
extension to add). You only need to cover
the extensions below:
- PDF: .pdf
- image: .png
- JSON: .json

Examples:
console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"
------------------*/

// This is a long one, sorry! :D

function createFileName(filename, extension) {
  // *~ STRING MANIPULATION LOGIC ~*

  // makes array of lowercase alaphabetic characters of variable length starting at "a", default size of 26 letters (a > z)
  const makeAlphaArr = function (size = 26) {
    return (alphaArr = [...Array(size)].map((_, i) =>
      String.fromCharCode(i + 97)
    ));
  };

  // makes a custom array of allowable characters together with alphabetic characters
  const makeAllowableCharsArr = (charsArray = [], alphaSize = 26) => [
    ...makeAlphaArr(alphaSize),
    ...charsArray,
  ];

  // self-explanatory string manipulation utility function
  const cleanExt = (ext) => ext.replaceAll(" ", "");
  // self-explanatory string manipulation utility function
  const trimAndLowerCase = (str) => str.trim().toLowerCase();

  // removes characters that are deemed invalid (i.e. not included in allowable array)
  const removeInvalidChars = function (str, isExt = false) {
    const validCharsArr = [" ", "-", "_"];

    str = trimAndLowerCase(str);

    // returns str with invalid characters removed; allowable array is different if filename or extension
    return str
      .split("")
      .filter((char) =>
        isExt
          ? makeAllowableCharsArr().includes(char)
          : makeAllowableCharsArr(validCharsArr).includes(char)
      )
      .join("");
  };

  // string manipulator function; calls utility functions
  const manipulateStr = function (str, isExt = false) {
    // checks if extension
    if (isExt) {
      str = cleanExt(removeInvalidChars(str, true));
      // changes "image" to "png" and adds period (.)
      str === "image" ? (str = ".png") : (str = `.${str}`);
    } else str = removeInvalidChars(str);
    // returns with any spaces replaced with underscores
    return str.replaceAll(" ", "_");
  };

  // *~ INPUT VALIDATION LOGIC ~*

  let err = "";

  // validates inputs and returns error message if necessary
  // second parameter is false by default
  const validate = function (str, isExt = false) {
    // array of valid extensions, which are payloaded to error messager function (at top of file)
    const validExtensions = ["image", "pdf", "json"];
    // checks inputs are of type string
    if (typeof str !== "string") err = errorMessage("STRING");
    // if strings, in case of extension str, checks validity against valid extension array
    else if (
      isExt &&
      !validExtensions.includes(cleanExt(removeInvalidChars(str, true)))
    )
      err = errorMessage("EXTENSION", validExtensions);
  };

  // *~ CALL FUNCTIONS WITH PROVIDED INPUT ~*

  // validate inputs
  validate(filename), validate(extension, true);

  // if there is an error message, return message
  if (err) return err;

  //otherwise, if no message exists, return manipulated strings
  return manipulateStr(filename) + manipulateStr(extension, true);
}

// TESTS:
// console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
// console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
// console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"

// ADDITIONAL TESTS:
// console.log(createFileName("Sofia Engineering Resume", ".PDF")); // "sofia_engineering_resume.pdf"
// console.log(createFileName("Sofia_Engineering_Resume", "P_D_F")); // "sofia_engineering_resume.pdf"
// console.log(createFileName("Sofia Engineering Resume", "P D f")); // "sofia_engineering_resume.pdf"
// console.log(createFileName("Sofia Profile Photo", ". im.a. ge")); // "sofia_profile_photo.png"
// console.log(createFileName("Data from Pokemon-API", "J(S)ON")); // "data_from_pokemon-api.json"
// console.log(createFileName("Data from Pokemon-API", "*J-S-ON~")); // "data_from_pokemon-api.json"
// console.log(createFileName("NewUser", "JSX")); // invalid extension
// console.log(createFileName("My profile picture", "jpeg")); // invalid extension
// console.log(createFileName("apple", 12)); // invalid input type
// console.log(createFileName(["apple", 12])); // invalid input type

/*------------------
4) Print the following pattern
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99

Hints:
- Use a loop within a loop.
------------------*/

// I made this more complicated than it needed to be because I wanted the pattern to be customisable:
// Customisable are:
// starting number, the offset between numbers, number of lines/rows, final offset
// by default the function is set to answer the set task (other than for the unique offset) but with different inputs can make whatever pattern you want

const makePattern = function (criteria) {
  // ***** SETTING UP CRITERIA *******

  const params = {
    startNum: criteria.start || 99,
    offSet: criteria.offset || 3,
    numLines: criteria.numRows || 5,
    topLineFinalOffset: criteria.uniqueOffset || criteria.offset || 3,
  };

  // creating an array from the values of the parameters (criteria) object
  const criteriaArr = Object.values(params);

  // ***** VALIDATION LOGIC *******

  let err = "";

  // function to validate input for type numer or numeric string
  const validate = function (arr) {
    arr.forEach((num, i) => {
      // if any of the inputs are numeric strings, here we replace with number
      arr[i] = Number(num);
      // if NaN then set an error message using error message utility function
      if (!arr[i]) err = errorMessage("PATTERN");
    });
  };

  // ***** BUILDING ARRAY LOGIC *******

  // creates an array of numbers, which will later be logged to console
  const numsArr = function (inputArr) {
    const [startNum, offSet, numLines, topLineFinalOffset] = inputArr;
    arr = new Array();
    let num = startNum;
    for (let i = numLines; i > 0; i--) {
      arr.push(num);
      // conditional offsetting (only for last element of top line)
      i === 2 ? (num -= topLineFinalOffset) : (num -= offSet);
    }
    return arr;
  };

  // ***** LOGGING ARRAY LOGIC *******

  // receives an array of numbers to print, as many lines as their are number of values
  const printPattern = function (arr) {
    // need to create a copy to pop from as we need to keep length of original arr intacted for looping
    const printedArr = arr.slice();
    for (let i = 0; i <= arr.length; i++) {
      console.log(printedArr.join(" "));
      printedArr.pop();
    }
  };

  // ***** CALLING LOGIC WITH INPUT *******

  // validate input for type numer or numeric string
  validate(criteriaArr);

  // if there is an error message for invalid input return this
  if (err) return console.log(err);

  // print the pattern
  printPattern(numsArr(criteriaArr));
};

// TEST CASE
makePattern({ uniqueOffset: 2 });
/* 
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99
*/

// OTHER TESTS

makePattern({ start: "99", offset: "3", numRows: "5", uniqueOffset: "2" }); // numeric strings, same as above
makePattern({ start: "apple" }); // type error
makePattern({ start: "99", offset: "3", numRows: "banana" }); // type error

// Another pattern with different critera
makePattern({ start: 100, offset: 5, numRows: 8, uniqueOffset: 3 });
/* 
100 95 90 85 80 75 70 67
100 95 90 85 80 75 70
100 95 90 85 80 75
100 95 90 85 80
100 95 90 85
100 95 90
100 95
100
*/

// this time without any unique offset for final num on top line
makePattern({ start: 100, offset: 5, numRows: 8 });
/* 
100 95 90 85 80 75 70 65
100 95 90 85 80 75 70
100 95 90 85 80 75
100 95 90 85 80
100 95 90 85
100 95 90
100 95
100
*/

// module.exports = { createFileName, addGridItems,isPalindrome };
