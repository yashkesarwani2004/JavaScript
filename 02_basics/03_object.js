//singleton
//object.create
//object.create ya object constructor me singleton banta hai 

//object literals
//isme singleton nahi banta


const mySym = Symbol("key1")

const jsUser = {
    name: "yash",
    "full name": "yash kesarwani",
    [mySym]: "mykey1",
    age: 18,
    location: "prayagraj",
    email: "yashkes2004@gmail.com",
    isLoggedIn: false,
    lastLogininDays: ["mon","sat"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);//aise bhi kar sakte hai bina . lagaye kyuki vo apne aap name ko string le lega per "" phele hi likh diya tab [] aise karna hoga
console.log(jsUser["full name"]);// aab uper dekho "" aise string me likha hai sideh nahi likha hai to hmko aise hi karna hoga
console.log(jsUser[mySym]);
 
jsUser.email = "nam@gmail.com" // = use karen kuch bhi obj se change kar sakte hai
console.log(jsUser);
//Object.freeze(jsUser)//ye karne se aab koi change nahi kar sakta hai
jsUser.name = "tanu"
console.log(jsUser);

jsUser.fuc1 = function(){
    console.log("hello");    
}
console.log(jsUser.fuc1());

jsUser.fuc2 = function(){
    console.log(`hello my name is ${this.name}`);//this use karne se tum value le sakte ho
}
console.log(jsUser.fuc2());


