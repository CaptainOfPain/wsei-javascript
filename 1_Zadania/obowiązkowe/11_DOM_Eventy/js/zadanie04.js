document.addEventListener('DOMContentLoaded', function(){
    var buttons = document.querySelectorAll('button');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
                    var span = document.querySelector('span.counter');
                    var number = span.innerHTML;
                    span.innerHTML = parseInt(number, 10) + 1;
                }
        )
    }
}
)