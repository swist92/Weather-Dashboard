const apiKey = "412552e87ada8cac1f10cba0d02c9993";

// User clicks the search button
// Then we grab the cityName from the searchCities input
$("#button").on("click", function () {
  const cityName = $("#searchCities").val();
  console.log(cityName);
  getInput(cityName);
});

function getInput(cityName) {
  const apiCurrent = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  $.ajax({
    url: apiCurrent,
    method: "GET",
  }).then(function (responseOneDay) {
    $(".city").html("<h1>" + responseOneDay.name + " Weather Details</h1>");
    $(".date").html("<h2>" + responseOneDay.date + " Date</h2>");
    $(".wind").text("Wind Speed: " + responseOneDay.wind.speed);
    $(".humidity").text("Humidity: " + responseOneDay.main.humidity);
    $(".lat").text("Latitude: " + responseOneDay.coord.lat);
    $(".lon").text("Longitude: " + responseOneDay.coord.lon);

    const tempF = (responseOneDay.main.temp - 273.15) * 1.8 + 32;

    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

    var lat = responseOneDay.coord.lat;
    var lon = responseOneDay.coord.lon;

    const uvIndexUrl = `http://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`;
    $.ajax({
      url: uvIndexUrl,
      method: "GET",
    }).then(function (responseUVIndex) {
      $(".uvIndex").text("UV Index " + responseUVIndex.value);
      console.log(typeof responseUVIndex.value);

      //const uviButton = $("<button>");
      //uviButton.textContent = UVI;

      if (responseUVIndex.value > 0 && responseUVIndex.value <= 4) {
        $(".uvIndex").attr("class", "bg-success rounded");
      } else if (responseUVIndex.value > 4 && responseUVIndex.value <= 8) {
        $(".uvIndex").attr("class", "bg-warning rounded");
      } else if (responseUVIndex.value > 8) {
        $(".uvIndex").attr("class", "bg-danger rounded");
      }
    });
  });

  const apiFiveDay = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
  $.ajax({
    url: apiFiveDay,
    method: "GET",
  }).then(function (responseFiveDay) {
    console.log("5 day forecast response:");
    console.log(responseFiveDay);

    $(".day1icon").text("Day 1 " + responseFiveDay.list[4].weather[0].icon);
    $(".day2icon").text("Day 2 " + responseFiveDay.list[12].weather[0].icon);
    $(".day3icon").text("Day 3 " + responseFiveDay.list[20].weather[0].icon);
    $(".day4icon").text("Day 4 " + responseFiveDay.list[28].weather[0].icon);
    $(".day5icon").text("Day 5 " + responseFiveDay.list[36].weather[0].icon);

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

  // local storage goes here

  // $(".weatherDashboard").show();

  // localStorage.setItem("previouscity", cityName);
  // if (citylist.includes(cityname)) {
  //   return;
  // }
  // citylist.push(cityname);
  // const navItemOuterEl = $("<li class='nav-item'>");
  // navItemOuterEl.appendTo("#citylist");
  // $(
  //   '<a class="nav-link active list-group-item bg-white text-dark border-light text-center" href="#">' +
  //     cityname +
  //     "</a>"
  // )
  //   .css("textTransform", "capitalize")
  //   .appendTo(navItemOuterEl);
}
