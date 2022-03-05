// var dt = DateTime.now();
// let currentTime = dt.toLocaleString(DateTime.DATETIME_MED);

let now = new Date();
let localtime = now.toLocaleString();
document.getElementById("time").innerHTML = localtime;

const mobButton = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

mobButton.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});
