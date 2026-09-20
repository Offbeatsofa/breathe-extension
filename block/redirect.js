const waitTime = 3; // TODO import from settings
const urlParams = new URLSearchParams(window.location.search)
const originalUrl = urlParams.get("to")


setTimeout(() => {
    console.log("time to add buttons")
    showButtons()
}, waitTime * 1000);

function showButtons() {
    console.log("adding button")
    const continueButton = document.getElementById("continueButton")
    continueButton.addEventListener("click", () => {
        window.location.replace(originalUrl)
    })
    continueButton.classList.toggle("hidden")
}