
//zad 1.Po przeniesieniu <script> do sekcji head, skrypt 
//nie działa, bo skrypt próbuje wykonać się przed
//załadowaniem kontentu

//zad 2.
document.addEventListener('DOMContentLoaded', function(){
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";


})
//po dodaniu eventa skrypt wykonuje się poprawnie, 
//ponieważ dodaliśmy event, który wykonuje skrypt
//po załadowaniu strony

//zad 3.
//po przeniesieniu sekcji <script> w stare miejsce
//nadal działa, dzięki dodaniu eventu.