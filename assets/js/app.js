const signUp1 = document.querySelector('#signUp1');
const logIn1 = document.querySelector('#logIn1');
const close = document.querySelector('#close');
const close2 = document.querySelector('#close2');

const signUp2 = document.querySelector('#signUp2');
const logIn2 = document.querySelector('#logIn2');

signUp1.addEventListener('click', signUpToggle);
logIn1.addEventListener('click', loginToggle);

signUp2.addEventListener('click', signUpToggle);
logIn2.addEventListener('click', loginToggle);


close.addEventListener('click', closingModel);
close2.addEventListener('click', closingModel);




function signUpToggle() {
    const signUpModel = document.querySelector('#signupModel');
    if (signUpModel.classList.contains('hidden')) {
        signUpModel.classList.remove('hidden')
    }
}

function loginToggle() {
    const loginModel = document.querySelector('#loginModel');
    if (loginModel.classList.contains('hidden')) {
        loginModel.classList.remove('hidden')
    }
}

function closingModel() {
    const signUpModel = document.querySelector('#signupModel');
    const loginModel = document.querySelector('#loginModel');

    if (!signUpModel.classList.contains('hidden')) {
        signUpModel.classList.add('hidden');
    }

    if (!loginModel.classList.contains('hidden')) {
        loginModel.classList.add('hidden');
    }

}

