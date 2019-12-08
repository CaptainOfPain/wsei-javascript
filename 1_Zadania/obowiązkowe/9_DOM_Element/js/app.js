document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    getDatasInfo(links);

});

function getDatasInfo(elements) {
    let datas = [];
    for(let element of elements) {
        let data = element.getAttribute('data');
        console.log(data);
    }
}
