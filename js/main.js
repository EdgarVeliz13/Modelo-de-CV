const menu = document.querySelector(".menu");
const openMenuBoton = document.querySelector(".open-menu");
const closeMenuBoton = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_abierto");
}

openMenuBoton.addEventListener("click", toggleMenu);
closeMenuBoton.addEventListener("click", toggleMenu);