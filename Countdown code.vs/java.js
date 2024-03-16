var d = new Date("july 25, 2023 06:00:00").getTime();

var x = setInterval(function() {

var timer = new Date().getTime();
var diff = d - timer;

var days = Math.floor(( diff / (1000*60*60*24) ));
var hours = Math.floor(( diff % (1000*60*60*24))/ (1000*60*60));
var min = Math.floor(( diff % (1000*60*60) ) / (1000*60));
var sec = Math.floor(( diff % (1000*60) ) / (1000));

document.getElementById("demo").innerHTML = days +"d: "+ hours +"Hrs: "+ min +"Min: "+ sec +"Sec:" 

});