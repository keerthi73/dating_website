var hamburgerMenu = document.querySelector(".menu-hamburger");
var navbarLinks = document.querySelector(".links-navbar");

function volet() {
    navbarLinks.classList.toggle("mobile-menu");
    hamburgerMenu.classList.toggle("open");
}

let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    nav.classList.toggle("shadow", window.scrollY > 0)
})

hamburgerMenu.addEventListener("click", volet);


// swiper js------------>

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
  

