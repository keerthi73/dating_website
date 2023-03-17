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

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});