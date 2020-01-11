document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //zad 0
    console.log(getDatasInfo(links));
    //zad 1
    console.log(homeElement);
    console.log(childElements);
    for(let child of childElements){
        console.log(child);
    }
    console.log(banner);
    console.log(blocks);
    for(let block of blocks){
        console.log(block);
    }
    console.log(links);
    for(let link of links){
        console.log(link);
    }
    //zad 2
    for(let block of blocks){
        console.log(block.innerHTML);
        console.log(block.outerHTML);

        block.innerHTML = 'Nowa wartość diva o klasie blocks';
        //innerHTML zwraca środek naszego elementu, a outer zwraca całość, razem z naszym elementem.
    }
    //zad 3 
    let element = document.getElementById('mainFooter');
    console.log(getId(element));
    //zad 4
    console.log(getTags(childElements));
    //zad 5
    console.log(getClassInfo(banner));
    //zad 6
    setDataDirection(document.querySelector('nav').querySelectorAll('li'));

});

function getDatasInfo(elements) {
    let datas = [];
    for(let i = 0; i < elements.length; i++) {
        let data = elements[i].getAttribute('data-color');
        datas.push(data);
    }

    return datas;
}

function getId(element){
    return element.getAttribute('id');
}

function getTags(elements) {
    var tags = [];
    for(var i = 0; i < elements.length; i++) {
        tags.push(elements[i].tagName);
    }

    return tags;
}
function getClassInfo(element) {
    var classes = [];
    classes.push(element.classList);
    for(var i = 0; i < element.childNodes.length; i++) {
        classes.push(element.childNodes[i].classList);
    }

    return classes;
}

function setDataDirection(elements) {
    for(var i = 0; i < elements.length; i++) {
        elements[i].dataset.direction = 'top';
    }
}
