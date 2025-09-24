// Here is where we create the interactivity for our color switching game

// 1. Select all the html elements so that we can later manipulate them

const body = document.querySelector("body");
const colorInput = document.getElementById("color-picker"); 
const colorDiv = document.querySelector(".color-div");
const hiddenText = document.querySelector(".color-div p");
const resetBtn = document.querySelector(".color-div button");
const playBtn = document.getElementById("play-game");

// 2. Create a functions that will generate a random hex color code.

function playGame() {
    // this function enables the play of the game by showing the color selector input.

    colorDiv.style.display = "block";
    playBtn.style.display = "none";
}

function changeColor() {
    // this function changes the background color of the body to the selected color
    const selectedColor = colorInput.value;
    body.style.background = selectedColor;
    resetBtn.style.display = "block";
    hiddenText.style.display = "block";
    colorInput.style.display = "none";
}

function resetColor() {
    body.style.background = "white";
    colorInput.style.display = "block";
    playBtn.style.display = "block";

    hiddenText.style.display = "none";
    resetBtn.style.display = "none";
    colorDiv.style.display = "none";
}