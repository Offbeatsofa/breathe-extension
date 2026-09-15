const waitTime = 5; // TODO import from settings

setTimeout(() => {
    console.log("redirect now");
    window.location.href = "http://endless.horse/"
}, waitTime * 1000);