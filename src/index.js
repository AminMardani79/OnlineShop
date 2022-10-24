import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";
import "./assets/css/main.min.css";
import "./swiper";
import "@fortawesome/fontawesome-free";
// functions
import { Responsive } from "./responsive";
import { scrollUp } from "./functions";

/* feather icon */
feather.replace();
/* global variables */
const overlay = document.querySelector(".main-overlay");
const scrollUpBtn = document.querySelector(".footer__title_btn");
const bottomHeader = document.querySelector(".bottom-header");

/* header search */
const searchInput = document.querySelector(".top-header__input-search");
const searchIcon = document.querySelector(".top-header__search-btn svg");
searchInput.addEventListener("focus", () => {
  searchIcon.style.transform = "rotate(-90deg)";
});
searchInput.addEventListener("blur", () => {
  searchIcon.style.transform = "rotate(0)";
});

let x = window.matchMedia("screen and (max-width:991.99px)");
Responsive(x, overlay);
x.addEventListener("change", Responsive);
scrollUpBtn.addEventListener("click", () => {
  scrollUp();
});
/* window.onscroll = () => {
  if (window.scrollY > 250) {
    bottomHeader.style.height = "0";
  } else {
    bottomHeader.style.height = "auto";
  }
  console.log(window.scrollY);
}; */
if (module.hot) {
  module.hot.accept();
}
