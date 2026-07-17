//for in loop
//for in loop key deta hai

const myobj = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby"
}

for (const key in myobj) {
    console.log(`${key} and the value is ${myobj[key]}`);
    
}

//array
const arr = ["js","c++","java","py"]

for (const key in arr) {
    //console.log(key);//ye key de raha sirf
    console.log(arr[key]); //ye value de raha
    
}

//map
//map isme nahi chalta
// const m = new Map()
// m.set('1','yash')
// m.set('2','tanu')
// m.set('3','som')

// for (const key in m) {
//    console.log(key);
   
    
// }