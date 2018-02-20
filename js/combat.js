'use strict';

// placeholder characters before localStorage is set up
let character = brute;

const elements = {
    mainDungeon: document.getElementById('main-dungeon'),
    characterDiv: document.getElementById('character-div'),
    characterImg: document.getElementById('character-img'),
    monsterDiv: document.getElementById('monster-div'),
    monsterImg: document.getElementById('monster-img'),

    dungeonChoice: document.getElementById('dungeon-choice'),
    fight: document.getElementById('fight'),
    flee: document.getElementById('flee'),
    item: document.getElementById('item')
}

// create monster
let monster = {};

const createMonster = function () {
    const random = randomNumber(1, 3);
    if (random === 1 ) {
        monster = new SmallMonster;
    } else if (random === 2) {
        monster = new MediumMonster;
    } else if (random === 3) {
        monster = new LargeMonster;
    }
};

// load localStorage data

// load all visual elements
const renderGraphics = function () {
    elements.characterImg.setAttribute('src', character.portrait);
    elements.monsterImg.setAttribute('src', monster.portrait);
    // elements.item.textContent(character.item);
}

// add event listeners
elements.fight.addEventListener('click', function() {


});

elements.flee.addEventListener('click', function() {
// character turns and runs
// screen fades to black

    setTimeout(function() {
        window.location.replace('bar.html')
    }, 1000);
});

elements.item.addEventListener('click', function() {

});

createMonster();
renderGraphics();