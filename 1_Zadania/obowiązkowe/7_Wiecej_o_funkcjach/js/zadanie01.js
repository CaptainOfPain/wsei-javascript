
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Twoj komentarz ...
function sortArray() {

    //deklaracja zmiennej points (tablica number)
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywołanie metody sort na obiekcie typu array.
    points.sort(function (a, b) {
        //jest to funkcja anonimowa, która ustala w jaki sposó mają się sortować elementy tablicy,
        // w tym przypadku rosnąco 
        return a - b;
    });

    //Zwraca posortowaną tablicę
    return points;
}

//Wywolanie metody sortArray();
sortArray();
