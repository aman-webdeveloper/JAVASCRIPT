const crickters = ["virat", "rohit","msdhoni"];
const women_crickters = ["smriti","richa","perry"];

// crickters.push(women_crickters)
// console.log(crickters);

 const all_crickters = crickters.concat(women_crickters);
// console.log(all_crickters);

// this is the concatt which merge two array

const all_newcrickters = [...crickters,...women_crickters];
// console.log(all_newcrickters);

// this is the spread option which merge two array

const my_number = [1,2,3,[4,5,6],7,8,9,[11,12,[23,2,42,34,4]]];

const real_number = my_number.flat(Infinity);
// console.log(real_number);

console.log(Array.isArray("AMAN"));
console.log(Array.from("AMAN"));
console.log(Array.from({name : "aman"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));








