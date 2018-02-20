"use strict"
const randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// CHARACTER CONSTRUCTOR
// name should be their name.
// portrait should be a path to a character portrait as a string
// inventory should be a Item
// attack and defense should be integers
// ability should be a method of the Character.prototype object
// bio should be a short bio of the character as a string

function Character (name, portrait, attack, defense, inventory, bio) {
    this.name = name;
    this.portrait = portrait;
    this.inventory = inventory;
    this.attack = attack;
    this.defense = defense;

    this.bio = bio;

    this.gold = 0;
    this.hp = 10;
    this.isActive = false;
};

Character.prototype.attack = function() {
    // initiate direct combat with enemy
};

Character.prototype.useItem = function () {
    // use inventory item
}

Character.prototype.run = function () {
    // end the game and apply sore to high score table
}

// ITEMS
function Item (name) {
    this.name = name;
    this.used = false;
    this.equipped = false;
};

// MONSTERS
function SmallMonster () {
    this.portrait = 'images/smallmonster.png';
    this.hp = 1;
    this.gold = randomNumber(1,4);
    this.attack = 2;
};

function MediumMonster () {
    this.portrait = 'images/mediummonster.jpg'
    this.hp = 2;
    this.gold = randomNumber(5,8);
    this.attack = randomNumber(3,4);
};

function LargeMonster () {
    this.hp = 3;
    this.portrait = 'images/largemonster.jpg'
    this.gold = randomNumber(8,12);
    this.attack = randomNumber(4,5);
};

const brute = new Character (
    'Brute',
    'images/brute.png',
    2,
    2,
    [new Item ('Heavy Armor'), new Item ('Second Weapon')],
    'Brute loves to fight. He doesn\'t really care why. He\'ll fight anyone, any time. It\'s just how brute rolls.'
);

const rogue = new Character (
    'Rogue',
    'images/rogue.png',
    3,
    1,
    [new Item ('Smoke Bomb'), new Item ('Backpack')],
    'Rogue\'s parents may have been asking for trouble when they named their child "Rogue." They did their best to give her a good uppbringing. And it worked, in ways: in theory, rogue is a pascifist. But more than that, she loves gold. If she can steal it without being seen, great. If not... Hey, it\'s not her fault that acquiring gold so often requires fighting the death.'
);

const wizard = new Character (
    'Wizard',
    'images/wizard.png',
    1,
    0,
    [new Item ('Healing Potion'), new Item ('Mind Control Scoll')],
    'Brute loves to fight. He doesn\'t really care why. He\'ll fight anyone, any time. It\'s just how brute rolls.'
);
