import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";
import "./assets/css/main.min.css";
// import swiper
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
// functions
import { Responsive } from "./responsive";

/* feather icon */
feather.replace();
/* global variables */
const overlay = document.querySelector(".main-overlay");

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

new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  allowTouchMove: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
if (module.hot) {
  module.hot.accept();
}
