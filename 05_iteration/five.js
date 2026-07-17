//foreach loop

const coding = ["java","python","cpp","javascript"]

coding.forEach( function (val) {
    console.log(val);
    
} )

coding.forEach((item) => {
    console.log(item);
    
} )

function fun (item){
    console.log(item);
    
}

coding.forEach( fun )

coding.forEach( (i,index,arr) => {
    console.log(i , index , arr);
    
})

//[{},{},{}]

const arr2 = [
    {
        name: "yash",
        age: 98
    },
    {
        name: "harsh",
        age: 33
    },
    {
        name: "som",
        age: 34
    }
]


arr2.forEach( (item,index) => {
    console.log(item.name,index);

    
} )