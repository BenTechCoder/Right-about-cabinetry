const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let mobileMenu = () => {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

hamBurger.addEventListener("click", mobileMenu);

let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modal-img");
let img = document.querySelector(".services-img");
let captionText = document.querySelector(".caption");
Array.from(document.querySelectorAll(".services-img")).forEach((item) => {
  item.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

let closeBtn = document.querySelector(".close-btn");
closeBtn.onclick = function () {
  modal.style.display = "none";
};
