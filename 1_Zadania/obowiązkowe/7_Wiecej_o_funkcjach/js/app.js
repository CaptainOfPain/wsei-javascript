/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//deklaracja funkcji
function jeden() {

    //deklaracja zmiennej zmienna1, z wartością 1
    var zmienna1 = 1;

    //deklaracja zagnieżdżonej funkcji dwa(), która jest dostępna tylko z funkcji jeden()
    function dwa() {

        //Wypisanie w konsoli wartości zmienna1
        console.log(zmienna1);

        //deklaracja zmienna 2
        var zmienna2 = 3;
    }

    //wywołanie metody dwa()
    dwa();

    //Dostaniemy tutaj błąd, ponieważ zmienna2 znajduje się w innym scope'ie i nasza funckja nie ma do niej dostępu
    console.log(zmienna2)
}

//Wywołanie funkcji jeden()
jeden()