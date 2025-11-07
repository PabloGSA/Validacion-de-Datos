// Expresiones Regulares

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
const numberRegex = /^[\+]?[(+]?[\d\s\-\(\)]{8,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Ejemplos de Validación:

//Email
console.log(emailRegex.test('pablogsa30@gmail.com'))
console.log(emailRegex.test('pablogsa30gmail.com'))

//Username
console.log(usernameRegex.test('Pedro123'))
console.log(usernameRegex.test('Pedro@123'))

//Teléfono
console.log(numberRegex.test('+58 4248474382'))
console.log(numberRegex.test('pepito23'))

//Contraseña
console.log(passwordRegex.test('Pepito123*'))
console.log(passwordRegex.test('pepito123'))

//Selectores
const countries = document.querySelector('#countries');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const phoneCode = document.querySelector('#phone-code');
const phoneInput = document.querySelector('#phone');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const formBtn = document.querySelector('#form-btn');
const form = document.querySelector('#form');

//Validaciones
let usernameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false;
let countriesValidation = false;

//Funcion

const validation = (e, validation, element) => {
    const information = e.target.parentElement.children[1];
    formBtn.disabled = !usernameValidation || !emailValidation || !phoneValidation || !passwordValidation || !confirmPasswordValidation || !countriesValidation ? true : false;
    if (validation) {
        element.classList.add('correct');
        element.classList.remove('incorrect');
        information.classList.remove('show-information');
    } else {
        element.classList.add('incorrect');
        element.classList.remove('correct');
        information.classList.add('show-information');
    }
}

[...countries].forEach(option => {
    option.innerHTML = option.innerHTML.split('(')[0];
});

usernameInput.addEventListener('input', e => {
    usernameValidation = usernameRegex.test(e.target.value);
    validation(e, usernameValidation, usernameInput);
});

emailInput.addEventListener('input', e => {
    emailValidation = emailRegex.test(e.target.value);
    validation(e, emailValidation, emailInput);
});

countries.addEventListener('input', e => {
    const optionSelected = [... e.target.children].find(option => option.selected);
    phoneCode.innerHTML = `+${optionSelected.value}`
    countriesValidation = optionSelected.value !== '' ? true : false;
    countries.classList.add('correct');
    phoneCode.classList.add('correct');
    validation(e, null, null);
});

phoneInput.addEventListener('input', e => {
    phoneValidation = numberRegex.test(e.target.value);
    const information = e.target.parentElement.children[3];
    console.log(information)
    if (phoneValidation) {
        phoneInput.classList.add('correct');
        phoneInput.classList.remove('incorrect');
        information.classList.remove('show-information');
    } else {
        phoneInput.classList.add('incorrect');
        phoneInput.classList.remove('correct');
        information.classList.add('show-information');
    }
});

passwordInput.addEventListener('input', e => {
    passwordValidation = passwordRegex.test(e.target.value);
    validation(e, passwordValidation, passwordInput);
});

confirmPasswordInput.addEventListener('input', e => {
    confirmPasswordValidation = passwordInput.value === e.target.value;
    validation(e, confirmPasswordValidation, confirmPasswordInput);
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const user = {
        username: usernameInput.value,
        email: emailInput.value,
        phone: `${phoneCode.innerHTML} ${phoneInput.value}`,
        password: passwordInput.value,
    }
    console.log(user);
})