
const  mynums = [1,2,3,4,5,6,7,8,9,10];

// const newnums = mynums.filter((num)=> num>4)
// if we use () then we dont need to return 

// but if we use {} then we need to return the statement
const newnums = mynums.filter((num)=> {
    return num > 4
}) 
console.log(newnums);

const books = [
    {title: 'Book1', author: 'Author1',publish: 1981},
    {title: 'Book2', author: 'harrypoter',publish: 1982},
    {title: 'Book3', author: 'Author3',publish: 1983},
    {title: 'Book4', author: 'premdas',publish: 1982},
    {title: 'Book5', author: 'harrypoter',publish: 1985},
];

const userBooks =  books.filter((bks)=>bks.publish===1982&&bks.author==="harrypoter");
// const userauthors = books.filter((auth)=>auth.author==="harrypoter")

console.log(userBooks);
// console.log(userauthors);


