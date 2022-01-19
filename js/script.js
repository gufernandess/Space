const navButton = document.querySelectorAll(".nav-button");
const planet = document.querySelector(".text-section h2");
const description = document.querySelector(".text-section p");
const source = document.querySelector(".text-section a");
const overview = document.querySelector(".planet-review img");
const dataSection = document.querySelectorAll(".data-section div h1");
const planetStructureButttons = document.querySelectorAll(".planet-structure-button");

var idButton;

pressButton(0);
navButton[0].style.borderTopColor = "var(--color-mercury)";
navButton[0].style.color = "white";
planetStructureButttons[0].style.backgroundColor = window.getComputedStyle(navButton[0],':hover').borderTopColor;

function pressButton(id, borderTopColor, color) {
    idButton = id;

    document.querySelector("main").style.display = "flex";

    if(window.screen.width < 800) {
        borderTopColor = window.getComputedStyle(navButton[id]).borderBottomColor;
    } else {
        borderTopColor = window.getComputedStyle(navButton[id]).borderTopColor;
    }

    color = window.getComputedStyle(navButton[id]).color;

    navButton.forEach(element => {
        element.style.cssText = "border-top-color: transparent;" + 
                                "color: var(--color-light-grey);";
    });

    clearStructure();
    changeData(id, borderTopColor, color);

    if(window.getComputedStyle(menu).display == "flex") {
        menuOut();
    }
}

function changeData(id, borderTopColor, color) {
    navButton[id].style.borderTopColor = borderTopColor;
    navButton[id].style.color = color;

    planet.innerHTML = data[id].planet;
    description.innerHTML = data[id].description;

    source.setAttribute("href", data[id].source);
    overview.setAttribute("src", data[id].overview);

    dataSection[0].innerHTML = data[id].rotationTime;
    dataSection[1].innerHTML = data[id].revolutionTime;
    dataSection[2].innerHTML = data[id].radius;
    dataSection[3].innerHTML = data[id].averageTemperature;
}

function clearStructure() {
    planetStructureButttons.forEach(element => {
        element.style.cssText = "background-color: var(--color-black);";
    });
}

planetStructureButttons[0].addEventListener("click", () => {
    clearStructure();
    planetStructureButttons[0].style.backgroundColor = window.getComputedStyle(navButton[idButton],':hover').borderTopColor;
    overview.setAttribute("src", data[idButton].overview);
});

planetStructureButttons[1].addEventListener("click", () => {
    clearStructure();   
    planetStructureButttons[1].style.backgroundColor = window.getComputedStyle(navButton[idButton],':hover').borderTopColor;
    overview.setAttribute("src", data[idButton].internalStructure);
});

planetStructureButttons[2].addEventListener("click", () => {
    clearStructure();
    planetStructureButttons[2].style.backgroundColor = window.getComputedStyle(navButton[idButton],':hover').borderTopColor;
    overview.setAttribute("src", data[idButton].surfaceGeology);
});