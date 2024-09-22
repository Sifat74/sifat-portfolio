// Menu dropdown
const menuContainer = document.querySelector('.menu-btn-container'); 
const menuBtns = document.querySelectorAll('.menu-btn');

menuContainer.addEventListener('mouseover', () => {
    menuBtns.forEach(menuBtn => {
        menuBtn.classList.remove('position-absolute');
    });
});

menuContainer.addEventListener('mouseout', () => {
    menuBtns.forEach(menuBtn => {
        menuBtn.classList.add('position-absolute');
    });
});

// Responsive popup
const menuIcon = document.querySelector('.menu-icon');
const menuPopup = document.querySelector('.menu-popup');
const menuCloseIcon = document.querySelector('.menu-close-icon');

menuIcon.addEventListener('click', () => {
    menuPopup.classList.remove('menu-transform');
})

menuCloseIcon.addEventListener('click', () => {
    menuPopup.classList.add('menu-transform');
})
