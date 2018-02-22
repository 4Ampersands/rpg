"use strict"
const randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
    'Zanshin',
    'images/brute.png',
    2,
    2,
    [new Item ('Heavy Armor'), new Item ('Second Weapon')],
    'Zanshin hails from the distant jungle kingdom of Nyissa. Born into captivity and forced to fight in gladiatorial matches his entire life, this.troll is a versatile and proficient fighter. Despite a birth defect making his knee prone to injury (dislocated 25 times!), his combat skill - which balances both offense and defense- and his natural regenerative powers make him a force to be reckoned with. He enters the contest for a chance to buy his freedom and begin life anew..'
);

const rogue = new Character (
    'Rogue',
    'images/rogue.png',
    3,
    1,
    [new Item ('Smoke Bomb'), new Item ('Backpack')],
    'Rogue\'s parents may have been asking for trouble when they named their child "Rogue." They did their best to give her a good upbringing. And it worked, in ways: in theory, rogue is a pacifist. But more than that, she loves gold. If she can steal it without being seen, great. If not... Hey, it\'s not her fault that acquiring gold so often requires fighting to the death.'
);

const wizard = new Character (
    'Touchstone',
    'images/wizard.png',
    3,
    0,
    [new Item ('Healing Potion'), new Item ('Mind Control Scroll')],
    'Touchstone the Tireless is a wizard of mysterious power and unknown origin. He is well versed in the schools of conjuration, telepathy, and restoration and uses these skills to bend enemies to his will. Some legends say he gained the name Tireless because of a never ending quest to rid the world of peanuts, due to a severe allergy to them.'
);
