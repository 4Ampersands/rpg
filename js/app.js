"use strict"
const randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// CHARACTER CONSTRUCTOR
// name should be their name.
// portrait should be a path to a character portrait as a string
// inventory should be an array containing an inventory Item
// attack and defense should be integers
// ability should be a method of the Character.prototype object
// bio should be a short bio of the character as a string

function Character (name, portrait, attack, defense, inventory, ability, bio) {
    this.name = name;
    this.portrait = portrait;
    this.inventory = inventory;
    this.attack = attack;
    this.defense = defense;
    this.ability = ability;

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

const charAbilities = {
    healing: function() {
        // heals 1-3 hp before every fight
    },

    dodge: function() {
        // 50% chance to take 0 damage
    },

    chaosMagic: function() {
        // randomly adds 0-10 to attack and defense
    }
};

// ITEMS
function Item (name) {
    this.name = name;

    this.equipped = false;
    this.used = false;
};

// MONSTERS
function SmallMonster () {
    this.portrait = 'images/smallmonster.png';
    this.hp = 1;
    this.attack = randomNumber(1,2);
};

function MediumMonster () {
    this.portrait = 'images/mediummonster.jpg'
    this.hp = 2;
    this.attack = randomNumber(2,3);
};

function LargeMonster () {
    this.hp = 3;
    this.portrait = 'images/largemonster.jpg'
    this.attack = randomNumber(3,4);
};

const brute = new Character (
    'Brute',
    'images/brute.png',
    5,
    5,
    [new Item ('Heavy Armor'), new Item ('Second Weapon')],
    charAbilities.healing,
    'Brute loves to fight. He doesn\'t really care why. He\'ll fight anyone, any time. It\'s just how brute rolls.'
);

const rogue = new Character (
    'Rogue',
    'images/rogue.png',
    3,
    3,
    [new Item ('Smoke Bomb'), new Item ('Backpack')],
    charAbilities.dodge,
    'Brute loves to fight. He doesn\'t really care why. He\'ll fight anyone, any time. It\'s just how brute rolls.'
);

const wizard = new Character (
    'Wizard',
    'images/wizard.png',
    1,
    1,
    [new Item ('Healing Potion'), new Item ('Mind Control Scoll')],
    charAbilities.chaosMagic,
    'Brute loves to fight. He doesn\'t really care why. He\'ll fight anyone, any time. It\'s just how brute rolls.'
);
