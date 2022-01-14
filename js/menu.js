const menu = document.querySelector("header img");
const nav = document.querySelector("nav");
const page = document.querySelector("body");

menu.addEventListener("click", () => {
    var navState = window.getComputedStyle(nav).display;

    if(navState == "none") {
        nav.style.display = "flex";
        nav.style.animation = "slide-in .3s ease normal forwards";
        page.style.overflow = "hidden";
    } else {
        nav.style.animation = "slide-out .3s ease normal forwards";
        setTimeout(() => {
            nav.style.display = "none";
            page.style.overflow = "inherit";
        }, 300);
    }
});