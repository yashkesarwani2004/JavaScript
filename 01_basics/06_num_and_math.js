const num1 = 42
console.log(num1);

const num2 = new Number(55) // aise bhi Number datatype ko declare kar sakte hai
console.log(num2);

console.log(num2.toString().length);//tostring use karne ke baad kuch bhi fuction use kar sakte ho string ka
console.log(num2.toFixed(2));//kitne point tak lena hai 

const num3 = 1223.743
console.log(num3.toPrecision(4)); //kitna value doge utna hi number dega round off karke

const num4 = 100000
console.log(num4.toLocaleString('en-IN'));//, laga kar deta hai aur en-IN indian ke hisab se hai

// *******************Maths*********************

console.log(Math);
console.log(Math.abs(-4)); //- ko bas + me kar deta hai + ko - me nahi
console.log(Math.round(4.6));//around off karta hai
console.log(Math.ceil(7.2));//7 ke halka bhi uper hua to 8
console.log(Math.floor(7.9));//7 ke halka bhi uper hua to 7 hi dega
console.log(Math.min(3,443,43,4,2,3));
console.log(Math.max(23,34,421,43,314));

console.log(Math.random());//range=> 0 to 0.99999999......
console.log((Math.random()*10) + 1);
// ye vala 1 se 10 tak ka random value dega 
console.log(Math.floor(Math.random()*10) + 1); //phele 10 se mul hoga kuch 9.424 aayga fir floor se 9 hoga fir +1 10 hoga ye ex hai ek

const min = 10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);//ye given min se given max ke range ke liye hai









