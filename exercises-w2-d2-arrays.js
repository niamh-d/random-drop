/*------------------
1)
Create an array called "numbers"
and include the numbers zero
through five. 

The console.log statement is checking
if you are correct.
------------------*/

// your code here

const makeNumArr = (len, start = 1) => {
  const arr = new Array();
  let i = start;
  do {
    arr.push(i);
    i++;
  } while (i <= len);
  return arr;
};

const numsArr = makeNumArr(5);

console.log(numsArr);

console.log(
  "Question #1 ",
  numsArr.reduce((a, b) => a + b) === 15 ? "is correct." : "is incorrect."
);

/*------------------
  2)
  Print Sofia's age to the console.
  ------------------*/

const friends = [
  {
    name: "Pedro",
    relationship: "school",
    age: 30,
  },
  {
    name: "Sofia",
    relationship: "work",
    age: 38,
  },
];

console.log(friends[1].age);
console.log(friends[1]["age"]);
const [first, { age }] = friends;
console.log(age);

/*------------------
  3)
  "Tuesday" is in the wrong
  place. Take it out using the .splice
  method, and add it back in using the
  .splice method.
  
  Hint: when you do this, you shouldn't
  have to retype "Tuesday". Assign it to
  a variable when you remove it so that
  you can add it back in using the
  variable name.
  ------------------*/

const weekdaysArr = ["Sunday", "Tuesday", "Monday", "Wednesday"];

const moveItemInArr = function (arr, item, newPos) {
  const [item_] = arr.splice(arr.indexOf(item), 1);
  const newIndex = newPos - 1;
  arr.splice(newIndex, 0, item_);
};

moveItemInArr(weekdaysArr, "Tuesday", 3);

console.log(weekdaysArr);

/*------------------
  4)
  Add the rest of the weekdays
  to the weekDays array by using the
  .push method.
  ------------------*/

const missingDays = ["Thursday", "Friday", "Saturday"];

weekdaysArr.splice(weekdaysArr.length, 0, ...missingDays);

console.log(weekdaysArr);

console.log(
  "Question #4 ",
  weekdaysArr[6] === "Saturday" ? "is correct." : "is incorrect."
);

/*------------------
  5)
  Print all of the items in the 
  weekDays array as a string, with
  each item seperated with a comma.
  
  Hint: This will use a method you don't
  know yet. Figure it out by doing an
  Internet search for "create comma separated
  string from array javascript". DO NOT USE LOOPS.
  ------------------*/

const listOfWeekDays = `${weekdaysArr.join(", ")}`;

console.log(`The days in the week are: ${listOfWeekDays}.`);

/*------------------
  6)
  Change the array so it starts
  with Monday and ends with Sunday
  instead. To do this, use two methods
  from the following list:
  .push
  .pop
  .shift
  .unshift
  
  Hint: when you remove "Sunday" from
  the beginning of the array, assign it
  to a variable so you don't lose it.
  DO NOT USE LOOPS.
  ------------------*/

const newDaysArr = weekdaysArr.slice();
const day = newDaysArr.shift();
newDaysArr.push(day);
console.log(newDaysArr);

console.log(
  "Question #6 ",
  newDaysArr[6] === "Sunday" ? "is correct." : "is incorrect."
);

/*------------------
  7)
  Now, using some of the methods
  from the last question, create a
  new array with all the items in the
  weekDays array reversed. 
  
  Hint: figure out how to make a copy
  of the weekDays array. Then, use some of
  the methods you learned to remove items
  from that copy and add into the reversedWeekDays
  array. DO NOT USE LOOPS.
  ------------------*/

const reversedWeekdays = [];
newDaysArr.slice().forEach((day) => {
  reversedWeekdays.unshift(day);
});

console.log(reversedWeekdays);

console.log(
  "Question #7 ",
  reversedWeekdays[6] === "Monday" ? "is correct." : "is incorrect."
);

/*------------------
  8)
  Let's do this again. This time, reverse
  the writtenNumbers – but do it in ONE
  line of code.
  
  Hint: there is a method to reverse all
  the items in an array. Do an Internet search
  or explore the MDN docs to figure this out.
  ------------------*/

const writtenNumbers = ["one", "two", "three", "four", "five"];
const reversedWrittenNums = writtenNumbers.slice().reverse();

console.log(reversedWrittenNums);

/*------------------
  9)
  Take each item off the front of the
  num array, multiply that item
  by 7, and add it to the numTimesSeven
  array. DO NOT USE LOOPS.
  ------------------*/

const newNumsArr = [1, 2, 3];

const numsTimesSeven = newNumsArr.slice().map((num) => {
  newNumsArr.shift();
  return num * 7;
});

console.log(numsTimesSeven);

console.log(
  "Question #9 ",
  newNumsArr.length === 0 && numsTimesSeven[1] === 14
    ? "is correct."
    : "is incorrect."
);

const newNumsArr2 = [1, 2, 3];
const numsTimesSeven2 = [];
newNumsArr2.slice().forEach((num) => {
  newNumsArr2.shift();
  numsTimesSeven2.push(num * 7);
});

