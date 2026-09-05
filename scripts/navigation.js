/*-------- Navigation Script --------- */

const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

/* Toggle the 'show' class on every id button when clicked */

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});