
// Nested scope

function one(){
    const username = "Aman"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    two()
}
// one()

if (true){
    const username = "aman"
    if(username=== "aman"){
        const website = "youtube"
        console.log(username + website)
    }
    
    // console.log(website)
}
// console.log(username)

// +++++++ intresting fact ++++++++++

//Function : one way 

console.log(addone(5));
function addone(num){
    return num + 1
}

// Note : we can console phle 

// console.log(addTwo(5));
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));


// Note : // Note : we cannot console phle 
