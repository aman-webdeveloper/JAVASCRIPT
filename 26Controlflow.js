// if statement🌟🌟🌟

// const balance= 900;
// if(balance >500){
//     console.log("balnc is less than 500")
// }

// else if(balance>1000){
//     console.log("balnc is greator  than 1000")
// }
// else if(balance<900){
//     console.log("balnc is  900")
// }
// else{
//     console.log("balnc is less")

// }

// another example🌟
const userlogdeIn = true;
const debitcard = true;
const loggedInfromGoogle = false;
const loggedInfromGmail = true;

if (userlogdeIn && debitcard) {
  console.log("Allow to buy course");
}

if (loggedInfromGoogle || loggedInfromGmail) {
  console.log("user logged in");
}

// 🌟🌟🌟 Switch statemnts

// Syntax Switch statement 🌟🌟
// switch(key){
//     case  value :
//         break;

//         default :
//         break;

// }

// 🌟Example :

const month = 3;

switch (month) {
  case 1:
    console.log("january");
    break;

  case 2:
    console.log("februaruy");
    break;

  case 3:
    console.log("March");
    break;

  default:
    break;
}

// 🌟🌟🌟🌟🌟🌟 Truthy js 🌟🌟🌟

// example🌟🌟🌟
const userEmail = [];
if (userEmail) {
  console.log("got user email");
} else {
  console.log("don't have a email");
}

// Notes🌟🌟🌟

// falsy values
// false :0,-9,BigInt0n,"",null,undefined,Nan

// truthy values
// "0","false"," ", [], {}, function(){} 

// example🌟🌟🌟
if (userEmail.length === 0) {
    console.log("array is empty");
}


// example🌟🌟🌟
const emptyObj = {};
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
}

// Nullish coeescing opeartor(??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = 5 ?? undefined
val1 = undefined ?? 15
val1 = 10 ?? null ?? 20

console.log(val1);

// 🌟🌟TERNARY OPEARTor🌟🌟
// condition  ? true : false

const icecream = 100;
icecream >=50 ? console.log("less tha 80") : console.log("more than 80");


