'use strict'

let leaderboardArray = [];
let spliced = false;

const playerInfo = JSON.parse(localStorage.getItem('score'));

if (localStorage.getItem('leaderboard')) {
    leaderboardArray = JSON.parse(localStorage.getItem('leaderboard'));

    if (localStorage.getItem('score')) {
        let arrayLength = leaderboardArray.length;

        for (let i = 0; i < arrayLength; i++) {
            if (playerInfo[3] > leaderboardArray[i][3]) {
                leaderboardArray.splice(i, 0, playerInfo);
                spliced = true;
                break;
            }
        }
    }
}

/*
    Okay, so after some debugging - this is where I ended up.
    I'm gonna move on and not test it extensively, but it seems to work.

    Changes included:
        - not checking if playerInfo was a string, because it was an object (array).
        - setting leaderboardArray as an [] from the get go, so if we don't get it, we can still push into it.
*/

if (!spliced && playerInfo) leaderboardArray.push(playerInfo);

/*
   typeof typically is used without ()
*/
if (typeof leaderboardArray === 'object') {
    localStorage.setItem('leaderboard', JSON.stringify(leaderboardArray));
}

if (leaderboardArray) {

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
}
