const navButton = document.querySelectorAll(".nav-button");
const planet = document.querySelector(".text-section h2");
const description = document.querySelector(".text-section p");
const source = document.querySelector(".text-section a");
const overview = document.querySelector(".planet-review img");
const dataSection = document.querySelectorAll(".data-section div h1");
const planetStructureButttons = document.querySelectorAll(".planet-structure-button");

var idButton;

pressButton(0);

if(window.screen.width < 800) {
    navButton[0].style.borderBottom = "4px solid var(--color-mercury)";
    planetStructureButttons[0].style.backgroundColor = window.getComputedStyle(navButton[0],':hover').borderBottomColor;
} else {
    navButton[0].style.borderTopColor = "var(--color-mercury)";
    planetStructureButttons[0].style.backgroundColor = window.getComputedStyle(navButton[0],':hover').borderTopColor;
}

navButton[0].style.color = "white";

function pressButton(id, borderColor) {
    idButton = id;

    document.querySelector("main").style.display = "flex";

    navButton.forEach(element => {
        element.style.cssText = "border-top-color: transparent;" + 
                                "color: var(--color-light-grey);";
    });

    clearStructure();

    if(window.screen.width < 800) {
        borderColor = window.getComputedStyle(navButton[id]).borderBottomColor;
        planetStructureButttons[0].style.backgroundColor = borderColor;
    } else {
        borderColor = window.getComputedStyle(navButton[id]).borderTopColor;
        planetStructureButttons[0].style.backgroundColor = borderColor;
    }

    changeData(id, borderColor);

    if(window.getComputedStyle(menu).display == "flex") {
        menuOut();
    }
}

function changeData(id, borderColor) {
    window.screen.width < 800 ? navButton[id].style.borderBottom = `4px solid ${borderColor}` : navButton[id].style.borderTopColor = borderColor;

    navButton[id].style.color = "white";

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

    if(window.screen.width < 800) {
        planetStructureButttons[0].style.backgroundColor = window.getComputedStyle(navButton[idButton],':hover').borderBottomColor;
    } else {
        planetStructureButttons[0].style.backgroundColor = window.getComputedStyle(navButton[idButton],':hover').borderTopColor;
    }

    overview.setAttribute("src", data[idButton].overview);
});

planetStructureButttons[1].addEventListener("click", () => {
    clearStructure();   

    if(window.screen.width < 800) {
        planetStructureButttons[1].style.backgroundColor = window.getComputedStyle(navButton[idButton],':hover').borderBottomColor;
    } else {
        planetStructureButttons[1].style.backgroundColor = window.getComputedStyle(navButton[idButton],':hover').borderTopColor;
    }

    overview.setAttribute("src", data[idButton].internalStructure);
});

planetStructureButttons[2].addEventListener("click", () => {
    clearStructure();

    if(window.screen.width < 800) {
        planetStructureButttons[2].style.backgroundColor = window.getComputedStyle(navButton[idButton],':hover').borderBottomColor;
    } else {
        planetStructureButttons[2].style.backgroundColor = window.getComputedStyle(navButton[idButton],':hover').borderTopColor;
    }

    overview.setAttribute("src", data[idButton].surfaceGeology);
});