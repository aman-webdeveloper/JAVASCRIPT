// Singleton 

// object literals

const mysum = Symbol("key1")

const JsUser = {
    name : "AMAN",
    "full name" : "AMAN KUMAR",
    [mysum]:"mykey1",
    age :18,
    location:"Gurgoan",
    email : "Aman@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser);
// 
JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}


// console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())






