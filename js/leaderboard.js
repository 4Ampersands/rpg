'use strict'

//get item score 

// assign that to a form that they can fill out gg

function getStorage() {
    if (localStorage.getItem('score')) {
        const playerInfo = JSON.parse(localStorage.getItem('score'));
        console.log(playerInfo);
        
    }
}