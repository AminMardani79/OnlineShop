/* feather icon */
feather.replace();


/* header search */
const searchInput = document.querySelector(".top-header__input-search");
const searchIcon = document.querySelector(".top-header__search-btn svg");
searchInput.addEventListener("focus", () => {
    searchIcon.style.transform = "rotate(-90deg)";
});
searchInput.addEventListener("blur", () => {
    searchIcon.style.transform = "rotate(0)";
})


const megaOpen = document.querySelector(".top-header__hambergur-menu");
const megaMenu = document.querySelector(".mega-menu");
const overlay = document.querySelector('.main-overlay');
megaOpen.onclick = function() {
    megaMenu.classList.add('mega-menu_active');
    overlay.classList.add('main-overlay_active');
}
overlay.onclick = function() {
    megaMenu.classList.remove('mega-menu_active');
    overlay.classList.remove('main-overlay_active');
}