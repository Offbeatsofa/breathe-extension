const cleanHost = window.location.hostname.replace(/^www\./, "")
console.log(cleanHost);
console.log(blockedURLs);

// Check for url matching list
if (blockedURLs.includes(cleanHost)) {
  const extensionPageUrl = browser.runtime.getURL("block/block.html") + "?to=" + encodeURIComponent(window.location.href);
  window.location.href = extensionPageUrl;
}

// Function to create and show the full-screen overlay
// function triggerPause(durationSeconds, messageText) {
//   // Prevent duplicate overlays
//   if (document.getElementById("breathe-overlay")) return;

//   const overlay = document.createElement("div");
//   overlay.id = "breathe-overlay";

//   // Style overlay to cover the whole screen and block interaction
//   Object.assign(overlay.style, {

//   });

//   const textNode = document.createElement("div");
//   textNode.innerText = messageText;
//   overlay.appendChild(textNode);

//   const countdownNode = document.createElement("div");
//   countdownNode.style.fontSize = "48px";
//   countdownNode.style.fontWeight = "bold";
//   countdownNode.style.marginTop = "16px";
//   overlay.appendChild(countdownNode);

//   // Append overlay before body renders completely if called early
//   (document.body || document.documentElement).appendChild(overlay);

//   let remaining = durationSeconds;
//   countdownNode.innerText = remaining;

//   const countdownTimer = setInterval(() => {
//     remaining--;
//     if (remaining > 0) {
//       countdownNode.innerText = remaining;
//     } else {
//       clearInterval(countdownTimer);
//       overlay.remove();
//     }
//   }, 1000);
// }




// // 2. Periodic pause every 15 minutes (900,000 ms)
// const RECURRING_INTERVAL_MS = 1 * 60 * 1000;
// setInterval(() => {
//   triggerPause(5, "Time for a quick check-in. Still want to be here?");
// }, RECURRING_INTERVAL_MS);
