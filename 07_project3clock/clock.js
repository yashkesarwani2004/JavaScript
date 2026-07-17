const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () { //setinterval ek method le leta hai aur time de do isko to ye jo time rahega utne time me chalata hai ye method
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //1000 means 1 sec ye har 1 sec me ye method ko run karega yahi ko setinterval bolte hai

