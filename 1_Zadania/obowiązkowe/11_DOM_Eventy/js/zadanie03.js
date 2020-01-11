document.addEventListener('DOMContentLoaded', function(){
    var buttons = document.querySelectorAll('button');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var pElements = document.querySelectorAll('p');
            for(let j = 0; j < pElements.length; j++) {
                if(pElements[j].innerHTML.indexOf(buttons[i].id.substr(buttons[i].id.indexOf('button')+'button'.length)) >= 0) {
                    var span = pElements[j].querySelector('span.counter');
                    var number = span.innerHTML;
                    span.innerHTML = parseInt(number, 10) + 1;
                }
            }
        })
    }
})