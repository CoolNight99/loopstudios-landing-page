const hamburgerIcon = document.querySelector(".hamburger-icon");
const sidebar = document.querySelector(".sidebar");

const interactiveImg = document.querySelector(".interactive-img");
const deepEarthImg = document.querySelector(".deep-earth-img");
const nightArcadeImg = document.querySelector(".night-arcade-img");
const soccerTeamImg = document.querySelector(".soccer-team-img");
const gridImg = document.querySelector(".grid-img");
const fromAboveImg = document.querySelector(".from-above-img");
const pocketBorealisImg = document.querySelector(".pocket-borealis-img");
const curiosityImg = document.querySelector(".curiosity-img");
const fisheyeImg = document.querySelector(".fisheye-img");

hamburgerIcon.addEventListener("click", () => {
    if (sidebar.style.display == "none") {
        sidebar.style.display = "flex";
        hamburgerIcon.src = "./images/icon-close.svg";
    }

    else {
        sidebar.style.display = "none";
        hamburgerIcon.src = "./images/icon-hamburger.svg";
    }
})

if (window.matchMedia("(max-width: 400px)").matches) {
    interactiveImg.src = "./images/mobile/image-interactive.jpg";
    deepEarthImg.src = "./images/mobile/image-deep-earth.jpg";
    nightArcadeImg.src = "./images/mobile/image-night-arcade.jpg";
    soccerTeamImg.src = "./images/mobile/image-soccer-team.jpg";
    gridImg.src = "./images/mobile/image-grid.jpg";
    fromAboveImg.src = "./images/mobile/image-from-above.jpg";
    pocketBorealisImg.src = "./images/mobile/image-pocket-borealis.jpg";
    curiosityImg.src = "./images/mobile/image-curiosity.jpg";
    fisheyeImg.src = "./images/mobile/image-fisheye.jpg";
}