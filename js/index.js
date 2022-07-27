const menuBurger = document.querySelector(".header__menu_mobile");
const burgerIcon = document.querySelector(".header__burger-icon");
const page = document.querySelector("html");
const menuItems = document.querySelectorAll(".header__link");
const container = document.querySelector(".header__container");

const activateMenu = () => {
  menuBurger.style.animation = "header-active 1s";
  menuBurger.classList.add("header__menu_active");
  page.style.overflowY = "hidden";
  container.style.overflow = "visible";
  menuBurger.style.overflowY = "scroll";
  burgerIcon.style.animation = "icon-active 1s";
  burgerIcon.classList.add("header__burger-icon_active");
  burgerIcon.removeEventListener("click", activateMenu);
  burgerIcon.addEventListener("click", closeMenu);
};

const closeMenu = () => {
  menuBurger.style.animation = "header-passive 1s";
  menuBurger.classList.remove("header__menu_active");
  page.style.overflowY = "scroll";
  container.style.overflow = "hidden";
  menuBurger.style.overflow = "visible";
  burgerIcon.style.animation = "icon-passive 1s";
  burgerIcon.removeEventListener("click", closeMenu);
  burgerIcon.classList.remove("header__burger-icon_active");
  burgerIcon.addEventListener("click", activateMenu);
};

burgerIcon.addEventListener("click", activateMenu);
menuItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});
