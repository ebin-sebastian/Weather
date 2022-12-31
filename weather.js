
function search(){
    city=cname.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080`).then(result=>result.json())
        .then(data=>displaydata(data))
        
        
}

function displaydata(city_data){
    
    ctemp=Math.floor((city_data.main.temp)-273.15)
    cfeel_like=Math.floor((city_data.main.feels_like)-273.15)
    visibility=(city_data.visibility)/1000
    humidity=city_data.main.humidity
    description=city_data.weather[0].main
    city=city_data.name.toUpperCase()
    var current = new Date();
    time=current.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    date=current.toDateString();

    if(description=="Clouds"){
        document.body.style.backgroundImage= "url('cloud.jpg')"
    }else if(description=="Mist"){
        document.body.style.backgroundImage= "url('mist.jpg')"
    }else if(description=="Clear"){
        document.body.style.backgroundImage= "url('clear.jpg')"
    }
    else if(description=="Smoke"){
        document.body.style.backgroundImage= "url('smoke.jpg')"
    }else{
        document.body.style.backgroundImage= "url('main.jpg')"
    }


    
    htmldata=`<div class="container rounded opacity-50 text-dark bg-light border w-50  mt-3  ">
    
    <div class="row">
    <div class="col">
    <p style="text-align:left;">${time}</p>
    </div>
    <div class="col ">
    <p style="text-align:right;"> ${date}</p>
   
    </div>
  </div>
    <div class=" text-center"><h2 class="w-5  mb-3">${city}</h2></div>
    <div class="text-center"><h2 class="">${ctemp}&#176c</h2>Feels Like ${cfeel_like}&#176c</div>
    
    <div class="text-center">Visibility ${visibility} km</div>
    <div class="text-center">Humidity ${humidity}%</div>
    <div class="mb-3 text-center"><h5>${description}</h5></div>
     
        </div>`
result.innerHTML=htmldata
    }
   
 
