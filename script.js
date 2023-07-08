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

const checkConfirmPassword = function (e) {

    if (!passwordInput.className || passwordInput.className === 'empty') {
        e.target.className = ('no-password');
        labelForConfirmPasswordInput.className = 'no-password';
        spanConfirmPasswordInput.className = 'no-password';
    }
    else if (passwordInput.className === 'invalid-password') {
        e.target.className = ('wrong-password');
        labelForConfirmPasswordInput.className = 'wrong-password';
        spanConfirmPasswordInput.className = 'wrong-password';
    }
    else if (passwordInput.className === 'valid-password' && this.value !== passwordInput.value) {
        e.target.className = 'not-match';
        labelForConfirmPasswordInput.className = 'not-match';
        spanConfirmPasswordInput.className = 'not-match';
    }
    else if (passwordInput.className === 'valid-password' && this.value === passwordInput.value) {
        e.target.className = 'match';
        labelForConfirmPasswordInput.className = 'match';
        spanConfirmPasswordInput.className = '';

    }
}

passwordInput.addEventListener('focusout', checkPassword);
confirmPasswordInput.addEventListener('focusout', checkConfirmPassword);





const infoSymbol = document.querySelector('.info-symbol');

const showTooltip = function () {
    const tooltip = document.querySelector('.tooltip');
    tooltip.classList.add('tooltip-visible');
}
const hideTooltip = function () {
    const tooltip = document.querySelector('.tooltip');
    tooltip.classList.remove('tooltip-visible');
}

infoSymbol.addEventListener('mouseenter', showTooltip);
infoSymbol.addEventListener('mouseleave', hideTooltip);