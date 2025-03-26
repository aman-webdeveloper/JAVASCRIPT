
// Example of REST ... OPERATOR
// it will add the extra items 

function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,300,400,500,600))

const user = {
    Name : "Aman ",
    Age : 22
}

function handleobject(anyobject){
    console.log(`My Name is : ${anyobject.Name} and my age is ${anyobject.Age}`)
}
// handleobject(user);

handleobject({
    Name :"aman",
    Age:22
})

const myNewArray = [200,400,100,600]

function returnValues(getarray){
    return getarray[1]
}

console.log(returnValues(myNewArray));