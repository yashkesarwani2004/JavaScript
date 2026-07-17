//for of 
//ye loop value deta hai

const arr = [1,2,4,6,7,86,65]

for (const num of arr) {
    console.log(num);
    
}

const str = "yash is a good boy"
for (const i of str) {
    console.log(i);
    
}

//Map ye unique val leta hai aur jis order me do vahi order me val rahta hai aue ye iterable hai per obj nahi hai

// const m = new Map()
// m.set('1','yash')
// m.set('2','tanu')
// m.set('3','som')

// console.log(m);

const m = new Map()
m.set('1','yash')
m.set('2','tanu')
m.set('3','som')

for (const [key,value] of m) {
    console.log(key ,'=', value);
}

//objectme karke dekhte hai for of loop
const myobj = {
    name: "yash",
    age: 98
}

for (const [key,value] of myobj) {
    console.log(key , "=" , value);
    //ye loop nahi chalega kyuki obj is not iterable
}

for (const element of object) {
    
}