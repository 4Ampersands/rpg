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

Character = function (name, portrait, attack, defense, inventory, ability, bio) {
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
    }
};

// ITEMS
Item = function (name) {
    this.name = name;

    this.equipped = false;
    this.used = false;
};

// MONSTERS
SmallMonster = function () {
    this.portrait = 'images/smallmonster.png';
    this.hp = 1;
    this.attack = randomNumber(1,2);
};

MediumMonster = function () {
    this.portrait = 'images/mediummonster.jpg'
    this.hp = 2;
    this.attack = randomNumber(2,3);
};

LargeMonster = function () {
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
