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

//Validaciones
let usernameValidation = false;

[...countries].forEach(option => {
    option.innerHTML = option.innerHTML.split('(')[0];
});

usernameInput.addEventListener('input', e => {
    usernameValidation = usernameRegex.test(e.target.value);
    const information = e.target.parentElement.children[1];
    if (usernameValidation) {
        usernameInput.classList.add('correct');
        usernameInput.classList.remove('incorrect');
        information.classList.remove('show-information');
    } else {
        usernameInput.classList.add('incorrect');
        usernameInput.classList.remove('correct');
        information.classList.add('show-information');
    }
});