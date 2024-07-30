const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuLnkClose = document.querySelectorAll(".menu-lnk-close");

for (var i = 0; i < menuLnkClose.length; i++) {
  const toggleMenu = () => mobileMenu.classList.toggle("is-open");
  menuLnkClose[i].addEventListener("click", toggleMenu);
}

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
// const disableScroll = () =>
//   document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

// menuBtnOpen.addEventListener("click", disableScroll);
// menuBtnClose.addEventListener("click", disableScroll);
