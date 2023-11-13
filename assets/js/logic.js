// click and hide starting quix content
var startScreenEl = document.getElementById("start-screen");
startScreenEl.addEventListener("click", hideStartScreen);

function hideStartScreen() {
    startScreenEl.style.display = 'none';
}