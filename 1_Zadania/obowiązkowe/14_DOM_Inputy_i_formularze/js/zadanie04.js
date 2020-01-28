let type = '';
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#name').addEventListener('keyup', function () {
        if(this.value.startsWith('4')) {
            type = 'Visa';
        }
        else if(this.value.startsWith('5')) {
            type = 'Mastercard';
        }
        else if(this.value.startsWith('3') && 
            (this.value[1] === '4' || this.value[1] === '7')){
            type = 'American Express';
        }
        else {
            type = '';
        }
        document.querySelector('#type').innerHTML = type;
        if(this.value.length >=13 && this.value.length < 16 && type === 'Visa') {
            this.style.borderColor = 'green';
        }
        else if(this.value.length === 16 && type === 'Mastercard') {
            this.style.borderColor = 'green';
        }
        else if(this.value.length === 15 && type === 'American Express') {
            this.style.borderColor = 'green';
        }
        else {
            this.style.borderColor = 'black';
        }
    })
})