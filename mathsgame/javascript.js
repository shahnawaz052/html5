var playing = false;
var score = 0;
// if we click on start/reset
document.getElementById("startreset").onclick = function() {
    // if we are playing 
    if (playing == true) {
        location.reload(); // reloading our page

    } else {
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
    }
}
