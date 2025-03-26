
const course  = {
    coursename : "js in hindi",
    price :"1000",
    courseinstructor : "hitesh"
}

// course.courseinstructor

// so bar barrr print krwan hotoh ye use nhi krenege

// then we use :-

const{courseinstructor} = course;

console.log(courseinstructor);

// agr coursesuiuintrctor ko change krna hotoh 
// then we use : 
const{courseinstructor : faculty} = course;
console.log(faculty);



// JSON EXAMPLE :

// {
//     "name " : "aman",
//     "coursename" : "javascript",
//     "price ": "free"
// }







