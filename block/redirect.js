const waitTime = 10; // TODO import from settings
const urlParams = new URLSearchParams(window.location.search)
const originalUrl = urlParams.get("to")


setTimeout(() => {
    showButton()
}, waitTime * 1000);

function showButton() {
    console.log("adding button")
    const continueButton = document.getElementById("continueButton")
    continueButton.addEventListener("click", () => {
        window.location.replace(originalUrl)
    })
    continueButton.classList.add("visible")
    continueButton.disabled = false
}