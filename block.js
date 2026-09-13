// Function to create and show the full-screen overlay
function triggerPause(durationSeconds, messageText) {
  // Prevent duplicate overlays
  if (document.getElementById("mindful-pause-overlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "mindful-pause-overlay";
  
  // Style overlay to cover the whole screen and block interaction
  Object.assign(overlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(15, 23, 42, 0.95)",
    color: "#f8fafc",
    zIndex: "999999999",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "system-ui, sans-serif",
    fontSize: "24px"
  });

  const textNode = document.createElement("div");
  textNode.innerText = messageText;
  overlay.appendChild(textNode);

  const countdownNode = document.createElement("div");
  countdownNode.style.fontSize = "48px";
  countdownNode.style.fontWeight = "bold";
  countdownNode.style.marginTop = "16px";
  overlay.appendChild(countdownNode);

  // Append overlay before body renders completely if called early
  (document.body || document.documentElement).appendChild(overlay);

  let remaining = durationSeconds;
  countdownNode.innerText = remaining;

  const countdownTimer = setInterval(() => {
    remaining--;
    if (remaining > 0) {
      countdownNode.innerText = remaining;
    } else {
      clearInterval(countdownTimer);
      overlay.remove();
    }
  }, 1000);
}

// 1. Initial 1-second pause on page load
triggerPause(1, "Take a breath...");

// 2. Periodic pause every 15 minutes (900,000 ms)
const RECURRING_INTERVAL_MS = 15 * 60 * 1000; 
setInterval(() => {
  triggerPause(5, "Time for a quick check-in. Still want to be here?");
}, RECURRING_INTERVAL_MS);