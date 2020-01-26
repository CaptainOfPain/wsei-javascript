document.addEventListener('DOMContentLoaded', function (){
    let btn = document.querySelector(".button");
    btn.addEventListener('click', function() {
        let ul = document.querySelector('.menu');
        ul.innerHTML += `<li>${ul.querySelectorAll('li').length}</li>`;
    })
    
})