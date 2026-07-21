const apikey = "0e9be227b0195a078a76c14998118eb0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon") 

async function checkWeather(city){
   const response = await fetch(apiurl + city + `&appid=${apikey}`);
   if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
   }else{
       var data = await response.json();

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
   
   if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
   }else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "httpscdn-icons-png.flaticon.com1281174211742559.png"
   }else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/12607/12607703.png"
   }else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/3075/3075858.png"
   }
   else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/7866/7866118.png"
   }
   else if(data.weather[0].main == "https://cdn-icons-png.flaticon.com/128/13370/13370664.png"){
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/7866/7866118.png"
   }

   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";
   }
}

searchBtn.addEventListener("click",() => {
   checkWeather(searchBox.value);
})


























// const val = document.getElementById('input')

// const search = document.getElementById('button')
// search.addEventListener('click',function(e){
//    let city = val.value;
//    console.log(city);
//    const apikey = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e9be227b0195a078a76c14998118eb0&units=metric';
//    fetch(apikey)
//    .then(function(data){

//    })
//    })
// 0e9be227b0195a078a76c14998118eb0
//https://api.openweathermap.org/data/2.5/weather?
// units=metric&q=noida
