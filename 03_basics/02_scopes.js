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

