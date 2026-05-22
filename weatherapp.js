//https://api.weatherapi.com/v1/current.json?key=a021ebaadec84616b74141037253011&q=chennai&aqi=yes

let apiKey = "https://api.weatherapi.com/v1/current.json?key=a021ebaadec84616b74141037253011&q=chennai&aqi=yes"; 
let inp = document.querySelector(".input");
let btn = document.querySelector(".btn");


        let cel = document.querySelector(".celcius");
        let loc = document.querySelector(".location");
        let humidity = document.querySelector(".humidity");
        let windspeed = document.querySelector(".windspeed");


async function Search(cityName){
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=a021ebaadec84616b74141037253011&q=${cityName}&aqi=yes`;
    const res = await fetch(apiUrl);
    const data = await res.json();

    cel.innerHTML = `${data.current.temp_c}°C`;
    loc.innerHTML = `${data.location.name}`;
    humidity.innerHTML = `${data.current.humidity}%`;
    windspeed.innerHTML = `${data.current.wind_kph} km/h`;
    
}

btn.addEventListener("click",()=>{
    Search(inp.value)
});
    
       
