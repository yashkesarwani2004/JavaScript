//Dates

let myDate = new Date()
console.log(typeof myDate);//data type of Date is object
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let myCreateDate = new Date(2024, 0 , 5) //month is started with zero in this
// console.log(myCreateDate.toDateString());
// let myCreateDate = new Date(2023, 3 , 4 , 5 , 4 )
let myCreateDate = new Date("03-10-2021")//yha pe 1 se hi mon shuru hota hai
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()//now means ye ek date se kitna milisec hua abhi ki date ka vo batata hai

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));//this gives value in sec

let newData = new Date()
console.log(newData);
console.log(newData.getMonth() + 1);
console.log(newData.getDay());

newData.toLocaleString('default',{
    weekday: "long"
})



