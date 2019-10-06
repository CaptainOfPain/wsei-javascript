function countHello(count) {
    if (count <= 0 || count > 10) {
        console.error('You should provide number from 1-10 range');
        return;
    }
    let number = 0;
    let intervalId = setInterval(() => {
        number++;
        console.log('hello', number);
        if(count <= 1) {
            clearInterval(intervalId);
        }
        count--;
    }, 500);
}