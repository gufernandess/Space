const menu = document.querySelector("header img");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    var navState = window.getComputedStyle(nav).display;

    if(navState == "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
});