moment().format("dddd, MMMM Do YYYY, h:mm A");

const apiKey = "412552e87ada8cac1f10cba0d02c9993";
const cityName = document.getElementById("input").value;
console.log(city);
function getInput() {
  const apiCurrent =
  "api.openweathermap.org/data/2.5/weather?q={cityName}&appid={apiKey}";
  $.ajax({
    url: apiCurrent,
    method: "GET",
  })

  then(function (responseOneDay) {
    $(".city").html("<h1>" + responseOneDay.name + " Weather Details</h1>");
    $(".date").html("<h2>" + responseOneDay.date + " Date</h2>");
    $(".wind").text("Wind Speed: " + responseOneDay.wind.speed);
    $(".humidity").text("Humidity: " + responseOneDay.main.humidity);
    $(".lat").text("Latitude: " + responseOneDay.coord.lat);
    $(".lon").text("Longitude: " + responseOneDay.coord.lon);
    
    var tempF = (responseOneDay.main.temp - 273.15) * 1.8 + 32;

    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));



    const uvIndex =
    "api.openweathermap.org/data/2.5/uvi?q={apiKey}&lat={lat}&lon={lon}";
    $.ajax({
      url: uvIndex,
      method: "GET",
    })

    then(function (responseUVIndex) {
      $(".uv index").text("UV Index " + responseUVIndex.value);
      console.log(responseUVIndex)

      const uviButton = document.createElement("button");
      uvButton.textContent = (UVI);

      if (responseUVIndex.value > 0) {
        uvButton.setAttribute("class", "bg-success rounded");
      }
      if (responseUVIndex.value > 4) {
        uvButton.setAttribute("class", "bg-warning rounded");
      }
      if (responseUVIndex.value > 8) {
        uvButton.setAttribute("class", "bg-danger rounded");
      }



      const apiFiveDay =
      "api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={apiKey}";
      $.ajax({
        url: apiFiveDay,
        method: "GET",
         })

        then(function (responseFiveDay) {
          console.log("5 day forecast response:");
          console.log(responseFiveDay);
          $(".day1Icon").text("Day 1 " + responseFiveDay.list[4].weather[0].icon);
          $(".day2Icon").text("Day 2 " + responseFiveDay.list[12].weather[0].icon);
          $(".day3Icon").text("Day 3 " + responseFiveDay.list[20].weather[0].icon);
          $(".day4Icon").text("Day 4 " + responseFiveDay.list[28].weather[0].icon);
          $(".day5Icon").text("Day 5 " + responseFiveDay.list[36].weather[0].icon);
       
          $(".day1temp").text("Day 1 " + responseFiveDay.list[4].main.temp);
          $(".day2temp").text("Day 2 " + responseFiveDay.list[12].main.temp);
          $(".day3temp").text("Day 3 " + responseFiveDay.list[20].main.temp);
          $(".day4temp").text("Day 4 " + responseFiveDay.list[28].main.temp);
          $(".day5temp").text("Day 5 " + responseFiveDay.list[36].main.temp);
      
          $(".day1humidity").text("Day 1 " + responseFiveDay.list[4].main.humidity);
          $(".day2humidity").text("Day 2 " + responseFiveDay.list[12].main.humidity);
          $(".day3humidity").text("Day 3 " + responseFiveDay.list[20].main.humidity);
          $(".day4humidity").text("Day 4 " + responseFiveDay.list[28].main.humidity);
          $(".day5humidity").text("Day 5 " + responseFiveDay.list[36].main.humidity);


  });
  });
  });


}


