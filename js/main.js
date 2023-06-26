const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


let menuItem = document.querySelectorAll(".menu-item");
menuItem.forEach(function (item){
     item.addEventListener("click", function(e){
         const currentItem = document.querySelector(".active");
         currentItem.classList.remove("active");
        e.target.classList.add("active");
});
});

// const menuItems = document.querySelectorAll('.menu-item');
// menuItems.forEach(function (el){
//     el.addEventListener('click', function(e) {
//         const currentItem = document.querySelector('.active');
//         currentItem.classList.remove('active');
//         e.target.classList.add('active');
// });
// });

// const menu = document.querySelector(".menu");
// const openMenu = document.querySelector(".open-menu");
// const closeMenu = document.querySelector(".close-menu");

// function toggleMenu() {
//     menu.classList.toggle("menu_abierto");
// }

// openMenu.addEventListener("click", toggleMenu);
// closeMenu.addEventListener("click", toggleMenu);

