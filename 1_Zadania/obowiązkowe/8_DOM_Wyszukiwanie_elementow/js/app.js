document.addEventListener("DOMContentLoaded", function () {
    //zadanie 0
    var titleElement = document.getElementsByClassName('title')[0];
    var dataAnimation = getDataAnimation(titleElement);
    console.log(dataAnimation);

    //zadanie 1
    //1
    let firstId = document.getElementById('home');
    let secondId = home;

    console.log(firstId, secondId);

    //2
    let elementsLi = document.getElementsByTagName('li');
    let elementArray = Array.prototype.slice.call(elementsLi, 0);
    let liElement = elementArray.filter(x => x.getAttribute('data-direction'))[0];
    console.log(liElement);
    //3
    let blockElement = document.getElementsByClassName('block')[0];
    console.log(blockElement);


    //zadanie 2
    //1
    let navs = document.getElementsByTagName('nav');
    navs = Array.prototype.slice.call(navs, 0);
    let liElements = [];
    navs.forEach(x => {
        liElements.push(x.querySelector('li'));
    })
    console.log(liElements.length, 'li');
    //2
    let divs = document.getElementsByTagName('div');
    let paragraphs = [];
    for(let i = 0; i < divs.length; i++) {
        let x = divs[i].querySelector('p');
        paragraphs.push(x);
    }
    console.log(paragraphs.length, 'p');
    //3
    let articles = document.getElementsByTagName('article');
    articles = Array.prototype.slice.call(articles, 0);
    let divElements = [];
    articles.forEach(x => {
        divElements.push(x.querySelector('li'));
    })
    console.log(divElements.length, 'divs');
    //zadanie3
    let articleElements = document.getElementsByTagName('article');
    articleElements = Array.prototype.slice.call(articleElements, 0);
    let firstElement = articleElements.filter(x => x.className === 'first')[0];
    console.log(firstElement.querySelector('h1') == null ? 0 : firstElement.querySelector('h1').length, 'h1');
});

function getDataAnimation(element) {
    var dataAnimation = element.getAttribute('data-animation');
    return dataAnimation;
}
