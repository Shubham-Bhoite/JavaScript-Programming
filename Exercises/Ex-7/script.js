//clock global variables
let audio = new Audio("./beep.mp3");
let check = 0;
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let am = document.getElementById("am");
let [mer, a, h, s, m, d] = [0, 0, 0, 0, 0, 0]; //destructuring
//chhote magar kaam ke functions
const appear = (x) => { return (x < 10 ? "0" + x : x); } //add 0 to number < 10
const convert = (x) => { return Number.parseInt(x) }   //convert string to number
const hider4 = (x) => { x.hidden = (x.hidden) ? false : true; } //hide DOM elements 
//clock update
const update = function() {
  a = new Date()
  h = appear(a.getHours());
  m = appear(a.getMinutes());
  s = appear(a.getSeconds());
  d = a.getDate();
  mer = ((h > 12 || (h == 12 && m > 0)) ? "pm" : "am");
  am.innerHTML = mer;
  hours.innerHTML = (check % 2 === 0 && h > 12) ? appear(h - 12) : h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}
let blink = document.querySelectorAll(".blink2")
setInterval((x) => { blink[0].classList.toggle("blinkthis") }, 520)
setInterval((x) => { blink[1].classList.toggle("blinkthis") }, 520)
setInterval(update, 100);
//Alarm
let popUp = document.querySelectorAll('.showbox');
let alarm = document.querySelectorAll('.timepicker');
let alarmObj = {}
let alarmInterval;
const set = () => {
  let alarmString = alarm[0].value;
  alarmObj.hour = convert(alarmString.substr(0, 2));
  alarmObj.min = convert(alarmString.substr(3, 3));
  alarmObj.mer = alarmString.substr(6, 2);
  hider4(popUp[0]);
  alarmInterval = (alarmObj.hour + 12 - convert(h)) * 3600;  //hour to minutes
  if (alarmObj.min < convert(m) || mer.toUpperCase() != alarmObj.mer.toUpperCase()) {
    alarmInterval += 24 * 3600   //sets alarm for next day 
  }
  alarmInterval += (alarmObj.min - convert(m)) * 60;     //minutes to seconds
  alarmInterval -= s;   //rectifies manual delay while setting Alarm
  alarmInterval = alarmInterval * 1000                   //to milliseconds
  setTimeout(playsound, alarmInterval)
}
const playsound = () => {
  hider4(popUp[1]);
  audio.loop = true
  audio.play();
}
document.addEventListener('DOMContentLoaded', function() {
  let instances = M.Timepicker.init(alarm, {});
});