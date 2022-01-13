const menu = document.querySelector("header img");
const nav = document.querySelector("nav");
const page = document.querySelector("body");

menu.addEventListener("click", () => {
    var navState = window.getComputedStyle(nav).display;

    if(navState == "none") {
        nav.style.display = "flex";
        page.style.overflow = "hidden";
    } else {
        nav.style.display = "none";
        page.style.overflow = "inherit";
    }
});