const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

var toggleValue = 0;

menuBtn.addEventListener("click", function () {
  if (toggleValue == 0) {
    menuBtn.setAttribute("src", "images/icon-close.svg");
    mobileMenu.classList.remove("hide");
    overlay.classList.remove("hide");
    toggleValue++;
  } else if (toggleValue == 1) {
    menuBtn.setAttribute("src", "images/icon-hamburger.svg");
    mobileMenu.classList.add("hide");
    overlay.classList.add("hide");
    toggleValue--;
  }
});
