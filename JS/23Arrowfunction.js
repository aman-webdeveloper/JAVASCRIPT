const user = {
    username : "AMAN",
    price :99,

    welcomemessage :function(){
        console.log(`${this.username},Welcone to Website`);
        // console.log(this);

    }

}
// console.log(this);
// user.welcomemessage()
// user.username = "Sam"
// user.welcomemessage()

// function chai(){
//     console.log(this)
// }
// chai()

const chai = ()=>{
    let username= "aman"
    console.log(this)
}
// chai()

//++++++++++++++ Notes// ⭐🌟⭐
//  if use  curly braces {} then we return keyword


// const addTwo= (num1,num2)=> {
//     return num1+num2
// }

//++++++++++++++ Notes// ⭐🌟⭐
//  if use parantheses then we dont use return  keyword

// const addTwo= (num1,num2)=> num1+num2

const addTwo= (num1,num2)=> ({username:"Aman"})
console.log(addTwo(2,4));

const myarray =[2,7,9,8,7]


