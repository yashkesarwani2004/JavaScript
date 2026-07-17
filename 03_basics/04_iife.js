// *****Immediately Invoked Function Expressions (IIFE)****************

// IIFE 2 reasons se karte hai phela database se jaldi connect karna hai tab ya to global scope ya variable isko polute na kare usse bacha kar rakhne ke liye 

(function chai(){
    //named IIFE hai ye
    console.log(`db connected`);
})();// semi col nahi lagaya to niche vala iife nahi chalega

//()() phela vala fun defination ke liya hai aur dusra vala initialization ke liya hai ya call ke liye func ko 

(  (name) => {
    console.log(`my name is ${name}`);
    //unnamed IIFE hai ye
}  )("yash")

//phele name parameter ke liye hai aur yash jo hai usko initialization karke value bhej raha