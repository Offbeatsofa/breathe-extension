const waitTime = 5; // TODO import from settings
const urlParams = new URLSearchParams(window.location.search)
const originalUrl = urlParams.get("to")


setTimeout(() => {
    console.log("redirect now")
    window.location.replace(originalUrl)
    console.log("called reblock")
}, waitTime * 1000);