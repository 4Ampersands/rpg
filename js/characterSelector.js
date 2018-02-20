"use strict"

const bruteSelect = document.getElementById("brute");
bruteSelect.addEventListener("click", function() {
    const bio = document.getElementById("bio");
    const h2 = document.createElement("h2");
    h2.textContent = brute.name;
    const p = document.createElement("p");
    p.textContent = brute.bio;
    bio.appendChild(h2);
    bio.appendChild(p);
    console.log('clicked!')
});

const rogueSelect = document.getElementById("rogue");
rogueSelect.addEventListener("click", function() {
    const bio = document.getElementById("bio");
    const h2 = document.createElement("h2");
    h2.textContent = rogue.name;
    const p = document.createElement("p");
    p.textContent = rogue.bio;
    bio.appendChild(h2);
    bio.appendChild(p);
    console.log('clicked!')
});

const wizardSelect = document.getElementById("wizard");
wizardSelect.addEventListener("click", function() {
    const bio = document.getElementById("bio");
    const h2 = document.createElement("h2");
    h2.textContent = wizard.name;
    const p = document.createElement("p");
    p.textContent = wizard.bio;
    bio.appendChild(h2);
    bio.appendChild(p);
    console.log('clicked!')
});