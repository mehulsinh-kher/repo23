const city = document.getElementById("city-input").value
const output = document.getElementById("woutput")
const button = document.getElementById("btn")



async function weather(value) {

    const url = `http://api.weatherapi.com/v1/current.json?key=a0818d1a20564fed95062103251711&q=${value}&aqi=yes`

    const response = await fetch(url);
    const data = await response.json();

    clo = data.current.cloud
    let imgsrc = "";

    if (clo <= 20) {
        imgsrc = "images/sun.png"
    }
    else if (clo > 20 && clo <= 70) {
        imgsrc = "images/wind.png"
    }
    else {
        imgsrc = "images/rain.png"
    }

    output.innerHTML = `

    <div class="secondiv">
         <img src="${imgsrc}" alt="Image" width="150px">
    </div>

    <h4 class="output-cityname"> ${data.location.country} ${data.location.region} ${data.location.name}</h4>
    </br>
    <h2 class="temp">${data.current.temp_c}<sup class="sup">°C</sup></h2>

    <div class="bottom-output">
       <div class="buttom-box">
             <i class="fa-solid fa-droplet icon"></i>
             <p class="firstpara">${data.current.humidity}%</p>
             <p class="secondpara">Humidity</p>
       </div>
    
       <div class="buttom-box">  
              <i class="fas fa-wind icon"></i>
              <p class="firstpara">${data.current.wind_kph}Km/h</p>
              <p class="secondpara">Wind Speed</p>
       </div>

       <div class="buttom-box">  
              <i class="fa-solid fa-cloud icon"></i>
              <p class="firstpara">${data.current.cloud}%</p>
              <p class="secondpara">Cloudes</p>
       </div>
     
       <div class="buttom-box">  
              <i class="fas fa-sun icon"></i>
              <p class="firstpara">${data.current.uv}</p>
              <p class="secondpara">UV Index</p>
       </div>
    </div>
    
    `
}



// button click action
button.addEventListener('click', function () {
    
    const city = document.getElementById("city-input").value
    
    if (city=="") {
        alert("Enter City Name")
    }
    else{
        weather(city)
        document.getElementById("city-input").value = ""
    }
})