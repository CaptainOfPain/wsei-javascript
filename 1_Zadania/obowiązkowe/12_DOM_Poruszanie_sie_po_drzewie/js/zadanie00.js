window.addEventListener('DOMContentLoaded', function () {
    let first = document.querySelector('.first').firstElementChild.children[2];
    console.log(first);
    let second = document.querySelector('#second').parentElement.children[3];
    console.log(second);
    let third = null;
    let main = document.body.getElementsByTagName("*");
    for(let i = 0; i < main.length; i++) {
        if(main[i].getAttribute("data-ex") === 'third') {
            third = main[i].parentElement.parentElement.lastElementChild.
                firstElementChild.children[Math.round(main[i].parentElement.parentElement.lastElementChild.
                firstElementChild.childElementCount / 2)];
        }
    }
    console.log(third);

    let fourth  = document.querySelector('.forth').parentElement.querySelector('article');

    console.log(fourth);
})