document.addEventListener('DOMContentLoaded', function () {
    var lists = document.querySelectorAll('.listContainer');
    for(let list of lists) {
        list.addEventListener('mouseover', function() {
            let element = this.querySelector('ul');
            if (element === null) {
                return;
            }
            for(let child of element.children) {
                child.style.backgroundColor = 'green';
            }

            element.lastElementChild.style.backgroundColor = 'blue';
            element.firstElementChild.style.backgroundColor = 'red';
        })
    }
})