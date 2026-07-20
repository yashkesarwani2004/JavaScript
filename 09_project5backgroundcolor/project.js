//generate random color:

const randomColor = function () {
  const num = "0123456789ABCDEF"//kyuki color ka number hexa form me rahta hai
  let color = '#'//color ke aage hamesha # laga rahta hai aur yaha let use karna kyuki change karna rahta hai bar bar
  for(let i = 0 ; i < 6 ; i++){ //number # ke baad 6 digit ka hota hai
    color += num[Math.floor(Math.random() * 16)] 
    //+= ye phele left vale ko right se add kar dega fir vahi value left vale ko mil jaiga
  }
  return color;
};

// console.log(randomColor());

let intervalId;

document.querySelector("#start").addEventListener('click', function(){
  if(intervalId == null){ //ye iss liye laga kyuki space bach jaigi
  intervalId = setInterval(function(){
  document.body.style.backgroundColor = randomColor();
  },1000)}
})

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null; //ye program ko aur accha bana dega isse space bana jaiga per ye use kiya to uoer if lagana hoga kyuki null me aise sidhe nahi likh sakte kuch
})