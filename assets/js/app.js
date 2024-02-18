const signUp1 = document.querySelector('#signUp1');
const logIn1 = document.querySelector('#logIn1');

const signUp2 = document.querySelector('#signUp2');
const logIn2 = document.querySelector('#logIn2');

signUp1.addEventListener('click', signUpToggle);
logIn1.addEventListener('click', LoginToggle);

signUp2.addEventListener('click', signUpToggle);
logIn2.addEventListener('click', LoginToggle);




function signUpToggle() {
    const signUpModel = document.querySelector('#signupModel');
    if (signUpModel.classList.contains('hidden')) {
        signUpModel.classList.remove('hidden')
    }
}

function LoginToggle() {
    const loginModel = document.querySelector('#loginModel');
    if (loginModel.classList.contains('hidden')) {
        loginModel.classList.remove('hidden')
    }
}