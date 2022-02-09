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

let x = window.matchMedia('screen and (max-width:991.99px)');
Responsive(x);
x.addEventListener('change', Responsive);

function Responsive(x) {
    if (x.matches) {
        /* megamenu slide */
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


        /* sub mainmenu */
        const mainLink = document.querySelectorAll('.mega-menu__main-content');
        mainLink.forEach((link) => {
            link.onclick = function() {

                OpenSubMenu(link);
            }
        });

        function OpenSubMenu(link) {
            let subMenu = link.nextElementSibling;
            if (subMenu != null) {
                subMenu.classList.toggle('mega-menu__main-sub_active');
                link.classList.toggle('mega-menu__main-content_active');
            }
        }


        /* sub megamenu */
        const subContents = document.querySelectorAll('.mega-menu__order-sub-content');
        (function() {
            const orders = document.querySelectorAll('.mega-menu__order-content');
            orders.forEach(function(item) {
                item.onclick = function() {
                    let nextElement = item.nextElementSibling;
                    let isOpen = nextElement.children[0].classList.contains('mega-menu__order-sub_active');
                    if (nextElement != null) {
                        if (isOpen) {
                            nextElement.children[0].classList.remove('mega-menu__order-sub_active');
                            item.classList.remove('mega-menu__order-content_active');
                            CloseInnerSubs(subContents);
                        } else {
                            CloseSubMenus(orders);
                            nextElement.children[0].classList.add('mega-menu__order-sub_active');
                            item.classList.add("mega-menu__order-content_active");
                        }
                    }
                }
            });

            function CloseSubMenus(orders) {
                orders.forEach((item) => {
                    let nextElement = item.nextElementSibling;
                    if (nextElement != null) {
                        nextElement.children[0].classList.remove('mega-menu__order-sub_active');
                        item.classList.remove('mega-menu__order-content_active');
                    }
                });
            }

        })();
        (function() {
            subContents.forEach((item) => {
                item.addEventListener('click', function() {
                    let nextElement = item.nextElementSibling;
                    let isOpen = nextElement.classList.contains('mega-menu__order-innersub_active');
                    if (nextElement != null) {
                        if (isOpen) {
                            nextElement.classList.remove('mega-menu__order-innersub_active');
                            item.classList.remove('mega-menu__order-sub-content_active');
                        } else {
                            CloseInnerSubs(subContents);
                            nextElement.classList.add('mega-menu__order-innersub_active');
                            item.classList.add('mega-menu__order-sub-content_active');
                        }
                    }
                });
            });
        })();

        function CloseInnerSubs(subContents) {
            subContents.forEach((item) => {
                let nextElement = item.nextElementSibling;
                if (nextElement != null) {
                    nextElement.classList.remove('mega-menu__order-innersub_active');
                    item.classList.remove('mega-menu__order-sub-content_active');
                }
            });
        }
    } else {
        (function() {
            const orderMenu = document.querySelector('.mega-menu__order-menu');
            const megamenuBtn = document.querySelector('.mega-menu__main-text_mega');
            const hoverline = document.querySelector('.mega-menu__hover-line_mega');

            megamenuBtn.parentNode.onmouseover = function() {
                orderMenu.classList.add('mega-menu__order-menu_active');
                hoverline.classList.add('mega-menu__hover-line_active');
            }
            megamenuBtn.parentNode.onmouseout = function() {
                orderMenu.classList.remove('mega-menu__order-menu_active');
                hoverline.classList.remove('mega-menu__hover-line_active');
            }
            orderMenu.onmouseover = function() {
                orderMenu.classList.add('mega-menu__order-menu_active');
                hoverline.classList.add('mega-menu__hover-line_active');
            }
            orderMenu.onmouseout = function() {
                orderMenu.classList.remove('mega-menu__order-menu_active');
                hoverline.classList.remove('mega-menu__hover-line_active');
            }
        })();
    }
}