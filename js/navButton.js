const navButtons = document.querySelectorAll('.nav-button');

function catchButton(button) {
    for(i = 0; i < navButtons.length; i++) {
        navButtons[i].style.borderTop = '4px solid transparent';
    }

    button.style.borderTop = `4px solid ${window.getComputedStyle(button).borderTopColor}`;
}   