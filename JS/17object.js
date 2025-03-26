// const tinderuser = new Object()

const tinderuser = {}

 tinderuser.id = "1234abc",
 tinderuser.name ="aman",
 tinderuser.isloggedin = false

// console.log(tinderuser);

const regularuser = {
    email: "some@gmail.com",
    fullname : {
        userfullname:{
            firstname :"aman",
            lastanme : "kumar"

        }
    }
}

console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 ={
    3: "c",
    4: "d",
}
const obj3 ={
    5: "e",
    6: "f",
}

const obj4  = Object.assign(obj1,obj2)
// console.log(obj4)

const obj5 = {...obj1,...obj2}
// console.log(obj5);

const users =[
    {
        id:1,
        email : "h@gmail.com"
    },
    {
        id:2,
        email : "k@gmail.com"
    },
    {
        id:3,
        email : "l@gmail.com"
    }
]

users[1].email
// console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isloggedin'));


