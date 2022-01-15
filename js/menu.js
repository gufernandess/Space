const menu = document.querySelector(".menu-button");
const toogle = document.querySelectorAll(".menu-toogle");
const nav = document.querySelector("nav");
const page = document.querySelector("body");

menu.addEventListener("click", () => {
    var navState = window.getComputedStyle(nav).display;
    navState == "none" ? menuIn() : menuOut();
});

function menuIn() {
    toogle[0].style.display = "none";
    toogle[1].style.transform = "rotate(135deg)";
    toogle[1].style.transition = ".3s";
    toogle[2].style.transform = "rotate(-135deg)";
    toogle[2].style.top = "-21px";
    toogle[2].style.transition = ".3s";
    menu.style.marginTop = "22px";

    nav.style.display = "flex";
    nav.style.animation = "slide-in .3s ease normal forwards";
    page.style.overflow = "hidden";
}

function menuOut() {
    toogle[0].style.display = "inherit";
    toogle[1].style.transform = "rotate(0deg)";
    toogle[1].style.transition = ".3s";
    toogle[2].style.transform = "rotate(0deg)";
    toogle[2].style.top = "0px";
    toogle[2].style.transition = ".3s";
    menu.style.marginTop = "0px";

    nav.style.animation = "slide-out .3s ease normal forwards";
        setTimeout(() => {
            nav.style.display = "none";
            page.style.overflow = "inherit";
        }, 300);
}