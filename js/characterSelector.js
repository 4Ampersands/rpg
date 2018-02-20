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
    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
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
    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
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
    bio.appendChild(h2);
    bio.appendChild(p);
    bio.appendChild(p2);
});

function clearCharSelect () {
    document.getElementById('bio').textContent = '';
}