/* feather icon */
feather.replace();

const searchInput = document.querySelector(".top-header__input-search");
const searchIcon = document.querySelector(".top-header__search-btn svg");
searchInput.addEventListener("focus", () => {
    searchIcon.style.transform = "rotate(-90deg)";
});
searchInput.addEventListener("blur", () => {
    searchIcon.style.transform = "rotate(0)";
})