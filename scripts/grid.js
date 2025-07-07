/*
    Author: Sahara Krompel
    Date: 7 July 2025
    Assignment: WEB 1430 Module 6 Try it Out - The Colorful Grid
*/

'use strict';

// Dynamically creates 25 squares (div elements with square class) inside the grid-container, assigns each a unique id, and adds a click event listener to trigger color change
const GRIDCONTAINER = document.querySelector('.grid-container');
for (let i = 0; i < 25; i++) {
    const SQUARE = document.createElement('div')
    SQUARE.classList.add('square');
    SQUARE.id = `square-${i + 1}`;

    SQUARE.addEventListener('click', changeColor);

    GRIDCONTAINER.appendChild(SQUARE);
}

// Generates a random hex color (Hex colors start with a # and have 6 letters/numbers, selected from this array: 0123456789ABCDEF).

let getRandomColor = () => {
    const HEX = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F'];
    let hexCode = '#';

    for (let i = 0; i < 6; i++) {
        hexCode += HEX[Math.floor(Math.random() * HEX.length)];
    }

    return hexCode;
}

// Event listener function that changes the background color of the clicked square to a random color.
function changeColor(e) {
    const clickedSquare = e.target;
    clickedSquare.style.backgroundColor = getRandomColor();
}

// Resets all squares' background colors to white when the button is clicked.
function resetGrid() {
    const SQUARES = document.querySelectorAll('.square');

    SQUARES.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}

document.getElementById('reset-btn').addEventListener('click', resetGrid);

