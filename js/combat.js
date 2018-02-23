'use strict';

const combat = {
    characterSpecs: JSON.parse(localStorage.getItem('characterSpecs')),

    monster: new SmallMonster,

    monstersDefeated: 0,

    elements: {
        announcement: document.getElementById('announcement'),

        characterImg: document.getElementById('character-img'),
        characterHP: document.getElementById('character-hp'),
        characterGold: document.getElementById('character-gold'),
        goldIncrease: document.getElementById('gold-increase'),

        monsterImg: document.getElementById('monster-img'),
        
        fight: document.getElementById('fight'),
        flee: document.getElementById('flee'),
        itemHeader: document.getElementById('item')
    },

    start: function () {
        this.load();
        this.loadAbility();
        this.equipItem();

        this.elements.characterImg.setAttribute('src', this.character.portrait);

        this.renderGraphics();
        this.elements.fight.addEventListener('click', this.preFight);
        this.elements.flee.addEventListener('click', this.flee);
        this.elements.itemHeader.addEventListener('click', combat.item.use);
    },

    load: function () {
        if (this.characterSpecs[0] === 'Zanshin') {
            combat.character = brute;
        } else if (this.characterSpecs[0] === 'Rogue') {
            combat.character = rogue;
        } else if (this.characterSpecs[0] === 'Touchstone') {
            combat.character = wizard;
        };

        if (this.characterSpecs[1] === 'Heavy Armor') {
            this.item = new Item('Heavy Armor');
        }
        if (this.characterSpecs[1] === 'Second Weapon') {
            this.item = new Item('Second Weapon');
        }
        if (this.characterSpecs[1] === 'Backpack') {
            this.item = new Item('Backpack');
        }
        if (this.characterSpecs[1] === 'Smoke Bomb') {
            this.item = new Item('Smoke Bomb');
        }
        if (this.characterSpecs[1] === 'Mind Control Scroll') {
            this.item = new Item('Mind Control Scroll');
        }
        if (this.characterSpecs[1] === 'Healing Potion') {
            this.item = new Item('Healing Potion');
        }
    },

    loadAbility: function () {
        if (combat.character.name === 'Zanshin') {
            combat.preFight = function() {
                if (combat.character.hp <= 10) {
                    combat.character.hp += 1;
                    combat.elements.announcement.textContent = 'Healed 1hp';
                    setTimeout(function() {combat.elements.announcement.textContent = "";}, 2000);
                }
                combat.fight();
            };       
        } else if (combat.character.name === 'Rogue') {
            combat.monsterAttack = function() {
                const random = randomNumber(1, 100);
                if (random < 51) {
                    const damage = this.monster.attack - this.character.defense;
                    if (damage > 0) {
                        this.character.hp -= damage;
                        this.elements.characterHP.textContent = 'HP: ' + this.character.hp;    
                    };
                } else if (random >= 51 ) {
                    combat.elements.announcement.textContent = 'Dodged! No damage!';
                    setTimeout(function() {combat.elements.announcement.textContent = "";}, 1500);
                }
            };
        } else if (combat.character.name === 'Touchstone') {
            combat.preFight = function() {
                combat.character.defense = randomNumber(1, 4);
    
                combat.elements.announcement.textContent = 'Chaos Magic! Defense: ' + combat.character.defense;
                setTimeout(function() {combat.elements.announcement.textContent = "";}, 1500);
    
                combat.fight();
            }

            this.character.barrier = 20;

            this.monsterAttack = function() {
                const damage = combat.monster.attack - combat.character.defense;
                if (damage > 0) {
                    if (combat.character.barrier > 0) {
                        combat.character.barrier -= damage;
                        combat.elements.characterHP.textContent = 'HP: ' + combat.character.hp + '  Barrier: ' + combat.character.barrier;
                    } else if (combat.character.barrier <= 0) {
                        combat.character.hp -= damage;
                        combat.elements.characterHP.textContent = 'HP: ' + combat.character.hp;
                    };
                };
            };

            this.renderGraphics = function () {
                this.elements.characterImg.setAttribute('src', this.character.portrait);

                if (combat.character.barrier > 0) {
                    this.elements.characterHP.textContent = 'HP: ' + this.character.hp + '  Barrier: ' + this.character.barrier;
                } else if (combat.character.barrier <= 0) {
                    this.elements.characterHP.textContent = 'HP: ' + this.character.hp;
                    
                }
                this.elements.characterGold.textContent = 'GOLD: ' + this.character.gold;
                
                this.elements.itemHeader.textContent = this.item.name;

                this.elements.monsterImg.setAttribute('src', this.monster.portrait);
            };        
        };
    },

    equipItem: function() {
        if (combat.item.name === 'Heavy Armor') {
    
            combat.character.defense = 3;

            this.elements.itemHeader.textContent = (this.item.name + ' equipped.');

        } else if (combat.item.name === 'Second Weapon') {
            this.elements.itemHeader.textContent = (this.item.name + ' equipped. First strike chance!');

            combat.fightFirst = function() {
                this.elements.announcement.textContent = "First strike! No damage taken!";

                while (combat.character.hp > 0 && combat.monster.hp > 0) {
                    
                    this.characterAttack();
                    if (this.monster.hp <=0) {
                        this.character.gold += this.monster.gold;
                        combat.monstersDefeated++;

                        combat.elements.monsterImg.classList.add('dying');
                        combat.elements.fight.removeEventListener('click', combat.preFight);             
                        combat.elements.fight.classList.toggle('pressed');
                        combat.elements.goldIncrease.textContent = "+" + combat.monster.gold;
                        combat.elements.goldIncrease.classList.toggle('bling');
        
                        setTimeout(function(){
                            combat.elements.monsterImg.classList.remove('dying');
                            combat.elements.fight.addEventListener('click', combat.preFight);
                            combat.elements.fight.classList.toggle('pressed');
                            combat.elements.goldIncrease.textContent = ("");
                            combat.elements.goldIncrease.classList.toggle('bling');
                        },2000);
        
                        continue;
                    }
                    
                    this.monsterAttack();
                    
                    if (this.character.hp <= 0 ) {
                        this.elements.fight.removeEventListener('click', this.preFight);
                        this.elements.flee.removeEventListener('click', this.flee);
                        this.elements.itemHeader.removeEventListener('click', this.useItem);
                        combat.elements.announcement.textContent = 'YOU DIED';
                        combat.elements.characterImg.classList.add('dying');
                        setTimeout(function() {window.location.replace('bar.html')}, 2000);
                        continue;
                    };                
                };
    
                this.reset();
            };

            combat.preFight = function() {
                combat.elements.announcement.textContent = "";
                const random = randomNumber (1,100);

                if (random < 50) {
                    combat.fight();
                } else if (random >= 50) {
                    combat.fightFirst();
                }            
            };

        } else if (combat.item.name === 'Backpack') {
            this.elements.itemHeader.textContent = (this.item.name + ' equipped. Double gold!');

            combat.fight = function() {

                while (combat.character.hp > 0 && combat.monster.hp > 0) {
        
                    combat.monsterAttack();
                    
                    if (combat.character.hp <= 0 ) {
                        this.elements.fight.removeEventListener('click', this.preFight);
                        this.elements.flee.removeEventListener('click', this.flee);
                        this.elements.itemHeader.removeEventListener('click', this.useItem);
                        combat.elements.announcement.textContent = 'YOU DIED';
                        combat.elements.characterImg.classList.add('dying');
                        setTimeout(function() {window.location.replace('bar.html')}, 2000);
                        continue;
                            }
                    
                    combat.characterAttack();
        
                    if (combat.monster.hp <=0) {
                        combat.character.gold += (combat.monster.gold * 2);
                        combat.monstersDefeated++;

                        combat.elements.monsterImg.classList.add('dying');
                        combat.elements.fight.removeEventListener('click', combat.preFight);             
                        combat.elements.fight.classList.toggle('pressed');
                        combat.elements.goldIncrease.textContent = "+" + combat.monster.gold;
                        combat.elements.goldIncrease.classList.toggle('bling');
        
                        setTimeout(function(){
                            combat.elements.monsterImg.classList.remove('dying');
                            combat.elements.fight.addEventListener('click', combat.preFight);
                            combat.elements.fight.classList.toggle('pressed');
                            combat.elements.goldIncrease.textContent = ("");
                            combat.elements.goldIncrease.classList.toggle('bling');
                        },2000);
        
                    }
                }
                
                setTimeout(combat.reset(), 1500);
        
            };
        } else if (combat.item.name === 'Smoke Bomb') {    
            this.elements.itemHeader.textContent = this.item.name + '. Click to use.';

            combat.item.use = function() {
                    if (combat.item.used === false) {
                        combat.item.used = true;

                        combat.character.gold += (combat.monster.gold);
                        combat.elements.announcement.textContent = 'Smoke Bomb used! Automatic win!';
                        combat.monstersDefeated++;
                        combat.elements.itemHeader.textContent = "";

                        combat.elements.monsterImg.classList.add('dying');
                        combat.elements.fight.removeEventListener('click', combat.preFight);             
                        combat.elements.fight.classList.toggle('pressed');
                        combat.elements.goldIncrease.textContent = "+" + combat.monster.gold;
                        combat.elements.goldIncrease.classList.toggle('bling');
        
                        setTimeout(function(){
                            combat.elements.monsterImg.classList.remove('dying');
                            combat.elements.fight.addEventListener('click', combat.preFight);
                            combat.elements.fight.classList.toggle('pressed');
                            combat.elements.goldIncrease.textContent = ("");
                            combat.elements.goldIncrease.classList.toggle('bling');
                        },2000);
        
                    setTimeout(function(){combat.reset()}, 2000);
                }
            }
        } else if (combat.item.name === 'Healing Potion') {
            this.elements.itemHeader.textContent = this.item.name + '. Click to use.';

            combat.item.use = function () {
                if (combat.item.used === false) {
                    combat.item.used = true;
                    combat.elements.itemHeader.textContent = "";
                    
                    combat.character.hp = 10;
                    
                    combat.elements.announcement.textContent = 'Healing Potion used! Health fully restored!';

                    combat.elements.characterHP.textContent = 'HP: ' + combat.character.hp;
                }
            };
        };
    
    },

    renderGraphics: function () {
        this.elements.characterHP.textContent = 'HP: ' + this.character.hp;
        this.elements.characterGold.textContent = 'GOLD: ' + this.character.gold;
        
        this.elements.monsterImg.setAttribute('src', this.monster.portrait);
    },

    createMonster: function () {    
        let random;
        if (combat.monstersDefeated < 5) {
            random = randomNumber(1, 2);
        } else if (combat.monstersDefeated >= 5) {
            random = randomNumber(1, 3);
        }
        
        if (random === 1 ) {
            combat.monster = new SmallMonster;
        } else if (random === 2) {
            combat.monster = new MediumMonster;
        } else if (random === 3) {
            combat.monster = new LargeMonster;
        }
    },

    // preFight is used by certain character abilities. It is otherwise filler.
    preFight: function () {
        combat.elements.announcement.textContent = "";
        combat.fight();
    },

    fight: function() {
        while (combat.character.hp > 0 && combat.monster.hp > 0) {

            combat.monsterAttack();

            if (combat.character.hp <= 0 ) {
                this.elements.fight.removeEventListener('click', this.preFight);
                this.elements.flee.removeEventListener('click', this.flee);
                this.elements.itemHeader.removeEventListener('click', this.useItem);
                combat.elements.announcement.textContent = 'YOU DIED';
                combat.elements.characterImg.classList.add('dying');
                setTimeout(function() {window.location.replace('bar.html')}, 2000);
                continue;
            }

            combat.characterAttack();

            if (combat.monster.hp <=0) {
                combat.character.gold += combat.monster.gold;
                combat.monstersDefeated++;

                combat.elements.monsterImg.classList.add('dying');
                combat.elements.fight.removeEventListener('click', combat.preFight);             
                combat.elements.fight.classList.toggle('pressed');
                combat.elements.goldIncrease.textContent = "+" + combat.monster.gold;
                combat.elements.goldIncrease.classList.toggle('bling');

                setTimeout(function(){
                    combat.elements.monsterImg.classList.remove('dying');
                    combat.elements.fight.addEventListener('click', combat.preFight);
                    combat.elements.fight.classList.toggle('pressed');
                    combat.elements.goldIncrease.textContent = ("");
                    combat.elements.goldIncrease.classList.toggle('bling');
                },2000);
            }
        }

        setTimeout(function() {combat.reset();}, 2000);

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

        localStorage.setItem('score', JSON.stringify([prompt('What is your name?'), combat.character.name, combat.item.name, combat.character.gold]));

        combat.elements.characterImg.classList.add('running-away');

        setTimeout(function() {window.location.replace('leaderboard.html')}, 1500);

    },

    reset: function() {
        this.createMonster();
        this.renderGraphics();
    }
};

combat.start();