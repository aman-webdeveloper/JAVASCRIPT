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
const userlogdeIn = true
const debitcard = true
const loggedInfromGoogle = false
const loggedInfromGmail = true


if(userlogdeIn && debitcard){
    console.log("Allow to buy course")
}

if(loggedInfromGoogle || loggedInfromGmail){
    console.log("user logged in")
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

const month = 3

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