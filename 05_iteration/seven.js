const num = [1,2,3,4,5,6,7,8,9,10]

//map:
//ye return karta hai foreach ke jaise nhi hai
let newnum = num.map( (item) => item + 10 )
console.log(newnum);

//by using foreach

// let arr=[]
// num.forEach( (item,index) => {
//     arr[index] = item + 10; 
// } ) 
// console.log(arr);

//chaining methods:
// isme hota ye hai phele ek method pura run karta hai fir uss hisab se num ki value bhejta hai alge method me fir aise hi chalta hai fir last me jo varible rahta hai usko de deta hai value 
const number = num.map( (num) => num * 10 ).map( (num) => num + 1 ).filter( (num) => num>=40 )
console.log(number);


