// for of 🌟🌟


// for of 🌟🌟 example 1 of  inetger
const arr=[1,2,3,4,5,6,];

for (const num of arr) {
    // console.log(num);
}

// for of 🌟🌟 example 2 strings
const greeting = "Hello World";
for (const greet of greeting) {
    // console.log(greet);
}


// Maps 🌟🌟

const map = new Map()
map.set('IN','INDIA')
map.set('USA','UNITSED SATTES OF AMERICA')
map.set('FR','FRANCE')
map.set('NZ','NEWZEALNAD')
// console.log(map);

for (const [key,value] of map) {
    // console.log(key , ":-", value);
}

// const myobj = {
//     'game1' : "crcicket",
//     'game2' : "footbal",
// }

// objects  🌟🌟

const myobj={
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    py :"python"
}

for (const key in myobj) {
    // console.log(`${key} shorcut is for ${myobj[key]}`);
    
}

const programming = ["js","py","cpp","java","ruby"];

for (const key in programming) {
    console.log(programming[key]);
    
}
