var parents = document.querySelectorAll('.parent');
for(let i = 0; i < parents.length; i++) {
    parents[i].addEventListener('mouseover', function() {
        var children = parents[i].querySelectorAll('.children');
        for(let j = 0; j < children.length; j++) {
            children[j].style.display = 'block';
        }
    })
    parents[i].addEventListener('mouseout', function() {
        var children = parents[i].querySelectorAll('.children');
        for(let j = 0; j < children.length; j++) {
            children[j].style.display = 'none';
        }
    })
}
