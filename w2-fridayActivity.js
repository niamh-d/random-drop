const users = [
  {
    name: "Vanya",
    age: 16,
    job: "student",
  },
  {
    name: "Carlos",
    age: 30,
    job: "developer",
  },
  {
    name: "Alex",
    age: 17,
    job: "student",
  },
  {
    name: "Laila",
    age: 33,
    job: "developer",
  },
  {
    name: "Julian",
    age: null,
    job: "manager",
  },
];

/*EXERCICE 1
Print the following sentence using variables
"Vanya is younger than Alex and Laila is X years older than Carlos." 
Be sure to write an expression to calculate the value of X. */
// Your code here

console.log(
  `${users[0].name} is younger than ${users[2].name} and ${users[3].name} is ${
    users[3].age - users[1].age
  } years older than ${users[1].name}.`
);

/*EXERCICE 2
Remove the first object in the array. Write a program using the following logic:
    - If  no age is provided, print "No age provided". 
    - If the user's age is greater than or equal to 18, put that user in the array of adult learners. 
    - If not, that user belongs in the array of junior learners.
    * Test your program using the object you removed from the array.
    * Change the age property of first object in the users array and run your program again.*/
// Your code here

const newUsersArr = users.slice();

// first item
// const removedPerson = newUsersArr.shift();

// 3rd item
// const [removedPerson] = newUsersArr.splice(2, 1);

// last item
const [removedPerson] = newUsersArr.splice(-1, 1);

console.log(newUsersArr);
console.log(removedPerson);

const adultLearnersArr = new Array();
const juniorLearnersArr = new Array();

// removedPerson.age = 18;
// removedPerson.age = null;

// If, else
// if (!removedPerson.age) console.log("🛑 Error: No age provided!");
// else if (removedPerson.age >= 18) adultLearnersArr.push(removedPerson);
// else juniorLearnersArr.push(removedPerson);
// console.log("Adults:", adultLearnersArr);
// console.log("Juniors:", juniorLearnersArr);

// Alternative (using ternary)
// !removedPerson.age
//   ? console.log("🛑 Error: No age provided!")
//   : removedPerson.age >= 18
//   ? adultLearnersArr.push(removedPerson)
//   : juniorLearnersArr.push(removedPerson);
// console.log("Adults:", adultLearnersArr);
// console.log("Juniors:", juniorLearnersArr);

// using a function
const allocateLearner = (learner) => {
  if (!learner.age) return "No age provided.";
  let group;
  if (learner.age >= 18) {
    adultLearnersArr.push(learner);
    group = "Adult Learners Group";
  } else {
    juniorLearnersArr.push(learner);
    group = "Junior Learners Group";
  }
  return `Learner has been allocated to the ${group}.`;
};

console.log(allocateLearner(removedPerson));

//test data
console.log(allocateLearner({ age: null }));
console.log(allocateLearner({ age: 18 }));
console.log(allocateLearner({ age: 42 }));
console.log(allocateLearner({ age: 12 }));

/*EXERCICE 3
Without duplicating the code for your program, instead of removing the first item, 
change your code to remove the third object from the users Array. 
What is the output of your program? Remove the last item in the users array without using .pop(). 
What is the output of your program?*/
// Your code here

// !! 👋 code above as variable needs be be defined and assigned before allocation logic !!

/*EXERCICE 4
Remove all junior learners from the users array and replace each removed array with a new user object of an adult user. 
New users should be inserted at the same index of the object they replace.*/
// Your code here

const newLearnersDataArr = [
  {
    name: "Michael",
    age: 34,
    job: "teacher",
  },
  {
    name: "Julie",
    age: 45,
    job: "doctor",
  },
];

const removeAndReplace = function (arr, newDataArr) {
  let i = 0;
  arr.forEach((obj, index) => {
    if (typeof obj.age === "number" && obj.age < 18) {
      arr[index] = newDataArr[i];
      i++;
    }
  });
};

const finalUsersArr = users.slice();

removeAndReplace(finalUsersArr, newLearnersDataArr);

console.log(finalUsersArr);

/*EXERCICE 5
In one line of code, delete everything from the users array.*/

users.splice(0, users.length);

console.log(users);
