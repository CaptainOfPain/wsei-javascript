document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.button');
    for(let button of buttons) {
        button.addEventListener('click', function() {
            let element = this.parentElement;
            if (element === null) {
                return;
            }
            element.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        })
    }
})