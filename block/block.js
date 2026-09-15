const cleanHost = window.location.hostname.replace(/^www\./, "")
const unblockedHosts = JSON.parse(sessionStorage.getItem("unblocked_hosts")); // sessionStorage can only contain strings

// Check for url matching list
if (blockedURLs.includes(cleanHost) && !unblockedHosts.contains(cleanHost)) {
  unblockedHosts.push(cleanHost)
  sessionStorage.setItem("unblocked_hosts", JSON.stringify(unblockedHosts));
  const extensionPageUrl = browser.runtime.getURL("block/block.html") + "?to=" + encodeURIComponent(window.location.href);
  window.location.href = extensionPageUrl;
  console.log("redirected to block page");
}
