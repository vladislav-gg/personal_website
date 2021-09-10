// var dt = DateTime.now();
// let currentTime = dt.toLocaleString(DateTime.DATETIME_MED);

var now = new Date();
let localtime = now.toLocaleString();
document.getElementById("time").innerHTML = localtime;