const heros = ["thor","yash","som"]
const heros2 = ["har","tanu","mum"]

// heros.push(heros2)
// console.log(heros); //iske heros2 vali array ko hi pura ek index me karke daal diya aur ye vahi vali array ko add kar deta hai usme ye new array mahi deta

const heros3 = heros.concat(heros2)
console.log(heros3);// yaha per array ke ek inder me hi array nahi aata yaha ek ek elements ko index milta hai aur ek new array milti hai jisme dono array adda rahti hai

//spread(sytax:...) :
const newHeros = [...heros,...heros2]
console.log(newHeros);
//flat:
const arr = [1,32,4,34,[3,6,43],35,[6,75,4,[4,57,8,7]]]
console.log(arr.flat(Infinity));//infinity ke jagha aapko jitna under tak jana hai aap likh sakte hai

console.log(Array.isArray("yashkes"));
console.log(Array.from("yashkes"));
console.log(Array.from({name:"yash"}));//ye empty sega kyuki isko batao phele isko array kaise todna hai key me ya character me

//of:
const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));
