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
