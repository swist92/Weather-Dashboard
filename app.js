var APIKey = "412552e87ada8cac1f10cba0d02c9993";
var cityName;
var apiCurrent = "api.openweathermap.org/data/2.5/weather?q={cityName}&appid={APIKey}"
var apiFiveDay = "api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={APIKey}";

$.ajax({
  url: queryURL,
  method: "GET",
});

then(function(response) {
    $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    $(".date").html("<h2>" + response.date + " Date</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;

    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
    $(".uvIndex").text("UV Index " + response.)
  });
  
