"use strict"

const bruteSelect = document.getElementById("brute");
bruteSelect.addEventListener("click", function() {
    clearCharSelect();
    const bio = document.getElementById("bio");
    const h2 = document.createElement("h2");
    h2.textContent = brute.name;
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    p.textContent = brute.bio;
    p2.textContent = 'Special Ability: Brute heals 1-3 hp after every fight, keeping him heathy for the next encounter.';
    
    const stats = document.getElementById("stats-items");
    const h3 = document.createElement("h2");
    h3.textContent = 'Attack Value: ' + brute.attack;
    const h4 = document.createElement("h2");
    h4.textContent = 'Defense Value: ' + brute.defense;
    const itemSelect1 = document.createElement("button");
    const itemSelect2 = document.createElement("button");

    itemSelect1.textContent = brute.inventory[0].name;
    itemSelect2.textContent = brute.inventory[1].name;

    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
    stats.appendChild(h3);
    stats.appendChild(h4);
    stats.appendChild(itemSelect1);
    stats.appendChild(itemSelect2);
});

const rogueSelect = document.getElementById("rogue");
rogueSelect.addEventListener("click", function() {
    clearCharSelect();
    const bio = document.getElementById("bio");
    const h2 = document.createElement("h2");
    h2.textContent = rogue.name;
    const p = document.createElement("p");
    const p2 = document.createElement("p2");
    p.textContent = rogue.bio;
    p2.textContent = 'Special Ability: Rogue has a chance to dodge every attack, taking no damage for that encounter.';

    const stats = document.getElementById("stats-items");
    const h3 = document.createElement("h2");
    h3.textContent = 'Attack Value: ' + rogue.attack;
    const h4 = document.createElement("h2");
    h4.textContent = 'Defense Value: ' + rogue.defense;
    const itemSelect1 = document.createElement("button");
    const itemSelect2 = document.createElement("button");

    itemSelect1.textContent = rogue.inventory[0].name;
    itemSelect2.textContent = rogue.inventory[1].name;

    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
    stats.appendChild(h3);
    stats.appendChild(h4);
    stats.appendChild(itemSelect1);
    stats.appendChild(itemSelect2);
});

const wizardSelect = document.getElementById("wizard");
wizardSelect.addEventListener("click", function() {
    clearCharSelect();
    const bio = document.getElementById("bio");
    const h2 = document.createElement("h2");
    h2.textContent = wizard.name;
    const p = document.createElement("p");
    const p2 = document.createElement("p2");
    p.textContent = wizard.bio;
    p2.textContent = 'Special Ability: Wizard draws upon the power of arcane chaos, increasing his attack and defense by random amounts for every encounter.';

    const stats = document.getElementById("stats-items");
    const h3 = document.createElement("h2");
    h3.textContent = 'Attack Value: ' + wizard.attack;
    const h4 = document.createElement("h2");
    h4.textContent = 'Defense Value: ' + wizard.defense;
    const itemSelect1 = document.createElement("button");
    const itemSelect2 = document.createElement("button");

    itemSelect1.textContent = wizard.inventory[0].name;
    itemSelect2.textContent = wizard.inventory[1].name;

    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
    stats.appendChild(h3);
    stats.appendChild(h4);
    stats.appendChild(itemSelect1);
    stats.appendChild(itemSelect2);
});

function clearCharSelect () {
    document.getElementById('bio').textContent = '';
    document.getElementById('stats-items').textContent = '';
}