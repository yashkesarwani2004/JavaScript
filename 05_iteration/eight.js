//reduce
// ye mainly array ki sab value ko add karke deta hai 

const mynum = [1,2,3,4,5,6,7,8,9]

//by using normla fuction

// const total = mynum.reduce( (function (acc,currval){
//     console.log(`acc: ${acc} and current val is ${currval}`);
//     return acc + currval
    
// }),0 ) 

// console.log(total);

//by using arrow function
const total = mynum.reduce( (acc,currval) => ( acc + currval ),0 ) //ye zero bata raha hai ki acc ki value kya hai shuru me
console.log(total);


// example of reduce 
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const mytotal = shoppingCart.reduce( (acc,currval) => ( acc + currval.price ),0 )
console.log(mytotal);
