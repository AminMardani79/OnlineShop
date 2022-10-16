// functions
import {
  OpenSubMenu,
  CloseSubMenus,
  CloseInnerSubs,
  RemoveActiveOrders,
  changeDesktopChild,
  ActiveOrderItem,
} from "./functions";
export const Responsive = (x, overlay) => {
  if (x.matches) {
    /* megamenu slide */
    const megaOpen = document.querySelector(".top-header__hambergur-menu");
    const megaMenu = document.querySelector(".mega-menu");
    megaOpen.onclick = function () {
      megaMenu.classList.add("mega-menu_active");
      overlay.classList.add("main-overlay_active");
    };
    overlay.onclick = function () {
      megaMenu.classList.remove("mega-menu_active");
      overlay.classList.remove("main-overlay_active");
    };
    window.onscroll = function () {
      megaMenu.classList.remove("mega-menu_active");
      overlay.classList.remove("main-overlay_active");
    };
    /* end megamenu slide */

    /* sub mainmenu */
    const mainLink = document.querySelectorAll(".mega-menu__main-content");
    mainLink.forEach((link) => {
      link.onclick = function () {
        OpenSubMenu(link);
      };
    });

    /* end sub mainmenu */

    /* sub megamenu */
    const subContents = document.querySelectorAll(
      ".mega-menu__order-sub-content"
    );
    const orders = document.querySelectorAll(".mega-menu__order-content");
    orders.forEach(function (item) {
      item.onclick = function () {
        let nextElement = item.nextElementSibling;
        let isOpen = nextElement.children[0].classList.contains(
          "mega-menu__order-sub_active"
        );
        if (nextElement != null) {
          if (isOpen) {
            nextElement.children[0].classList.remove(
              "mega-menu__order-sub_active"
            );
            item.classList.remove("mega-menu__order-content_active");
            CloseInnerSubs(subContents);
          } else {
            CloseSubMenus(orders);
            nextElement.children[0].classList.add(
              "mega-menu__order-sub_active"
            );
            item.classList.add("mega-menu__order-content_active");
          }
        }
      };
    });

    subContents.forEach((item) => {
      item.addEventListener("click", function () {
        let nextElement = item.nextElementSibling;
        let isOpen = nextElement.classList.contains(
          "mega-menu__order-innersub_active"
        );
        if (nextElement != null) {
          if (isOpen) {
            nextElement.classList.remove("mega-menu__order-innersub_active");
            item.classList.remove("mega-menu__order-sub-content_active");
          } else {
            CloseInnerSubs(subContents);
            nextElement.classList.add("mega-menu__order-innersub_active");
            item.classList.add("mega-menu__order-sub-content_active");
          }
        }
      });
    });

    /* end sub megamenu */
  } else {
    /* hover megamenu */
    const orderMenu = document.querySelector(".mega-menu__order-container");
    const megamenuBtn = document.querySelector(".mega-menu__main-text_mega");
    const hoverline = document.querySelector(".mega-menu__hover-line_mega");

    megamenuBtn.parentNode.onmouseover = function () {
      orderMenu.classList.add("mega-menu__order-container_active");
      hoverline.classList.add("mega-menu__hover-line_active");
      overlay.classList.add("main-overlay_d-active");
    };
    megamenuBtn.parentNode.onmouseout = function () {
      orderMenu.classList.remove("mega-menu__order-container_active");
      hoverline.classList.remove("mega-menu__hover-line_active");
      overlay.classList.remove("main-overlay_d-active");
    };
    orderMenu.onmouseover = function () {
      orderMenu.classList.add("mega-menu__order-container_active");
      hoverline.classList.add("mega-menu__hover-line_active");
      overlay.classList.add("main-overlay_d-active");
    };
    orderMenu.onmouseout = function () {
      orderMenu.classList.remove("mega-menu__order-container_active");
      hoverline.classList.remove("mega-menu__hover-line_active");
      overlay.classList.remove("main-overlay_d-active");
    };
    /* end hover megamenu */

    /* change orderItem */
    const orderItem = document.querySelectorAll(".mega-menu__order-item");
    const desktopSub = document.querySelector(".mega-menu__desktop-sub");
    orderItem.forEach((item) => {
      const orderSub = item.children[1].firstElementChild;
      item.onmouseover = function () {
        RemoveActiveOrders(orderItem);
        ActiveOrderItem(this);
        changeDesktopChild(desktopSub, orderSub);
      };
    });

    /* end change orderItem */
  }
};
