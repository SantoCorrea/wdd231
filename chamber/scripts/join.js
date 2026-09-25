// Stamp the hidden field with the moment the form was loaded
document.querySelector('#timestamp').value = new Date().toLocaleString();

// Open the matching dialog when a "Learn more" link is clicked
document.querySelectorAll('[data-modal]').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const modal = document.getElementById(link.dataset.modal);
        modal.showModal();
    });
});

// Close whichever dialog the button lives in
document.querySelectorAll('.close-modal').forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('dialog').close();
    });
});