//var c = 300
// var iss liye nahi lete kyuki ye scope ke bahar bhi value deta hai jab ki const aur let nahi dete hai
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("inner:",a);
    
}

console.log(a);
// console.log(b); its gives error as b is not define in global is define in block
console.log(c);

// ****************************************************

//paresnt child ka variable excess nahi kar sakta per child paresnt ka kar sakta hai 
function one(){
    const username = "yash"

    function two(){
        const website = "youtube"
        console.log(username); //ye le lega kyuki ye child hai
        
    }
    // console.log(website); //ye nahi le sakta variable ko kyuki ye parent hai
    
    two()
}
// console.log(username);//ye bhi variable ki value nahi le sakta kyuki ye paresnt hai uska

one()


if(true){
    const username = "yash2"
    if(username=="yash2"){
        const website = " youtube"
        console.log(username + website);
    }
}
// console.log(username);//ye nahi kar sakte  kyuki ye paresnt hai child ka variable nahi le sakta

addone(5)//yaha ho jaiga kyuki yaha function koi variable me nahi hai to kahi bhi karoo
function addone(num){
    console.log(num + 1)
}

// addtwo(6) //ye kaam nahi karega kyuki variable define nahi kiya aur phele hi usko excess karne lage
const addtwo = function(num){
    console.log(num + 2);
    
}
