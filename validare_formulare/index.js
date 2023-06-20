const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const passCheck = document.getElementById('passCheck');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    // Luam valorile de la input uri
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const passCheckValue = passCheck.value.trim();

    if(usernameValue === ''){
        // Aratam erori
        setErrorFor(username, 'Username cannot be blank');
    }else{
        // Aratam succes
        setSuccesFor(username);
    }

    if(emailValue === ''){
        // Aratam erori
        setErrorFor(email, 'Email cannot be blank');
    }else{
        // Aratam succes
        setSuccesFor(email);
    }

    if(passValue === ''){
        // Aratam erori
        setErrorFor(pass, 'Password cannot be blank');
    }else{
        // Aratam succes
        setSuccesFor(pass);
    }

    if(passCheckValue === ''){
        // Aratam erori
        setErrorFor(passCheck, 'Password cannot be blank');
    }else if(passValue !== passCheckValue){
        setErrorFor(passCheck, 'Passwords need to be the same');
    }
    else{
        // Aratam succes
        setSuccesFor(passCheck);
    }
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // Punem textul in small
    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';
}

