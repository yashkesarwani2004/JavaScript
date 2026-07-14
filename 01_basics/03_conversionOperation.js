// number to string 
let score = 33
console.log(typeof score);
let scoreString = String(score)
console.log(scoreString);

// string to number 
let stringval = "Yash"
console.log(typeof stringval);
let changeNum = Number(stringval)
console.log(changeNum); //NaN means not a number 

// Boolean to Number
let booleanNum = true
console.log(typeof booleanNum);
let numnNum = Number(booleanNum)
console.log(numnNum);

// "33" => 33
// "yash" => NaN mila
//true => 1; false => 0

// string to Boolean
let str = "yashkes"
console.log(typeof str);
let boolNum = Boolean(str)
console.log(boolNum);

// 1 => true; 0 => false 
//"" => false; "hgt" => true

let num1 = null
console.log(typeof num1);
let num2 = Number(num1)
console.log(num2);
 
let num3 = undefined
console.log(typeof num3);
let num4 = Number(num3)
console.log(num4);

//***************operations:****************

let value = 3;
let negVal = -value
console.log(negVal);

console.log(2**3);// this means 2 ki power 3

let name1 = "yash"
let name2 = " kes"
let name3 = name1 + name2
console.log(name3);

console.log("2" + 2);
console.log(2 + "2");
console.log("1" + 2  + 2);
console.log(1 + 2 + "2"); //yaha ho jaiga add kyuki shuru me hi do number hai 

console.log(+true);
console.log(+"");

let ya1,ya2,ya3
ya1=ya2=ya3=4
console.table([ya1,ya2,ya3]);

//postfix and prefix
let x = 3
let y = ++x //x to ++ hoga hi per yaha y ko value increament ho jaigi tab milega
console.log(x,y);

let x2 = 3
let y2 = x2++ //yaha x2 ++ hoga per y2 me sirf x2 ki value jaiga bina ++ hue kyuki yaha ++ baad me hai to iss liye bas x2 mil jaiga y2 ko
console.log(x2,y2);

