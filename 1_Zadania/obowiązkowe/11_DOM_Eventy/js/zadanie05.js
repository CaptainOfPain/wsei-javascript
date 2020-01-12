document.addEventListener('DOMContentLoaded', function(){
    let divs = document.querySelectorAll('div');
    for(let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', function() {
            this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        })
    }
})