'use strict';

const combat = {

    // PLACEHOLDERS UNTIL LOCAL STORAGE IS UP
    characterSpecs: [],

    character: brute,
    item: {name: 'Second Weapon'},



    monster: new SmallMonster,
    monstersDefeated: 0,

    elements: {
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
    },

    // load: function () {
    //     this.characterSpecs = JSON.parse(localStorage.characterSpecs);
    // },

    start: function () {
        // load();
        this.renderGraphics();
        item.equip();
        this.elements.fight.addEventListener('click', this.fight);
        this.elements.flee.addEventListener('click', this.flee);
        this.elements.item.addEventListener('click', this.useItem);
    },

    // STILL NEEDS TO UTILIZE LOCALSTORAGE DATA
    renderGraphics: function () {
        this.elements.characterImg.setAttribute('src', this.character.portrait);
        this.elements.characterHP.textContent = 'HP: ' + this.character.hp;
        this.elements.characterGold.textContent = 'Gold: ' + this.character.gold;
        
        this.elements.monsterImg.setAttribute('src', this.monster.portrait);
        this.elements.item.textContent = (this.character.inventory[0].name);
    },

    createMonster: function () {    
        let random;
        if (this.monstersDefeated < 4) {
            random = randomNumber(1, 2);
        } else if (this.monstersDefeated >= 4) {
            random = randomNumber(1, 3);
        }
        
        if (random === 1 ) {
            this.monster = new SmallMonster;
        } else if (random === 2) {
            this.monster = new MediumMonster;
        } else if (random === 3) {
            this.monster = new LargeMonster;
        }
    },

    fight: function() {
        while (combat.character.hp > 0 && combat.monster.hp > 0) {

            combat.monsterAttack();
            
            if (combat.character.hp <= 0 ) {
                // PLAYER DIES ANIMATION
                setTimeout(function() {
                    window.location.replace('bar.html')
                }, 1000);
                continue;
            }
            
            combat.characterAttack();

            if (combat.monster.hp <=0) {
                // MONSTER DIES ANIMATION
                combat.character.gold += combat.monster.gold;
            }
        }
        
        setTimeout(combat.reset(), 1000);

    },

    monsterAttack: function() {
        const damage = this.monster.attack - this.character.defense;
        if (damage > 0) {
            this.character.hp -= damage;
            this.elements.characterHP.textContent = 'HP: ' + this.character.hp;
        }
    },

    characterAttack: function() {
        this.monster.hp -= this.character.attack;
    },

    flee: function() {

        // CHARACTER TURNS AND RUNS, SCREEN FADES TO BLACK
            
        setTimeout(function() {window.location.replace('leaderboard.html')}, 1000);
    
    },
        
    useItem: function() {
    },

    reset: function() {
        this.createMonster();
        this.renderGraphics();
    }
};

// ITEMS

item.equip = function() {
    if (combat.item.name === 'Heavy Armor') {

        combat.character.defense = 3;
        combat.character.portrait = 'images/brutearmor.jpeg';
        combat.elements.characterImg.setAttribute('src', combat.character.portrait);

    } else if (item.name === 'Second Weapon') {
        combat.fight = function() {
            while (combat.character.hp > 0 && combat.monster.hp > 0) {
                
                this.characterAttack();
    
                if (monster.hp <=0) {
                    // MONSTER DIES ANIMATION
                    this.character.gold += this.monster.gold;
                    continue;
                }
                
                this.monsterAttack();
                
                if (this.character.hp <= 0 ) {
                    // PLAYER DIES ANIMATION
                    setTimeout(function() {window.location.replace('bar.html')}, 1000);
                    continue;
                }
                
                setTimeout(this.reset(), 1000);
                
            };
        };
    };
};

combat.start();