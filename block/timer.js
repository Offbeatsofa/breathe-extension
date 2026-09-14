const FULL_DASH_ARRAY = 2 * Math.PI * document.querySelector(".timer").clientWidth;
const TOTAL_TIME = 60; // get from settings

const progressCircle = document.querySelector(".timer-remaining");
const timeDisplay = document.getElementById("time-display");

const finishTime = Date.now() + TOTAL_TIME * 1000;

function updateTimer() {
    const currentTime = Date.now();
    const timeRemaining = Math.max(0, Math.ceil((finishTime - currentTime) / 1000));

    const minutes = Math.floor(timeRemaining / 60).toString();
    const seconds = (timeRemaining % 60).toString().padStart(2, "0");
    timeDisplay.textContent = "${minutes}:${seconds}";

    const fraction = Math.max(((targetTime - currentTime) / (TOTAL_TIME * 1000)), 0);
    const strokeDashOffset = FULL_DASH_ARRAY * fraction

    progressCircle.style.strokeDashOffset = strokeDashOffset;

    if (timeRemaining > 0) {
        requestAnimationFrame(updateTimer)
    }
}

updateTimer();