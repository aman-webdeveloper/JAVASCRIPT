// 1. Basic Variables
let age = 20;
const name = "Aman";
var city = "Delhi";

age = 25; // works
// name = "Ravi"; // Error
city = "Gurgoan"; // works
console.log(`${name} is ${age} years old and live in ${city}`);


//  function varibles
function testScope(){
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x, y, z);
}
testScope();
console.log(x, y, z); // Error