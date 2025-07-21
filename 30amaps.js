// 🌟🌟MAPS 


const mynum=[1,2,3,4,5,6,7,8,9,10];

const newnums = mynum.map((num)=>num+10);
// console.log(newnums);

// chaiining exmaple

const newnumbers= mynum
// .map((num)=>num*10)
// .map((num)=>num+1)
.filter((num)=> num>=40);
console.log(newnumbers);


// 🌟🌟reduce

const yournums = [1,2,3];

// 🌟🌟 first way
// const mytotal = yournums.reduce(function(acc,curntvalue){
//     console.log(`acc : ${acc} and currentvalue : ${curntvalue}`);
//     return acc+curntvalue;

// },0)

// 🌟🌟 arrow function example
const mytotal = yournums.reduce((acc,curntvalue)=> acc+curntvalue,0)
console.log(mytotal)

// 🌟🌟 example

const shoppingcart =[
    {
        itemname : "javascript",
        price : 2999
    },
    {
        itemname : "python",
        price : 3999
    },
    {
        itemname : "excel",
        price : 1999
    },
    {
        itemname : "backend",
        price : 9999
    }
]

const totalamount = shoppingcart.reduce((acc,item)=>acc + item.price,0)
console.log(totalamount);

