
function myfunname(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// how to execute function
// myfunname();

// example :

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}

// addTwoNumbers(21,15); numbers  : 26
// addTwoNumbers(21,"15"); concanate  : 2115
// addTwoNumbers(21,"a"); concante : 21a
// addTwoNumbers(21,null); 21

// EXAMPLE:

function addsum(number1,number2){
    let result= number1+number2;
    return result;
}

const result = addsum(5,10)
// console.log("Result : ", result);

// EXAMPLE :

function loginusermessage(username="Ram"){
    if(!username){
        console.log("Please Enter username")
    }
    return`${username} just logged in`
}
// console.log(loginusermessage());




