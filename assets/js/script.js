/*
* Basic JavaScript structure
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

