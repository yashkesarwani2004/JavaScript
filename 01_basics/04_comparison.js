// same data type comparison:
console.log(2 == 2);
console.log(2 > 0);
console.log(3 >= 4);
console.log(4 < 4);

//diff data type comparison:
console.log("2" < 3);  //2 ko number me badal diya
console.log(3 == "3"); //3 ko number me badal diya

//niche ka jo hai usko use nahi kiya jada kyuki vo undefined result dete hai
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// === ye value aur data type dono check karta hai kisi bhi data type ko change nahi karta hai bas value aur datatype ko compaire karta hai
// == use kar rahe aur data type alag hai to ye apne aap ek data type me kar dega fir comaoire karega
console.log("2" === 2);

