const arr = [1,2,3,4,5,6,7,8]

const val = arr.forEach( (item) => {
    // console.log(item);
    return item
} )

console.log(val);
//hence foreach kuch return nahi karta


const num = [1,2,3,4,5,6,7,8,9,10]

//by using filter
const i = num.filter( (item) => item > 4 )//{} ye yaha iss liye nahi lagaya kyuyki ye ek line tha agar ye laga {} raha to mujhe return bhi lagana hoga
console.log(i);

//by using foreach
const array = []
num.forEach( (item) => {
    if(item > 4){
        array.push(item)
    }
} )

//example of filter

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbk = books.filter( (bk) => bk.genre === 'History'  ) 

userbk = books.filter( (bk) => {
   return bk.publish >= 1995 && bk.genre === 'History'
} )
console.log(userbk);
