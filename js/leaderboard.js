'use strict'

//get item score 

// assign that to a form that they can fill out gg


 let leaderboardArray = [];

const playerInfo = JSON.parse(localStorage.getItem('score'));
console.log(playerInfo)
leaderboardArray.push(playerInfo);
console.log(leaderboardArray);

function buildTable () {
    const tableBody = document.getElementById('leaderboardTable');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = playerInfo[0];
    const td2= document.createElement('td');
    td2.textContent = playerInfo[1];
    const td3 = document.createElement('td');
    td3.textContent = playerInfo[2];
    const td4 = document.createElement('td');
    td4.textContent = playerInfo[3];

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tableBody.appendChild(tr);


}

buildTable();