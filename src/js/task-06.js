const valInp = document.querySelector('#validation-input');

valInp.addEventListener('blur', () => {
    if(valInp.value.length === Number(valInp.dataset.length)){
        valInp.classList.add('valid');
        valInp.classList.remove('invalid');
    } else {
        valInp.classList.add('invalid');
        valInp.classList.remove('valid');
    }
    
    console.log(valInp.value.length);
    console.log(valInp.dataset.length);
})

