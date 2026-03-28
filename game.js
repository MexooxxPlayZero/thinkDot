// ===============================
// THINK DOT — GAME VARIABLES
// ===============================
let difficulty = "easy";
let timer = 60;
let score = 0;
let activeDot = null;
let gameInterval = null;
let timerInterval = null;

// ===============================
// SCREEN SWITCHING
// ===============================
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

function returnToMenu() {
    stopGame();
    showScreen("main-menu");
}

// ===============================
// DIFFICULTY SETTINGS
// ===============================
function setDifficulty(level) {
    difficulty = level;
}

// How fast dots change
function getSpeed() {
    if (difficulty === "easy") return 900;
    if (difficulty === "medium") return 600;
    if (difficulty === "hard") return 350;
}

// ===============================
// START GAME
// ===============================
function startGame() {
    score = 0;
    timer = 60;
    document.getElementById("score").innerText = "Score: 0";
    document.getElementById("timer").innerText = timer;

    showScreen("game-screen");

    startTimer();
    startDotLoop();
}

// ===============================
// TIMER
// ===============================
function startTimer() {
    timerInterval = setInterval(() => {
        timer--;
        document.getElementById("timer").innerText = timer;

        if (timer <= 0) {
            stopGame();
            returnToMenu();
        }
    }, 1000);
}

// ===============================
// DOT LOGIC
// ===============================
function startDotLoop() {
    gameInterval = setInterval(() => {
        lightRandomDot();
