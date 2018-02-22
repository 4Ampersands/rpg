'use strict'

let leaderboardArray = [];
let arrayLength = leaderboardArray.length;
let spliced = false; 
const playerInfo = JSON.parse(localStorage.getItem('score'));

if (localStorage.getItem('leaderboard')) {
    leaderboardArray = JSON.parse(localStorage.getItem('leaderboard'));

    if (localStorage.getItem('score')) {
        arrayLength = leaderboardArray.length;
        for (let i = 0; i < arrayLength; i++) {
            if (playerInfo[3] > leaderboardArray[i][3]) {
                leaderboardArray.splice(i, 0, playerInfo);
                spliced = true;
                break;
            } 
        }
     
        if (spliced === false) {
            leaderboardArray.push(playerInfo);
        }
    }   
}


localStorage.setItem('leaderboard', JSON.stringify(leaderboardArray))

function buildTable () {
    for (let i = 0; i < leaderboardArray.length; i++) {
    const tableBody = document.getElementById('leaderboardTable');
    const tr = document.createElement('tr');
    tr.className = 'tableRow';
    const td1 = document.createElement('td');
    td1.textContent = leaderboardArray[i][0];
    const td2= document.createElement('td');
    td2.textContent = leaderboardArray[i][1];
    const td3 = document.createElement('td');
    td3.textContent = leaderboardArray[i][2];
    const td4 = document.createElement('td');
    td4.textContent = leaderboardArray[i][3];

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tableBody.appendChild(tr);

    }

    localStorage.removeItem('score');
}

buildTable();
