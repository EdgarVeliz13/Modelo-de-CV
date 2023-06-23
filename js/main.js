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