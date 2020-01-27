document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.button');
    for(let button of buttons) {
        button.addEventListener('click', function() {
            let element = this.nextSibling.nextSibling;
            if (element === null) {
                return;
            }
            if(element.style.display === 'none') {
                element.style.display = 'block';
            }
            else {
                element.style.display = 'none';
            }
        })
    }
})