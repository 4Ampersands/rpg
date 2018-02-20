'use strict';

let monstersDefeated = 0;

// ITEMS
function Item (name) {
    this.name = name;

    this.equipped = false;
    this.used = false;
};

// CHARACTERS
// ONCE LOCAL STORAGE IS UP, ONLY MAKE ONE CHARACTER BASED ON LOCAL STORAGE
const brute = new Character (
    'Brute',
    'images/brute.png',
    2,
    2,
    [new Item ('Heavy Armor'), new Item ('Second Weapon')],
    charAbilities.healing,
    'Brute loves to fight. He doesn\'t really care why. He\'ll fight anyone, any time. It\'s just how brute rolls.'
);

const rogue = new Character (
    'Rogue',
    'images/rogue.png',
    3,
    1,
    [new Item ('Smoke Bomb'), new Item ('Backpack')],
    charAbilities.dodge,
    'Brute loves to fight. He doesn\'t really care why. He\'ll fight anyone, any time. It\'s just how brute rolls.'
);

const wizard = new Character (
    'Wizard',
    'images/wizard.png',
    1,
    0,
    [new Item ('Healing Potion'), new Item ('Mind Control Scoll')],
    charAbilities.chaosMagic,
    'Brute loves to fight. He doesn\'t really care why. He\'ll fight anyone, any time. It\'s just how brute rolls.'
);

// PLACEHOLDER UNTIL LOCAL STORAGE IS UP
let character = brute;

const elements = {
    mainDungeon: document.getElementById('main-dungeon'),
    characterDiv: document.getElementById('character-div'),
    characterImg: document.getElementById('character-img'),
    characterHP: document.getElementById('character-hp'),
    characterGold: document.getElementById('character-gold'),

    monsterDiv: document.getElementById('monster-div'),
    monsterImg: document.getElementById('monster-img'),

    dungeonChoice: document.getElementById('dungeon-choice'),
    fight: document.getElementById('fight'),
    flee: document.getElementById('flee'),
    item: document.getElementById('item')
}

let monster = {};

const createMonster = function () {    
    let random;
    if (monstersDefeated < 4) {
        random = randomNumber(1, 2);
    } else if (monstersDefeated >= 4) {
        random = randomNumber(1, 3);
    }

    if (random === 1 ) {
        monster = new SmallMonster;
    } else if (random === 2) {
        monster = new MediumMonster;
    } else if (random === 3) {
        monster = new LargeMonster;
    }
};

// LOAD LOCAL STORAGE DATA

// STILL NEEDS TO UTILIZE LOCALSTORAGE DATA
const renderGraphics = function () {
    elements.characterImg.setAttribute('src', character.portrait);
    elements.characterHP.textContent = 'HP: ' + character.hp;
    elements.characterGold.textContent = 'Gold: ' + character.gold;

    elements.monsterImg.setAttribute('src', monster.portrait);
    elements.item.textContent = (character.inventory[0].name);
}

// add event listeners
elements.fight.addEventListener('click', function() {
    while (character.hp > 0 && monster.hp > 0) {
        const damage = monster.attack - character.defense;
        if (damage > 0) {
            character.hp -= damage;
            elements.characterHP.textContent = 'HP: ' + character.hp;
        }
        if (character.hp <= 0 ) {
            // PLAYER DIES ANIMATION
            setTimeout(function() {
                window.location.replace('bar.html')
            }, 1000);
            continue;
        }
        monster.hp -= character.attack;
        console.log('Monster: ' + monster.hp);

        if (monster.hp <=0) {
            // MONSTER DIES ANIMATION
            character.gold += monster.gold;
            console.log('Gold: ' + character.gold);
        }
    }
    setTimeout(function() {
        reset()}, 1000);
});

elements.flee.addEventListener('click', function() {
// CHARACTER TURNS AND RUNS, SCREEN TO BLACK ANIMATION

    setTimeout(function() {
        window.location.replace('leaderboard.html')
    }, 1000);
});

elements.item.addEventListener('click', function() {
});

const reset = function() {
    createMonster();
    renderGraphics();
}

createMonster();
renderGraphics();