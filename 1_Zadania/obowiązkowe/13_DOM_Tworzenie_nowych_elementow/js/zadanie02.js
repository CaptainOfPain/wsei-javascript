document.addEventListener('DOMContentLoaded', function (){
    let btn = document.querySelector(".button");
    btn.addEventListener('click', function() {
        let table = document.querySelector('#orders');
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML += document.querySelector('#orderId').value;
        cell2.innerHTML += document.querySelector('#item').value;
        cell3.innerHTML += document.querySelector('#quantity').value;
    })
    
})