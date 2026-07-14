//array

const myArray = [0,1,2,3,4,5]//koi bhi datatype le sakte ho
console.log(myArray[3]);

const hero = ["yash","harsh","dad"]
const arr2 = new Array(1,2,3,4,5)//aise bhi kar sakte ho
console.log(arr2[3]);

//array methods:

myArray.push(6) //last me add kar dega
myArray.pop() // last vala nikal dega
console.log(myArray);

myArray.unshift(9) //ye add karta hai per aage aue sab ko ek ek piche kar deta hai
myArray.shift() //ye aage se hata deta hai
console.log(myArray);
 
console.log(myArray.includes(8));
console.log(myArray.indexOf(4));//agar value nahi hai to -1 dega

const newArray = myArray.join()//ye string bana deeta hai array ko 
console.log(myArray);
console.log(newArray);
console.log(typeof newArray);

//slice , splice:
//slice jo hai vo array ko chnage nahi karta slice karne ke baad jaise array tha vaise hi rahega per splice jo hai vo array me chnage karta hai apna vala part hayta deta hai
console.log("A ", myArray);

const myn1 = myArray.slice(1,3)//last index ko nahi leta

console.log(myn1);
console.log("B ",myArray);

const myn2 = myArray.splice(1,3) //ye last vala bhi leta hai
console.log("C ",myArray);
console.log(myn2);








