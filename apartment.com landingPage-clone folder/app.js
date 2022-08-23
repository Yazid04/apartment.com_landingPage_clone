const menuBtn = document.querySelector(".menu-Btn");
const nav = document.querySelector(".navbar-container");


menuBtn.addEventListener("click", menuOpener)
function menuOpener() {
   const menuContainer = menuBtn.parentElement.previousElementSibling;
   menuContainer.classList.toggle("menu-opened")
}
