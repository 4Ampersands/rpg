'use strict';

const combat = {

    // PLACEHOLDERS UNTIL LOCAL STORAGE IS UP
    characterSpecs: [],

    character: brute,
    item: {name: 'Heavy Armor'},



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

    load: function () {
        this.characterSpecs = JSON.parse(localStorage.characterSpecs);
    },

    start: function () {
        load();
        renderGraphics();
        this.elements.fight.addEventListener('click', fight());
        this.elements.flee.addEventListener('click', flee());
        this.elements.item.addEventListener('click', useItem());
    },

    // STILL NEEDS TO UTILIZE LOCALSTORAGE DATA
    renderGraphics: function () {
        elements.characterImg.setAttribute('src', character.portrait);
        elements.characterHP.textContent = 'HP: ' + character.hp;
        elements.characterGold.textContent = 'Gold: ' + character.gold;
        
        elements.monsterImg.setAttribute('src', monster.portrait);
        elements.item.textContent = (character.inventory[0].name);
    },

    createMonster: function () {    
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
    },

    fight: function() {
        while (character.hp > 0 && monster.hp > 0) {

            this.monsterAttack();
            
            if (character.hp <= 0 ) {
                // PLAYER DIES ANIMATION
                setTimeout(function() {
                    window.location.replace('bar.html')
                }, 1000);
                continue;
            }
            
            this.characterAttack();

            if (monster.hp <=0) {
                // MONSTER DIES ANIMATION
                character.gold += monster.gold;
            }
        }
        
        setTimeout(this.reset(), 1000);

    },

    monsterAttack: function() {
        const damage = monster.attack - character.defense;
        if (damage > 0) {
            character.hp -= damage;
            elements.characterHP.textContent = 'HP: ' + character.hp;
        }
    },

    characterAttack: function() {
        monster.hp -= character.attack;
    },

    flee: function() {

        // CHARACTER TURNS AND RUNS, SCREEN FADES TO BLACK
            
        setTimeout(function() {window.location.replace('leaderboard.html')}, 1000);
    
    },
        
    useItem: function() {
    },

    reset: function() {
        createMonster();
        renderGraphics();
    }
};

// ITEMS

item.equip = function() {
    if (item.name === 'Heavy Armor') {

        character.defense = 3;

    } else if (item.name === 'Second Weapon') {
        combat.fight = function() {
            while (combat.character.hp > 0 && combat.monster.hp > 0) {
                
                this.characterAttack();
    
                if (monster.hp <=0) {
                    // MONSTER DIES ANIMATION
                    character.gold += monster.gold;
                    continue;
                }
                
                this.monsterAttack();
                
                if (character.hp <= 0 ) {
                    // PLAYER DIES ANIMATION
                    setTimeout(function() {window.location.replace('bar.html')}, 1000);
                    continue;
                }
                
                setTimeout(this.reset(), 1000);
                
            };
        };
    };
};
