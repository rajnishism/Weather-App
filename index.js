
document.getElementById("date").innerHTML= new Date().toLocaleDateString("en-us",{weekday:"long" ,day:"numeric" , month:"short"});
navigator.geolocation.getCurrentPosition(success);

function success(position){

    var x = position.coords.latitude;
    var y = position.coords.longitude;
    var url ="https://api.openweathermap.org/data/2.5/weather?lat="+ x +"&lon="+ y +"139&appid=9ead12918a70fc1a4b82c0c13f934c48&units=metric";
    document.getElementById("access").innerHTML= "";
    fetch(url)
    .then(response=>response.json())
    .then(function(data){

      document.getElementById("temp").innerHTML= data.main.temp ;
      document.getElementById("weatherImg").src= "images/"+data.weather[0].icon +".png";
      document.getElementById("description").innerHTML= data.weather[0].description;
      document.getElementById("feels_like").innerHTML = "Feels like "+data.main.feels_like;
        document.getElementById("preloading").style.display= "none";

   })

}
