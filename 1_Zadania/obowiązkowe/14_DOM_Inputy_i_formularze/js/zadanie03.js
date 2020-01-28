document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', function () {
        let team1 = document.querySelector('#team1');
        let points1 = document.querySelector('#points1');
        let team2 = document.querySelector('#team2');
        let points2 = document.querySelector('#points2');

        if(team1.value !== team2.value && points1.value >= 0 && points2.value >= 0){
            let table = document.querySelector('table');
            let row = table.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.innerHTML = team1.value;
            cell2.innerHTML = team2.value;
            cell3.innerHTML = `${points1.value} - ${points2.value}`;
        }
    })
})