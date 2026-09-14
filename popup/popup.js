// Open the settings page in its own tab instead of inside the popup
document.getElementById("open-settings").addEventListener("click", (event) => {
  event.preventDefault();
  chrome.runtime.openOptionsPage();
  window.close();
});
