// mega-menu funtions
export const OpenSubMenu = (link) => {
  let subMenu = link.nextElementSibling;
  if (subMenu != null) {
    subMenu.classList.toggle("mega-menu__main-sub_active");
    link.classList.toggle("mega-menu__main-content_active");
  }
};
export const CloseSubMenus = (orders) => {
  orders.forEach((item) => {
    let nextElement = item.nextElementSibling;
    if (nextElement != null) {
      nextElement.children[0].classList.remove("mega-menu__order-sub_active");
      item.classList.remove("mega-menu__order-content_active");
    }
  });
};
export const CloseInnerSubs = (subContents) => {
  subContents.forEach((item) => {
    let nextElement = item.nextElementSibling;
    if (nextElement != null) {
      nextElement.classList.remove("mega-menu__order-innersub_active");
      item.classList.remove("mega-menu__order-sub-content_active");
    }
  });
};
export const RemoveActiveOrders = () => {
  orderItem.forEach((item) => {
    item.classList.remove("mega-menu__order-item_active");
  });
};

export const changeDesktopChild = (desktopSub, orderSub) => {
  const clone = orderSub.cloneNode(true);
  desktopSub.removeChild(desktopSub.children[0]);
  desktopSub.appendChild(clone);
};

export const ActiveOrderItem = (item) => {
  item.classList.add("mega-menu__order-item_active");
};
// end mega-menu functions
