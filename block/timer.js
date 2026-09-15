const FULL_DASH_ARRAY = 2 * Math.PI * 45;  // 45 is the radius of the circle in the svg viewbox
const TOTAL_TIME = 20;

const progressCircle = document.querySelector(".timer-remaining");
progressCircle.style.strokeDasharray = FULL_DASH_ARRAY;

const timeDisplay = document.getElementById("time-display");

const finishTime = Date.now() + TOTAL_TIME * 1000;

function updateTimer() {
    const currentTime = Date.now();
    const timeRemaining = Math.max(0, Math.ceil((finishTime - currentTime) / 1000));

    const minutes = Math.floor(timeRemaining / 60).toString();
    const seconds = (timeRemaining % 60).toString().padStart(2, "0");
    if (minutes > 0) {
        timeDisplay.textContent = `${minutes}:${seconds}`;
    } else {
        timeDisplay.textContent = `${seconds}`;
    }
    const fraction = Math.max(((finishTime - currentTime) / (TOTAL_TIME * 1000)), 0);
    const strokeDashOffset = FULL_DASH_ARRAY * (fraction - 1) // negative for clockwise timer

    progressCircle.style.strokeDashoffset = strokeDashOffset;

    if (timeRemaining > 0) {
        requestAnimationFrame(updateTimer)
    }
}


updateTimer();