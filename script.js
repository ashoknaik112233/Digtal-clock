const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

// domcontentloaded used, bcz to load css and html code before processing timemeans javascript code
document.addEventListener(
  "DOMContentLoaded", () => {
    setInterval(showTime, 1000);
  })

const showTime = () => {
  let date = new Date(); //date variable is used to store date and time
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();


  //time 00,01,02,03 like that
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;


  time.innerHTML = `${hour}:${min}:${sec}`;

  timeformat.innerHTML = hour >= 12 ? "PM" : "AM";

  // console.log("hours" + hour + "min" + min + "sec" + sec);
}