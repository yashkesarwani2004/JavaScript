// const tinder = new Object()
const tinder = {}

tinder.id = "123qs"
tinder.name = "yash"
tinder.isLoggedIn = false

console.log(tinder);
//obj ke andar obj
const regularUser = {
    email: "yash@gmail.com",
    fullName: {
        userfullname: {
            firstName: "yash",
            secondName: "kesarwani"
        }
    }
}
console.log(regularUser.fullName.userfullname.secondName);

//to add many obj

const obj1 = {1: "a",2: "b",3: "c"}
const obj2 = {4: "a",5: "b",6: "c"}
const obj3 = {7: "a",8: "b",9: "c"}

// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({},obj1,obj2,obj3) // isme jo {} ye hai usko as a target lega aue vahi me sab daal dega nahi lagaoge to obj1 me ko target lega aur vahi me daal dega aur baki sab source hai

const obj4 = {...obj1,...obj2,...obj3}//yahi jadaa use karte hai
console.log(obj4);

//array ke andar obj

const user = [
    {
        id: 1,
        name: "yash"
    },
    {
        id: 2,
        name: "yashkes"
    },
    {
        id: 3,
        name: "yashsam"
    }
]

console.log(user[1].name);

// some methods
console.log(tinder);
console.log(Object.keys(tinder));//sab key dega arraya ke form me
console.log(Object.values(tinder));//ye sab value dega array ke form me
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty('isLoggedIn'));//ye batayega ki ye hai ya nahi tinder me

//de-structure 
const course = {
    coursename: "yash",
    price: "999",
    courseInstructor: "kes"
}
//course.courseInstructor ye chahiye bar bar to niche vala karo

const {courseInstructor: Ins} = course
console.log(Ins);

//json(api) format

// {
//     "name": "yash",
//     "age": "43",
//     "othername": "sam"
// }
// //json can be in array also and object also
// [
//     {},
//     {},
//     {}
// ]
