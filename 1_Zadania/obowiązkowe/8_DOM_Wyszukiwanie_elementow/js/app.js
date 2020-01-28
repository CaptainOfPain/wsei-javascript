document.addEventListener("DOMContentLoaded", function () {
    //zadanie 0
    var titleElement = document.getElementsByClassName('title')[0];
    var dataAnimation = getDataAnimation(titleElement);
    console.log(dataAnimation);

    //zadanie 1
    //1
    let firstId = document.getElementById('home');
    let secondId = document.querySelector('#home');

    console.log(firstId, secondId);

    //2
    let liElement = document.querySelector('li[data-direction]');
    console.log(liElement);
    //3
    let blockElement = document.querySelector('.block');
    console.log(blockElement);


    //zadanie 2
    //1
    let liElements = document.querySelectorAll('nav li');
    console.log(liElements.length, 'li');
    //2
    let divsP = document.querySelectorAll('div p');
    console.log(divsP.length, 'p');
    //3
    let divElements = document.querySelectorAll('article div');
    console.log(divElements.length, 'divs');
    //zadanie3
    let firstElement = document.querySelector('article.first');
    console.log(firstElement.querySelector('h1') == null ? 0 : firstElement.querySelector('h1').length, 'h1');
});

function getDataAnimation(element) {
    var dataAnimation = element.getAttribute('data-animation');
    return dataAnimation;
}
