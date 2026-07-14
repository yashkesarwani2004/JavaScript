const name = "yashkes"
const age = 22

console.log(`my name is ${name} and my age is ${age}`);

// const name2 = 'yash'
// console.log(name2[1]);
const name1 = new String('yashkesarwani-2004-05')

console.log(name1[2]);
// console.log(name1.__proto__); //proto laga kar fir uske baad function use kar sakte hai baki bina iske bhi kar sakte hai

console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.charAt(5));
console.log(name1.indexOf("r"));

const sub = name1.substring(2,5) //it does not take negative value or it include only index (5-1=4) 5 vala nahi leta
console.log(sub);

const anSub = name1.slice(-21,3)
console.log(anSub);

const str = "  yashkesar   "
console.log(str);
console.log(str.trim()); // ye sirf aage aur piche ka hi hatata hai spaces

const url = "yashkes@gmail%20ucer"
console.log(url.replace('%20','_'));
console.log(url.includes('tanu'));//ye batata hai ye hai ya nahi
console.log(name1.split("-"));//ye - base me sab ko alag karke ek array bana dega







