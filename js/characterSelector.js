'use strict'

const hide = document.getElementsByClassName('hidden');


/*
    All of these select character handler functions look very similar! Would be a great place to refactor.
    Since the behavior is the same, but the information we're using is different,
    that suggests a function with some parameters would be useful.
    And since the data we're using is relevant to the characters, 
    it would make sense to attach the method to the character object.

    It's also possible there are a few functions worth of code here.

    We could have: 
        Character.writeBio() - which would give us their bio
        Character.showStats() - which would give us their stats and inventory options
        Character.selectItem() - which would do the work that switches which item is selected
    

    Having methods to do all that work would make our code here much more DRY.
    */
const bruteSelect = document.getElementById('brute');
bruteSelect.addEventListener('click', function() {
    clearCharSelect();
    const bio = document.getElementById('bio');
    const h2 = document.createElement('h2');
    h2.textContent = brute.name;
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    p.textContent = brute.bio;
    p2.textContent = 'Special Ability: Zanshin heals 1 hp after every fight, keeping him heathy for the next encounter.';
    
    const stats = document.getElementById('stats-items');
    const itemDesc = document.getElementById('item-description');
    const h3 = document.createElement('h2');
    h3.textContent = 'Attack Value: Medium';
    const h4 = document.createElement('h2');
    h4.textContent = 'Defense Value: Medium';
    const itemSelect1 = document.createElement('button');
    const itemSelect2 = document.createElement('button');
    itemSelect1.idName = 'item-select1';
    itemSelect2.idName = 'item-select2';
    itemSelect1.textContent = brute.inventory[0].name;
    itemSelect2.textContent = brute.inventory[1].name;

    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
    stats.appendChild(h3);
    stats.appendChild(h4);
    stats.appendChild(itemSelect1);
    stats.appendChild(itemSelect2);

    itemSelect1.addEventListener('click', function () {
        /*
            You didn't need that nested function here.
        */
        brute.inventory[0].equipped = true;
        brute.inventory[1].equipped = false;
        itemDesc.textContent = 'Increases your defense.';
    });

    itemSelect2.addEventListener('click', function () {
        brute.inventory[0].equipped = false;
        brute.inventory[1].equipped = true;
        const whoosh = new Audio('SoundFXShortened/SecondWeaponSwing.mp3');
        whoosh.play();
        itemDesc.textContent = 'Chance to strike first. If the monster dies, you don\'t take damage.';
    });

});

const rogueSelect = document.getElementById('rogue');
rogueSelect.addEventListener('click', function() {
    clearCharSelect();
    const bio = document.getElementById('bio');
    const h2 = document.createElement('h2');
    h2.textContent = rogue.name;
    const p = document.createElement('p');
    const p2 = document.createElement('p2');
    p.textContent = rogue.bio;
    p2.textContent = 'Special Ability: Rogue has a chance to dodge every attack, taking no damage for that round.';

    const stats = document.getElementById('stats-items');
    const itemDesc = document.getElementById('item-description');
    const h3 = document.createElement('h2');
    h3.textContent = 'Attack Value: High';
    const h4 = document.createElement('h2');
    h4.textContent = 'Defense Value: Low';
    const itemSelect1 = document.createElement('button');
    const itemSelect2 = document.createElement('button');
    itemSelect1.className = 'item-select';
    itemSelect2.className = 'item-select';
    itemSelect1.textContent = rogue.inventory[0].name;
    itemSelect2.textContent = rogue.inventory[1].name;

    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
    stats.appendChild(h3);
    stats.appendChild(h4);
    stats.appendChild(itemSelect1);
    stats.appendChild(itemSelect2);

    itemSelect1.addEventListener('click', function () {
        /*
            You don't need the nested select here, either.
        */
        const select = function() {
            itemDesc.textContent = 'One-time use to automatically win a fight without taking any damage.';
            const bomb = new Audio('SoundFXShortened/SmokeBomb.mp3');
            bomb.play();
            rogue.inventory[0].equipped = true;
            rogue.inventory[1].equipped = false;
        }
        select();
    });

    itemSelect2.addEventListener('click', function () {
        const select = function() {
            itemDesc.textContent = 'Receive double gold rewards from monsters.';
            const cash = new Audio('SoundFXShortened/remy_cash.wav');
            cash.play();
            rogue.inventory[0].equipped = false;
            rogue.inventory[1].equipped = true;
        }
        select();
    });
});

const wizardSelect = document.getElementById('wizard');
wizardSelect.addEventListener('click', function() {
    clearCharSelect();
    const bio = document.getElementById('bio');
    const h2 = document.createElement('h2');
    h2.textContent = wizard.name;
    const p = document.createElement('p');
    const p2 = document.createElement('p2');
    p.textContent = wizard.bio;
    p2.textContent = 'Special Ability: Touchstone draws upon the power of arcane chaos, increasing his defense by random amounts for every encounter. He also creates a force-field that adds an extra 20hp';

    const stats = document.getElementById('stats-items');
    const itemDesc = document.getElementById('item-description');
    const h3 = document.createElement('h2');
    h3.textContent = 'Attack Value: Low';
    const h4 = document.createElement('h2');
    h4.textContent = 'Defense Value: None';
    const itemSelect1 = document.createElement('button');
    itemSelect1.className = 'item-select';
    itemSelect1.textContent = wizard.inventory[0].name;


    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
    stats.appendChild(h3);
    stats.appendChild(h4);
    stats.appendChild(itemSelect1);

    itemSelect1.addEventListener('click', function () {
        /* 
            Still don't need it!
        */
        const select = function() {
            wizard.inventory[0].equipped = true;
            wizard.inventory[1].equipped = false;
            const regen = new Audio('SoundFXShortened/healingregen.mp3');
            regen.play();
            itemDesc.textContent = 'One-time use to fully restore your HP.';
        }
        select();
    });
});

function clearCharSelect () {
    document.getElementById('bio').textContent = '';
    document.getElementById('stats-items').textContent = '';
    document.getElementById('item-description').textContent = '';
}

const goButton = document.getElementById('goButton');
goButton.addEventListener('click', function() {
    const somethingIsEquipped = wizard.inventory[0].equipped === true || wizard.inventory[1].equipped === true || 
          rogue.inventory[0].equipped === true || rogue.inventory[1].equipped === true || 
          brute.inventory[0].equipped === true || brute.inventory[1].equipped === true;

    /*
        Moving that massive condition into its own variable makes our if more readable.
    */
    if (somethingIsEquipped) {
        storage();
        const link = document.getElementById('link');
        link.setAttribute('href', 'dungeon.html');
    } else {
        alert('You must choose a Character and Character Item!');
    }
});

function storage() {
    if (brute.inventory[0].equipped === true) {
        localStorage.setItem('characterSpecs', JSON.stringify([brute.name, brute.inventory[0].name]));
    } else if (brute.inventory[1].equipped === true) {
        localStorage.setItem('characterSpecs', JSON.stringify([brute.name, brute.inventory[1].name]));
    } else if (rogue.inventory[0].equipped === true) {
        localStorage.setItem('characterSpecs', JSON.stringify([rogue.name, rogue.inventory[0].name]));
    } else if (rogue.inventory[1].equipped === true) {
        localStorage.setItem('characterSpecs', JSON.stringify([rogue.name, rogue.inventory[1].name]));
    } else if (wizard.inventory[0].equipped === true) {
        localStorage.setItem('characterSpecs', JSON.stringify([wizard.name, wizard.inventory[0].name]));
    } 
}