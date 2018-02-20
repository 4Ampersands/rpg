'use strict'

//get item score 

// assign that to a form that they can fill out g
let leaderboardArray = [];
if (localStorage.getItem('leaderboard')) {
    leaderboardArray = JSON.parse(localStorage.getItem('leaderboard'));
}

const playerInfo = JSON.parse(localStorage.getItem('score'));
console.log(playerInfo)
leaderboardArray.push(playerInfo);
console.log(leaderboardArray);
localStorage.setItem('leaderboard', JSON.stringify(leaderboardArray))

function buildTable () {
    for (let i = 0; i < leaderboardArray.length; i++) {
    const tableBody = document.getElementById('leaderboardTable');
    const tr = document.createElement('tr');
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


}

buildTable();