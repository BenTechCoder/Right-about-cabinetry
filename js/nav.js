const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let mobileMenu = () => {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

hamBurger.addEventListener("click", mobileMenu);

