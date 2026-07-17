const user = {
    username: "yash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to our website`);
        // console.log(this); //per yaha context hai to yaha aayga
        
    }
}

user.welcomeMessage()
user.username = "yashsom"
user.welcomeMessage()
console.log(this);//yaha khali aayga kyuki yaha global me koi context hi nahi hai


// function chai(){
//     let username = "yash"
//     // console.log(this);
//     console.log(this.username);//ye undefined dega kyuki this only works on obj
// }

// chai()

const chai =function () {
    let username = "yash"
    // console.log(this);
    console.log(this.username);//ye undefined dega kyuki this only works on obj
}

// chai()

// ******************************arrow func***************************
const chai2 = () => {
    let username = "yash"
    console.log(this);
    
}
// chai2()

//explicit return:
const addtwo2 = (num1 , num2) => {
    return num1 + num2
}

//implicit return:
const addtwo3 = (num1 ,num2) => num1 + num2
//or:
const addtwo4 = (num1 , num2) => (num1 + num2)

console.log(addtwo2(3,5));
console.log(addtwo3(3,5));
console.log(addtwo4(3,5));

const addtwo5 = (num1 ,num2) => ({username: "yash"})//obj hai ye