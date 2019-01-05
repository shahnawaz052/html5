var playing = false;
var score;
var action;
var timeremaining;
// if we click on start/reset
document.getElementById("startreset").onclick = function() {
    // if we are playing 
    if (playing == true) {
        location.reload(); // reloading our page

    } else { // if we are not playing
        playing = true;
        // set score to 0
        score = 1;
        document.getElementById("scorevalue").innerHTML = score;

        // show count down box
        document.getElementById("timeremaining").style.display = "block";
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        // change start to reset button
        document.getElementById("startreset").innerHTML = "Reset Game";

        // start count down
        startcountdown();
    }
}

function startcountdown() {
    action = setInterval(function() {
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0) { // Game over
            stopcountdown();
            document.getElementById("gameover").style.display = "block";
            document.getElementById("gameover").innerHTML =
                "<p>Game Over!</p> </p>Your score is: " + score + " </p>";

            document.getElementById("timeremaining").style.display = "none";
        }
    }, 1000);
}

function stopcountdown() {
    clearInterval(action);
}
