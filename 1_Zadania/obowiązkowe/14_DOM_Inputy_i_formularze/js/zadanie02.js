document.addEventListener('DOMContentLoaded', function (){
    let imgs = document.querySelectorAll('img');
    let windows;
    let ubuntu;
    let apple;
    for(let img of imgs) {
        img.style.display = 'none';
        if(img.alt === 'Windows') windows = img;
        else if(img.alt === 'Apple') apple = img;
        else if(img.alt === 'Ubuntu') ubuntu = img;
    }

    document.querySelector('select').addEventListener('change', function () {
        switch (this.value){
            case 'Windows': windows.style.display = 'block'; ubuntu.style.display = 'none'; apple.style.display = 'none'; break;
            case 'Os X': windows.style.display = 'none'; ubuntu.style.display = 'none'; apple.style.display = 'block'; break;
            case 'Ubuntu': windows.style.display = 'none'; ubuntu.style.display = 'block'; apple.style.display = 'none'; break;
        }
    })
});