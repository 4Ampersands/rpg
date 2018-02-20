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
    p2.textContent = 'Special Ability: Brute heals 1 hp after every fight, keeping him heathy for the next encounter.';
    
    const stats = document.getElementById("stats-items");
    const h3 = document.createElement("h2");
    h3.textContent = 'Attack Value: ' + brute.attack;
    const h4 = document.createElement("h2");
    h4.textContent = 'Defense Value: ' + brute.defense;
    const itemSelect1 = document.createElement("button");
    const itemSelect2 = document.createElement("button");
    itemSelect1.idName = "item-select1";
    itemSelect2.idName = "item-select2";
    itemSelect1.textContent = brute.inventory[0].name;
    itemSelect2.textContent = brute.inventory[1].name;

    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
    stats.appendChild(h3);
    stats.appendChild(h4);
    stats.appendChild(itemSelect1);
    stats.appendChild(itemSelect2);

    itemSelect1.addEventListener("click", function () {
        const select = function() {
        brute.inventory[0].equipped = true;
        brute.inventory[1].equipped = false;
        }
        select();
    });

    itemSelect2.addEventListener("click", function () {
        const select = function() {
        brute.inventory[0].equipped = false;
        brute.inventory[1].equipped = true;
        }
        select();
    });
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
    p2.textContent = 'Special Ability: Rogue has a chance to dodge every attack, taking no damage for that round.';

    const stats = document.getElementById("stats-items");
    const h3 = document.createElement("h2");
    h3.textContent = 'Attack Value: ' + rogue.attack;
    const h4 = document.createElement("h2");
    h4.textContent = 'Defense Value: ' + rogue.defense;
    const itemSelect1 = document.createElement("button");
    const itemSelect2 = document.createElement("button");
    itemSelect1.className = "item-select";
    itemSelect2.className = "item-select";
    itemSelect1.textContent = rogue.inventory[0].name;
    itemSelect2.textContent = rogue.inventory[1].name;

    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
    stats.appendChild(h3);
    stats.appendChild(h4);
    stats.appendChild(itemSelect1);
    stats.appendChild(itemSelect2);

    itemSelect1.addEventListener("click", function () {
        const select = function() {
        rogue.inventory[0].equipped = true;
        rogue.inventory[1].equipped = false;
        }
        select();
    });

    itemSelect2.addEventListener("click", function () {
        const select = function() {
        rogue.inventory[0].equipped = false;
        rogue.inventory[1].equipped = true;
        }
        select();
    });
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
    // const itemSelect2 = document.createElement("button");
    itemSelect1.className = "item-select";
    // itemSelect2.className = "item-select";
    itemSelect1.textContent = wizard.inventory[0].name;
    // itemSelect2.textContent = wizard.inventory[1].name;


    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
    stats.appendChild(h3);
    stats.appendChild(h4);
    stats.appendChild(itemSelect1);
    // stats.appendChild(itemSelect2);

    itemSelect1.addEventListener("click", function () {
        const select = function() {
        wizard.inventory[0].equipped = true;
        wizard.inventory[1].equipped = false;
        }
        select();
    });

    // itemSelect2.addEventListener("click", function () {
    //     const select = function() {
    //     wizard.inventory[0].equipped = false;
    //     wizard.inventory[1].equipped = true;
    //     }
    //     select();
    // });
});

function clearCharSelect () {
    document.getElementById('bio').textContent = '';
    document.getElementById('stats-items').textContent = '';
}

const goButton = document.getElementById("goButton");
goButton.addEventListener("click", function() {
    if (wizard.inventory[0].equipped === true || wizard.inventory[1].equipped === true || rogue.inventory[0].equipped === true || rogue.inventory[1].equipped === true || brute.inventory[0].equipped === true || brute.inventory[1].equipped === true) {
        storage();
        const link = document.getElementById("link");
        link.setAttribute("href", "dungeon.html");
    } else {
        alert("You must choose a Character and Character Item!");
    }
});

function storage() {
    if (brute.inventory[0].equipped === true) {
        localStorage.setItem("characterSpecs", JSON.stringify([brute.name, brute.inventory[0].name]));
    } else if (brute.inventory[1].equipped === true) {
        localStorage.setItem("characterSpecs", JSON.stringify([brute.name, brute.inventory[1].name]));
    } else if (rogue.inventory[0].equipped === true) {
        localStorage.setItem("characterSpecs", JSON.stringify([rogue.name, rogue.inventory[0].name]));
    } else if (rogue.inventory[1].equipped === true) {
        localStorage.setItem("characterSpecs", JSON.stringify([rogue.name, rogue.inventory[1].name]));
    } else if (wizard.inventory[0].equipped === true) {
        localStorage.setItem("characterSpecs", JSON.stringify([wizard.name, wizard.inventory[0].name]));
    // } else if (wizard.inventory[1].equipped === true) {
    //     localStorage.setItem("characterSpecs", JSON.stringify([wizard.name, wizard.inventory[1].name]));
    } 
}