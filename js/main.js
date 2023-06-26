// funcionalidad "Menu Hamburguesa"
const menu = document.querySelector(".menu-conteiner");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_abierto");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const enlaces = document.querySelectorAll(".menu-conteiner a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", function() {
        menu.classList.remove("menu_abierto");
    })
})


// Funcionalidad "Selector"
let menuItem = document.querySelectorAll(".menu-item");
menuItem.forEach(function (item){
     item.addEventListener("click", function(e){
         const currentItem = document.querySelector(".active");
         currentItem.classList.remove("active");
        e.target.classList.add("active");
});
});



