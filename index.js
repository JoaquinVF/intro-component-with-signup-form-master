const btn = document.querySelector('#btn');
const errorText = document.getElementsByName('error');
const errorIcon = document.getElementsByName('icon-error');
const firstNerror = document.getElementById('firstNerror');
const firstName = document.getElementById("firstn");
const lastName = document.getElementById('lastn');
const email = document.getElementById('email');
const password = document.getElementById('password');

function ValidateEmail(form, x) {
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (form.value.match(mailformat)) {
    errorText[x].style.display = 'none';
    errorIcon[x].style.display = 'none';
    form.style.border = '1px solid rgba(0, 0, 0, 0.116)';
}
else {
    errorText[x].style.display = 'block';
    errorIcon[x].style.display = 'block';
    form.style.border = '1px solid hsl(0, 100%, 74%)';
}
}

function showError(formvalue, form, x){
    if (formvalue === '') {
        errorText[x].style.display = 'block';
        errorIcon[x].style.display = 'block';
        form.style.border = '1px solid hsl(0, 100%, 74%)';
    } else {
        errorText[x].style.display = 'none';
        errorIcon[x].style.display = 'none';
        form.style.border = '1px solid rgba(0, 0, 0, 0.116)';
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault()

    checkInputs();
});

function checkInputs(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    showError(firstNameValue, firstName, 0);
    showError(lastNameValue, lastName, 1)
    ValidateEmail(email, 2)
    showError(passwordValue, password, 3)
}

