let target = 0;
let attempt = 0;
const maxAttempt = 5;
 
const guessInput = document.getElementById("guess-value");
const guessBtn = document.getElementById("guess-btn");
const restartBtn = document.getElementById("restart-btn");
const attemptText = document.getElementById("attempt");
const result = document.getElementById("result");
 
// Initial screen
restartBtn.style.display = "block";
guessBtn.style.display = "none";
attemptText.textContent = "0";
result.textContent = "";
 
restartBtn.onclick = function () {
    target = Math.floor(Math.random() * 20) + 1;
    attempt = 0;
 
    guessInput.value = "";
    guessInput.focus();
 
    attemptText.textContent = "0";
    result.textContent = "";
 
    restartBtn.style.display = "none";
    guessBtn.style.display = "inline";
};
 
guessBtn.onclick = function () {
    let value = guessInput.value;
 
    if (value === "" || isNaN(value)) {
        return;
    }
 
    value = Number(value);
    attempt++;
    attemptText.textContent = attempt;
 
    if (value > target) {
        result.textContent = value + " is too high";
    } else if (value < target) {
        result.textContent = value + " is too low";
    } else {
        result.textContent = "You WIN";
        guessBtn.style.display = "none";
        restartBtn.style.display = "inline";
        return;
    }
 
    if (attempt >= maxAttempt) {
        result.textContent = "You LOSE";
        guessBtn.style.display = "none";
        restartBtn.style.display = "inline";
    }
 
    guessInput.value = "";
    guessInput.focus();
};