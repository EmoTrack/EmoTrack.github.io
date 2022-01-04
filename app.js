if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isFirefox = /Mozilla/.test(navigator.userAgent);
console.log(isIOS);
console.log(isFirefox);

let link = "https://www.soscisurvey.de/emotrack2/?q=emotrack&s="


function timer(){
let time = Date.now();
localStorage.setItem('time', time);
window.setTimeout("window.location.href='https://emotrack.github.io/';", 899999);
}

function fun2() {
let params = new URLSearchParams(document.location.search.substring(1));
first = parseInt(params.get("first"), 10);
}

function fun3() {
let params1 = new URLSearchParams(document.location.search.substring(1));
value = parseInt(params1.get("s"), 10);
console.log(value);
if(!isNaN(value)){
document.getElementById("eingabefeld").style.display = "none";
let link2 = "https://www.soscisurvey.de/emotrack2/?q=emotrack&s="
let check_link1 = link2+value;
window.location.href = check_link1;
}
}

function send(){
let token = document.querySelector("#token").value;
console.log (token);
localStorage.setItem('serial', token);
check = String(token);
if (first == 123) {let link1 = "https://www.soscisurvey.de/emotrack2/?q=emotrack01&s="}
  else{let link1 = "https://www.soscisurvey.de/emotrack2/?q=emotrack&s="
  }
let check_link = link1+check;
window.location.href = check_link;
}

fun3();
fun2();
console.log(first);

if (isIOS && (first == 123)) {
document.getElementById("ios-prompt").style.display = "block";
document.getElementById("eingabefeld").style.display = "none";
}

if (isFirefox && (first == 123)) {
document.getElementById("firefox-prompt").style.display = "block";
document.getElementById("eingabefeld").style.display = "none";
}

if (!isFirefox && (first == 123)) {
document.getElementById("android-prompt").style.display = "block";
document.getElementById("eingabefeld").style.display = "none";
}

if (first == 666) {
  localStorage.removeItem('serial');
  document.getElementById("eingabefeld").style.display = "block";
  alert("Fehlerhafter Code");
}

let serial = localStorage.getItem('serial');

if (serial == null){
if (isNaN(first)){
  document.getElementById("eingabefeld").style.display = "block";}
}
else
{
document.getElementById("eingabefeld").style.display = "none";
check = String(serial); 
let check_link = link+check;
window.location.href = check_link;
}

if (first == 42) {
  document.getElementById("eingabefeld").style.display = "none";
  document.getElementById("end").style.display = "block";
  timer();
}

