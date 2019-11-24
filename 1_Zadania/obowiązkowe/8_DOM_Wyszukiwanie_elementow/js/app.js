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
    
    //zadanie 2
    let divs = document.getElementsByTagName('div');
    let paragraphs = [];
    for(let i = 0; i < divs.length; i++) {
        let x = divs[i].querySelector('p').filter(x => x != null);
        paragraphs.push(x);
        // for(let j = 0; j < divs[i].childNodes.length; j++) {
        //     if(divs[i].childNodes[j].tagName === 'P') {
        //         paragraphs.push(divs[i].childNodes[j]);
        //     }
        // }
    }

    console.log(paragraphs);
});

function getDataAnimation(element) {
    var dataAnimation = element.getAttribute('data-animation');
    return dataAnimation;
}
