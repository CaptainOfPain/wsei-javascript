SayHi();

function SayHi() {
    console.log('Cześć');
}

SayHi();

sayHello();
var sayHello = () => console.log('Witaj');
sayHello();


//SayHi() zostaje wywowływana w obojętnie którym miejscu, ponieważ jest ona dostępna od początku 
//"życia scope'u", natomiast funkcja przypisana do zmiennej nie dziala już w każdym miejscu, ponieważ
//jak to zmienna, możemy jej użyć dopiero po jej zadefiniowaniu.