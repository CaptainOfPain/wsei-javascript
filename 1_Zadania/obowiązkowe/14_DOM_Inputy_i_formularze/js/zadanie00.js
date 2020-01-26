document.addEventListener('DOMContentLoaded', function (){
    let email = document.querySelector("#email");
    email.addEventListener('change', function() {
        if(!this.value.includes('@')){
            document.querySelector('.error-message').innerHTML = 'Email musi posiadać znak @';
        }
        else {
            document.querySelector('.error-message').innerHTML = '';
        }
    })
    let name = document.querySelector("#name");
    name.addEventListener('change', function() {
        if(this.value.length < 6){
            document.querySelector('.error-message').innerHTML = 'Twoje imie jest za krótkie';
        }
        else {
            document.querySelector('.error-message').innerHTML = '';
        }
    })
    let surname = document.querySelector("#surname");
    surname.addEventListener('change', function() {
        if(this.value.length < 6){
            document.querySelector('.error-message').innerHTML = 'Twoje nazwisko jest za krótkie';
        }
        else {
            document.querySelector('.error-message').innerHTML = '';
        }
    })
    let password2 = document.querySelector("#pass2");
    password2.addEventListener('change', function() {
        if(this.value !== document.querySelector('#pass1').value || this.value === ''){
            document.querySelector('.error-message').innerHTML = 'Hasła nie są takie same lub puste,';
        }
        else {
            document.querySelector('.error-message').innerHTML = '';
        }
    })
    let password1 = document.querySelector("#pass1");
    password1.addEventListener('change', function() {
        if(this.value !== document.querySelector('#pass2').value || this.value === ''){
            document.querySelector('.error-message').innerHTML = 'Hasła nie są takie same lub puste,';
        }
        else {
            document.querySelector('.error-message').innerHTML = '';
        }
    })
    let aggree = document.querySelector("#agree");
    aggree.addEventListener('change', function() {
        if(!this.checked){
            document.querySelector('.error-message').innerHTML = 'Musisz zaakceptować warunki.';
        }
        else {
            document.querySelector('.error-message').innerHTML = '';
        }
    })
    
})