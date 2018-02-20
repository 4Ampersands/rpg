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
    },

    dodge: function() {
        // 50% chance to take 0 damage
    },

    chaosMagic: function() {
        // randomly adds 0-10 to attack and defense
    }
};

// MONSTERS
SmallMonster = function () {
    this.portrait = 'images/smallmonster.png';
    this.hp = 1;
    this.gold = randomNumber(3,5);
    this.attack = randomNumber(2,3);
};

MediumMonster = function () {
    this.portrait = 'images/mediummonster.jpg'
    this.hp = 2;
    this.gold = randomNumber(5,8);
    this.attack = randomNumber(3,4);
};

LargeMonster = function () {
    this.hp = 3;
    this.portrait = 'images/largemonster.jpg'
    this.gold = randomNumber(8,12);
    this.attack = randomNumber(5,6);
};