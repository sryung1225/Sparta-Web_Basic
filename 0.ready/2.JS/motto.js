function displayCurrentTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  let meridiem = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  let timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

  document.getElementById("current-time").innerHTML = timeString;
}

setInterval(displayCurrentTime, 1000);

let url = "https://api.quotable.io/random";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    let author = data["author"];
    let content = data["content"];

    let authorMsg = `- ${author} -`;
    let contentMsg = `" ${content} "`;

    $("#quoteAuthor").text(authorMsg);
    $("#quoteContent").text(contentMsg);
  });

let weather_url = "http://spartacodingclub.shop/sparta_api/weather/seoul";
fetch(weather_url)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    let icon = data["icon"];
    let temp = data["temp"];

    $("#weather-icon").attr("src", icon);
    $("#weather-temp").text(`${temp}ºC`);
  });
