const waitTime = 5; // TODO import from settings
const urlParams = new URLSearchParams(window.location.search)
const originalUrl = urlParams.get("to")


setTimeout(() => {
    console.log("redirect now")
    // window.location.href = originalUrl (will cause infinite redirects until unblockedHosts is working)
}, waitTime * 1000);