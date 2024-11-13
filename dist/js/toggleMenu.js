const toggleMenu = document.querySelector(".toggle__menu");
const navMenu = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  navMenu.classList.toggle("open");
});