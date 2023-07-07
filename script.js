const passwordInput = document.querySelector('#password');

const confirmPasswordInput = document.querySelector('#confirm-password');
const labelForConfirmPasswordInput = document.querySelector('label[for="confirm-password"]');
const spanConfirmPasswordInput = document.querySelector('label[for="confirm-password"]+span');

const checkPassword = function (e) {
    const passwordPattern = /(?=^.{8,16}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    let patternMatch = passwordPattern.test(this.value);

    if (this.value === '') e.target.className = 'empty';
    else if (patternMatch) e.target.className = 'valid-password';
    else if (!patternMatch) e.target.className = 'invalid-password';

}

passwordInput.addEventListener('focusout', checkPassword);