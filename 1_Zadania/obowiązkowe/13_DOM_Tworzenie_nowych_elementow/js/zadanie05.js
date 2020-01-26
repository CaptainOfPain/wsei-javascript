document.addEventListener('DOMContentLoaded', function (){
    let btns = document.querySelectorAll(".moveBtn");
    for(let btn of btns){
        btn.addEventListener('click', function() {
            var liElement = this.parentElement;
            var ulElement = liElement.parentElement;
            ulElement.removeChild(liElement);
            if(ulElement.id === 'list1') {
                document.querySelector('#list2').appendChild(liElement);
            }
            else {
                
                document.querySelector('#list1').appendChild(liElement);
            }
        })
    }
})