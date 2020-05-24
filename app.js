const apiKey = "412552e87ada8cac1f10cba0d02c9993";

// User clicks the search button
// Then we grab the cityName from the searchCities input
$("#button").on("click", function() {
  const cityName = $("#searchCities").val();
  console.log(cityName);
  getInput(cityName);
});

let citylist = localStorage.getItem("cities");
console.log(citylist);
if (citylist) {
  citylist = JSON.parse(citylist)
  
} else {
  citylist = []
}

function getInput(cityName) {
  const apiCurrent =
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
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

    const uvIndexUrl =
      `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`;
    $.ajax({
      url: uvIndexUrl,
      method: "GET",
    }).then(function (responseUVIndex) {
      $(".uvIndex").text("UV Index " + responseUVIndex.value);
      console.log(typeof responseUVIndex.value);

      const tempF = (responseOneDay.main.temp - 273.15) * 1.8 + 32;

      //const uviButton = $("<button>");
      //uviButton.textContent = UVI;

      if (responseUVIndex.value > 0 && responseUVIndex.value <= 4) {
        $(".uvIndex").attr("class", "uvIndex bg-success pl-3 rounded");
      } else if (responseUVIndex.value > 4 && responseUVIndex.value <= 8) {
        $(".uvIndex").attr("class", "uvIndex bg-warning pl-3 rounded");
      } else if (responseUVIndex.value > 8) {
        $(".uvIndex").attr("class", "uvIndex bg-danger pl-3 rounded");
      }

    });
  });

  const apiFiveDay =
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;
  $.ajax({
    url: apiFiveDay,
    method: "GET",
  }).then(function (responseFiveDay) {
    console.log("5 day forecast response:");
    console.log(responseFiveDay);

    // CREATING ELEMENTS IN JAVASCRIPT DYNAMICALLY using jQuery
    //First step is to declare all your variables using $("<nameOfElementHere>")
    // Second is to add relevant attributes using .attr()
    // Third is to add relevant text using .text() or .html()
    // Last is to append them to the body or to the correct parent from html, and to each other

    // i = i + 1
    // var j = 1;
    // for (var i = 4; i < responseFiveDay.list.length; i = i + 8) {
    //   var day = $("<div>");
    //   day.attr("class", "d-inline-block bg-primary p-3 rounded text-white");
    //   var dayIcon = $("<div>");
    //   dayIcon.text("Day " + j + " " + responseFiveDay.list[i].weather[0].icon);
    //   var dayTemp = $("<div>");
    //   dayTemp.text("Day " + j + " " + responseFiveDay.list[i].main.temp);
    //   var dayHumidity = $("<div>");
    //   dayHumidity.text(
    //     "Day " + j + " " + responseFiveDay.list[i].main.humidity
    //   );
    //   $("#weather").append(day);
    //   day.append(dayIcon, dayTemp, dayHumidity);
    //   j++;
    // }
    var day1 = $("<div>");
    var day2 = $("<div>");
    var day3 = $("<div>");
    var day4 = $("<div>");
    var day5 = $("<div>");

    day1.attr("class", "d-inline-block bg-primary p-3 rounded text-white");    
    day2.attr("class", "d-inline-block bg-primary p-3 rounded text-white");
    day3.attr("class", "d-inline-block bg-primary p-3 rounded text-white");
    day4.attr("class", "d-inline-block bg-primary p-3 rounded text-white");
    day5.attr("class", "d-inline-block bg-primary p-3 rounded text-white");

    var day1icon = $("<div>");
    var day2icon = $("<div>");
    var day3icon = $("<div>");
    var day4icon = $("<div>");
    var day5icon = $("<div>");

    day1icon.text(
      "Day 1 " + responseFiveDay.list[4].weather[0].icon
    );
    day2icon.text(
      "Day 2 " + responseFiveDay.list[12].weather[0].icon
    );
    day3icon.text(
      "Day 3 " + responseFiveDay.list[20].weather[0].icon
    );
    day4icon.text(
      "Day 4 " + responseFiveDay.list[28].weather[0].icon
    );
    day5icon.text(
      "Day 5 " + responseFiveDay.list[36].weather[0].icon
    );

    var day1temp = $("<div>");
    var day2temp = $("<div>");
    var day3temp = $("<div>");
    var day4temp = $("<div>");
    var day5temp = $("<div>");

    day1temp.text("Day 1 " + responseFiveDay.list[4].main.temp);
    day2temp.text("Day 2 " + responseFiveDay.list[12].main.temp);
    day3temp.text("Day 3 " + responseFiveDay.list[20].main.temp);
    day4temp.text("Day 4 " + responseFiveDay.list[28].main.temp);
    day5temp.text("Day 5 " + responseFiveDay.list[36].main.temp);

    var day1humidity = $("<div>");
    var day2humidity = $("<div>");
    var day3humidity = $("<div>");
    var day4humidity = $("<div>");
    var day5humidity = $("<div>");

    day1humidity.text(
      "Day 1 " + responseFiveDay.list[4].main.humidity
    );
    day2humidity.text(
      "Day 2 " + responseFiveDay.list[12].main.humidity
    );
    day3humidity.text(
      "Day 3 " + responseFiveDay.list[20].main.humidity
    );
    day4humidity.text(
      "Day 4 " + responseFiveDay.list[28].main.humidity
    );
    day5humidity.text(
      "Day 5 " + responseFiveDay.list[36].main.humidity
    );

    // Append children
      $("#weather").append(day1, day2, day3, day4, day5);
      // parent.append(nameOfChildHere);
      day1.append(day1icon, day1temp, day1humidity);
      day2.append(day2icon, day2temp, day2humidity);
      day3.append(day3icon, day3temp, day3humidity);
      day4.append(day4icon, day4temp, day4humidity);
      day5.append(day5icon, day5temp, day5humidity);
  });

  // local storage goes here

  $(".weatherDashboard").show();

  if (citylist.includes(cityName)) {
    return;
  }
  citylist.push(cityName);
  localStorage.setItem("cities", JSON.stringify(citylist));
  const navItemOuterEl = $("<li class='nav-item'>");
  navItemOuterEl.appendTo("#citylist");
  $(
    '<a class="nav-link active list-group-item bg-white text-dark border-light text-center" href="#">' +
      cityName +
      "</a>"
  )
    .css("textTransform", "capitalize")
    .appendTo(navItemOuterEl);
}
