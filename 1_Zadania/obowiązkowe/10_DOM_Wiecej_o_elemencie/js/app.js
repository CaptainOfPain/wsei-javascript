document.addEventListener("DOMContentLoaded", function () {
    //zadanie 0
    var elements = document.querySelectorAll('.ex5 ul li');
    for(let index = 0; index < elements.length; index ++) {
        if(index % 2 == 0) {
            elements[index].style.backgroundColor = 'green';
        }
        if(index % 3 == 0) {
            elements[index].style.textDecoration = "underline overline";
        }
    }
    elements[4].classList.add("big");
    //zadanie 2
    document.getElementById('name').innerHTML = "Jakub Święch";
    //zadanie 3
    var ul = document.querySelector('.ex3 ul');
    ul.classList.add('menu');
    var lis = ul.querySelectorAll('li');
    for(let i = 0; i < lis.length; i++) {
        lis[i].classList.remove('error');
        lis[i].classList.add('menuElement');
    }
    //zadanie 4
    let list = document.querySelectorAll(".ex4 ul li");
    for(let index = 0; index < list.length; index++) {
        list[index].dataset.id = index+1;
    }
});