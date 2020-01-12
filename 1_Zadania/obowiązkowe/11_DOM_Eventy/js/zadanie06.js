document.addEventListener('DOMContentLoaded', function(){
    let div = document.querySelector('div');
    div.addEventListener('mousemove', function (event) {
        let globalX = document.querySelector('#globalX');
        let globalY = document.querySelector('#globalY');
        let localX = document.querySelector('#localX');
        let localY = document.querySelector('#localY');
        globalX.innerHTML = event.clientX;
        globalY.innerHTML = event.clientY;
        localX.innerHTML = event.offsetX;
        localY.innerHTML = event.offsetY;
    })
})