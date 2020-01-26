document.addEventListener('DOMContentLoaded', function (){
    let btnDeleteList = document.querySelectorAll(".deleteBtn");
    for(let btn of btnDeleteList) {
        btn.addEventListener('click', function (){
            const trSelector = this.parentElement.parentElement;
            trSelector.remove();
        })
    }
})