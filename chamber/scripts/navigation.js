/* Navigation Menu Toggle */

const hamButton = document.querySelector('#ham-btn');
const navList = document.querySelector('#nav-bar ul');

/*--------Script------*/
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navList.classList.toggle('show');
}); 