console.log(numsTimesSeven2);

console.log(
  "Question #9 ",
  newNumsArr2.length === 0 && numsTimesSeven2[1] === 14
    ? "is correct."
    : "is incorrect."
);

/*------------------
  10)
  Find out if the id "1x3v6umb0i9p" is
  included in the listOfIDs array. You can
  do this in one line of code (assign the answer
  true or false to a variable called "includesID").
  
  Hint: it may be easiest to figure this out
  using the MDN docs– or including "ES6" in your
  search query (the array method for this was
  added in a more recent version of JavaScript).
  ------------------*/

const listOfIDs = [
  "1x31irevblzm",
  "1x3wznfkvkov",
  "1x3x9s82j3go",
  "1x3of9nx54kk",
  "1x3jqe3jmhre",
  "1x3r0cai8s3b",
  "1x3j687gtvh9",
  "1x3q9mtup3vd",
  "1x3tfs237azl",
  "1x3w5de6iw8x",
  "1x36yim09v32",
  "1x3jxnv2o1fa",
  "1x31erunsrgz",
  "1x3u8p6k9dzb",
  "1x35hav9qdwq",
  "1x3dgvjrjtst",
  "1x3qhvzf10cv",
  "1x3lbhfb5xrp",
  "1x3kogvzbda7",
  "1x3dbpw3h8cc",
  "1x3z1zqtzk5w",
  "1x3o3sp1ngii",
  "1x367bviy1hp",
  "1x3d52x8jwvm",
  "1x36j7e79d9i",
  "1x3vmccrc4b6",
  "1x3jji9iqwuq",
  "1x37ddh7st7v",
  "1x33ywwl8mih",
  "1x33jagi36k2",
  "1x3eyiin802x",
  "1x304vrzymap",
  "1x3tlbecxpu4",
  "1x3b1bwgyrry",
  "1x35r0iyqz77",
  "1x30n9uuqgyk",
  "1x33cybkioeq",
  "1x3qgywv1pux",
  "1x3s2ordohci",
  "1x38oyqc006h",
  "1x3sysj3ww2q",
  "1x3bp13ddk35",
  "1x3awsoimdlb",
  "1x3wv3wpzqlg",
  "1x3k2e2j409g",
  "1x3j4d0f461s",
  "1x3r2mxhh2bq",
  "1x37lv6wzc9z",
  "1x3pjpzmt1wl",
  "1x3gxle96pxn",
  "1x374m6eygc9",
  "1x37x7pt1hk9",
  "1x3v3vev0o13",
  "1x39l4kt4j59",
  "1x35ensw5w0p",
  "1x30608784ic",
  "1x3v752xl3jf",
  "1x3v6umb0i9p",
  "1x3tw0clitve",
  "1x3a5l11tp4t",
  "1x34rap4j837",
  "1x3rih3to6vb",
  "1x3pcyktai2m",
  "1x35didmxlsk",
  "1x3n4w7iexkz",
  "1x3x4lpybvob",
  "1x3f2gev8iyb",
  "1x3ej7ol6nnk",
  "1x3vvjfrsqm1",
  "1x3lg1a87is2",
  "1x3ttgy57mb9",
  "1x3d0mcx5p8u",
  "1x3pbwlh9ctw",
  "1x340wsd87qj",
  "1x3hm9qwdk99",
  "1x317dqa5zeu",
  "1x35f2jutupe",
  "1x3savd9you1",
  "1x3j8w48vik9",
  "1x3ifbp1qw0b",
  "1x3xr587wcmd",
  "1x3nklesqedo",
  "1x3k74k8akkh",
  "1x34cvkuc9uh",
  "1x39svc04ns0",
  "1x38pp43vbse",
  "1x30882m8i3q",
  "1x3hgr2bm5r3",
  "1x3jkmtlf6rg",
  "1x3n1alvxms1",
  "1x39hlgfq9hl",
  "1x3fexwb5ss3",
  "1x3po4d4ra1h",
  "1x3d8nc0xxjn",
  "1x3rgloaon5h",
  "1x3w90ezibm6",
  "1x3oy70uoi19",
  "1x3ea2b4gnbd",
  "1x3um89s3wha",
  "1x3qb4bqt2cl",
];

console.log(
  "Question #10 ",
  listOfIDs.includes("1x3v6umb0i9p") ? "is correct." : "is incorrect."
);

/*------------------
  11)
  Print the last ID in the list of IDs
  to the console. To do this, you will
  need to know what index the last ID
  is in. You can figure this out through
  a calculation which includes the length
  of the full array.
  
  Hint: as always, if you aren't sure...
  do an internet search :)
  ------------------*/

const lastID = listOfIDs.at(-1);

console.log(
  "Question #11 ",
  listOfIDs.length === 100 && lastID === "1x3qb4bqt2cl"
    ? "is correct."
    : "is incorrect."
);

const lastID2 = listOfIDs[listOfIDs.length - 1];

console.log(
  "Question #11 ",
  listOfIDs.length === 100 && lastID2 === "1x3qb4bqt2cl"
    ? "is correct."
    : "is incorrect."
);
