/*
* create variables and connect to the ID's and classes
*/
let moves = document.getElementById("moves-count");
let timeValue = document.getElementById("time-count");
let startButton = document.getElementById("start-game");
let stopButton = document.getElementById("stop-game");
let gameContainer = document.querySelector(".game-container");
let result = document.getElementById("result");
let controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

/*
* Array of game icons
*/
let items = [
    { name: "crab", image: "crab.png" },
    { name: "goose", image: "goose.png" },
    { name: "lion", image: "lion.png" },
    { name: "penguin", image: "penguin.png" },
    { name: "ram", image: "ram.png" },
    { name: "squirrel", image: "squirrel.png" }
];

/*
* Game time generator
*/
let seconds = 0,
minutes = 0;
let movesCount = 0,
winCount = 0;
let timeGenerator = () => {
    seconds += 1;
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
let minutesValues = minutes < 10 ? `0${minutes}` : minutes;
timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

/*
* Moves calculator
*/
let movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};