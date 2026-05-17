document.addEventListener("DOMContentLoaded", () => {
	const mobButton = document.querySelector("button.mobile-menu-button");
	const menu = document.querySelector(".mobile-menu");
	const iconHamburger = document.getElementById("icon-hamburger");
	const iconClose = document.getElementById("icon-close");

	mobButton.addEventListener("click", () => {
		const isOpen = !menu.classList.contains("hidden");
		menu.classList.toggle("hidden");
		iconHamburger.classList.toggle("hidden");
		iconClose.classList.toggle("hidden");
		document.body.style.overflow = isOpen ? "" : "hidden";
		document.documentElement.style.overflow = isOpen ? "" : "hidden";
	});
});
