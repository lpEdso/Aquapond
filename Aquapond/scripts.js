// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init();

    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });
});
