function fun1(){
    console.log("y");
    console.log("a");
    console.log("s");
    console.log("h");
}

fun1()

function addtwonum(num1 ,num2){
    // console.log(num1 + num2);
    // let run = num1 + num2
    return num1 + num2
    // console.log("yash");//ye kabhi run nahi karega kyuki iske uper hi return ho gaya hai to niche ahi aayga
}

const add = addtwonum(3,5)
console.log(add);

function login(username){
    // ye dono hi if sahi hai same meanings hai 
    // if(username===undefined){
    //     console.log("please enter a valid user name");
    //     return
    // }
    if(!username){
        console.log("please enter a valid user name");
        return
    }
    return `${username} just logged in`
}

console.log(login());

//to set default value in parameter
function fun2(name="yash"){
    return name
}
console.log(fun2())

// ***************************function video 2***********************

// function calcartprice(...num1){ //... yaha rest operator hai jo sab ko ek sath le lega aur array me de dega
//     return num1
// }

function calcartprice(val1,val2,...num1){ // yaha shuru ki 2 val val1 aur val2 me jaigi baki ka num1 me array ban kar
    return num1
}

console.log(calcartprice(200,400,300,465,87,55));

//object in function:

// const userinfo = {
//     username: "yash",
//     userprice: 65
// }

function handelobj(myobj){
    console.log(`my name is ${myobj.username} and price is ${myobj.userprice}`);   
}

// handelobj(userinfo) ye vala bhi kar sakte ho per ye alag se obj bana hai niche vala vahi me obj bana diya hai
handelobj({
    username: "yash",
    userprice: 98
})

//array in function:

// const mynewarray = [22,3,454,56,744,39] aise bana kar bhi kar sakte ho

function returnsecondval(getarray){
    return getarray[1]
}

// console.log(returnsecondval(mynewarray));
// vahi me array daal kar bhi kar sakte hai
console.log(returnsecondval([2,3,4345,64,23,42343,13,898]));
