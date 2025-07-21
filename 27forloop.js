// 🌟🌟For Loop🌟🌟


// 🌟🌟Example 1 🌟🌟
// let num= 3;

// for (let num = 1; num<=10; num++) {
//    console.log(num*3); 
// }

// 🌟🌟Example 2 🌟🌟
// for(let i=1;i<=10;i++){
//     console.log(`outer loop value : ${i}`);
//     for(let j=1; j<=10; j++){
//         console.log(i+ " * " + j + " = "+ i*j);
        
//     }
    
// }

// 🌟🌟Example 3 🌟🌟

// let myarray= ["virat","rohit","Dhoni"];

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
// }

// 🌟🌟Example 4 🌟🌟

// 🌟🌟break 🌟🌟

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log("deteced 5 ");
        break;
        
    }
    console.log(`value of i is ${index}`);
    
    
}

//🌟🌟 Continue 🌟🌟

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log("deteced 5 ");
        continue;
        
    }
    console.log(`value of i is ${index}`);
    
}

