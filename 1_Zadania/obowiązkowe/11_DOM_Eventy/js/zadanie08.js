window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#windowWidth').innerHTML = window.innerWidth;
    document.querySelector('#windowHeight').innerHTML = window.innerHeight;
    window.addEventListener('resize', function(e) {
        document.querySelector('#windowWidth').innerHTML = window.innerWidth;
        document.querySelector('#windowHeight').innerHTML = window.innerHeight;
    })
})