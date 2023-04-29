const emailForm = document.querySelector('#notification_form');
const inputEmail = document.querySelector('.input-email');
const errorMsg = document.querySelector('.error-msg');
let pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(!inputEmail.value || inputEmail.value !== pattern) {
        inputEmail.style.borderColor = 'var(--secondary-clr-2)';
        inputEmail.style.borderSize = '3px';
        errorMsg.style.display = 'block';
    }
})