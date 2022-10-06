import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.min.css";
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

if (module.hot) {
  module.hot.accept();
}
