let emailInput = document.querySelector('#email');
let firstNameInput = document.querySelector('#firstName');
let lastNameInput = document.querySelector('#lastName');
let messageInput = document.querySelector('#message');
let radioInputs = document.querySelectorAll('.config_radio');

document.getElementById('form').addEventListener('submit', function (event) {

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let email = emailInput.value;
    let message = messageInput.value;
    let generalEnquiry = document.getElementById('general');
    let supportRequest = document.getElementById('support');

    let isValid = true;

    if (email === '') {
        event.preventDefault();
        emailInput.style.borderColor = 'red';
        isValid = false;
    } else {
        emailInput.style.borderColor = '';
    }

    if (firstName === '') {
        event.preventDefault();
        firstNameInput.style.borderColor = 'red';
        isValid = false;
    } else {
        firstNameInput.style.borderColor = '';
    }

    if (lastName === '') {
        event.preventDefault();
        lastNameInput.style.borderColor = 'red';
        isValid = false;
    } else {
        lastNameInput.style.borderColor = '';
    }

    if (message === '') {
        event.preventDefault();
        messageInput.style.borderColor = 'red';
        isValid = false;
    } else {
        messageInput.style.borderColor = '';
    }

    if (!generalEnquiry.checked && !supportRequest.checked) {
        event.preventDefault();
        radioInputs.forEach(div => {
            div.style.borderColor = 'red';
        });
        isValid = false;
    } else {
        radioInputs.forEach(div => {
            div.style.borderColor = '';
        });
    }

    if (isValid) {
        alert('Form successfully submitted');
    }
});
