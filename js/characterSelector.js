"use strict"

const bruteSelect = document.getElementById("brute");
bruteSelect.addEventListener("click", function() {
    const bio = document.getElementById("bio");
    const h2 = document.createElement("h2");
    h2.textContent = Character.brute.name;
    const p = document.createElement("p");
    p.textContent = Character.brute.bio;
    bio.appendChild(p);
    bio.appendChild(h2);
});

const rogueSelect = document.getElementById("rogue");
rogueSelect.addEventListener("click", function() {

});

const wizardSelect = document.getElementById("wizard");
rogueSelect.addEventListener("click", function() {

});
