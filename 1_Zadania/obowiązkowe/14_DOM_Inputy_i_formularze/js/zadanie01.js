document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#invoiceData').style.display = 'none';
    var invoice = document.querySelector('#invoice');
    invoice.addEventListener('change', function () {
        if(this.checked) {
            document.querySelector('#invoiceData').style.display = 'block';
        }
        else {
            document.querySelector('#invoiceData').style.display = 'none';
        }
    })
});