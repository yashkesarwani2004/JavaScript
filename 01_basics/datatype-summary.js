const score = 100
const scoreValue = 100.3 //dono hi number me aaye alag se decimal ke liye nahi hai

const isLoggedIn = false
const outsideTemp = null// yaha dekho hm log kahi bhi variable ka datatype nahi bata rahe iss liye js dainamic typed hai 

let userEmail;// let userEmail = undefined ; ye bhi use kar sakte hai

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

// const bigNumber = 45456789876545678n //yaha last me n lagaya jaata hai

const heros = ['yash','harsh','dinesh'] //array
//object:
let myObj = {
    name: "yash",
    age: 22,
}

//function:
const myFun = function(){
    console.log("hello world");
}

console.log(typeof myFun);//it gives function object
console.log(typeof heros);//it gives object
console.log(typeof myObj);//it also gives object
console.log(typeof outsideTemp);//hence null typeof me object hi dega
console.log(typeof userEmail);// it gives undefined

// *************************memory***********************
// stack(primitive)   ,   heap(non-primitive) 

let yash = "kes"
let harsh = yash //harsh ke pass sirf copy aai hai refference nahi jo yash me bhi change ho jaiga
harsh = "gup"
console.log(yash);
console.log(harsh);

let userOne = {
    email: 'yash@gmail.com',
    age: 22
}
let userTwo = userOne // yaha pe refference aaya hai jiske vajha se agar hm kuch change karege to vo userone me bhi hoga
 

userTwo.age=25

console.log(userOne.age);
console.log(userTwo.age);




