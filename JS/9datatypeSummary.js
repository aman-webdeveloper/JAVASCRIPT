//# Primitve 
// 7  types :-
//  String , Number, Boolean, Null, Undefined, Symbol, BigInt

// refrrence ( Non Primitive)

// # Array, Objects , Function

let mynum=null

let myvalue=21;

const id = Symbol('123');
const anotherid = Symbol('123');
 
console.log(id ===anotherid);

const crickters = ["VIRAT KHOLI ", "ROHIT SHARMA", "VIRAT KHOLI"];
let mydata = {
    name : "VIRAT KHOLI",
    age : 36,
}

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof id );
console.log(typeof  crickters);
console.log(typeof  mydata);
console.log(typeof myFunction );
console.log(typeof mynum);
console.log(typeof myvalue);
