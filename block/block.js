const cleanHost = window.location.hostname.replace(/^www\./, "")
const unblockedHost = sessionStorage.getItem("unblocked_host"); 
const unblockTime = 20;

// Check for url matching list
if (blockedURLs.includes(cleanHost) && unblockedHost != cleanHost) {
  sessionStorage.setItem("unblocked_host", cleanHost);
  const extensionPageUrl = browser.runtime.getURL("block/block.html") + "?to=" + encodeURIComponent(window.location.href);
  window.location.replace(extensionPageUrl);
  console.log("redirected to block page");
} if (unblockedHost == cleanHost) {
    console.log("page unblocked");
    reblock()
}

function reblock() {
    setTimeout(() => {
        console.log("page reblocked")
        sessionStorage.setItem("unblocked_host", null)
        window.location.reload()
    }, unblockTime * 1000);
}
