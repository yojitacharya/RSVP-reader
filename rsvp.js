var speed;
var startB = true;
var text = [];
var textString = "";
var speedMS = 0;
var IntervalID;
var currentWordIndex = 0;

window.onload = function() {
    document.getElementById("start").addEventListener("click", start);
}

function start() {

    if(startB == true) {
        
        startB = false;

        speed = document.getElementById("speed").value;

        textString = document.getElementById("insert").value;
        text = textString.split(" ");
        console.log(text);

        document.getElementById("start").innerText = "Stop";

        speedMS = 60000/speed;

    IntervalID = setInterval(changeF, speedMS);

    }

    else {
        startB = true;
        document.getElementById("start").innerText = "Start";

        clearInterval(IntervalID);

        currentWordIndex = 0;

        document.getElementById("change").innerText ="This Text Will Change";

    }
}

function changeF() {
    if (currentWordIndex < text.length) {
        document.getElementById("change").innerText = text[currentWordIndex];
        currentWordIndex++;
    } else {
        currentWordIndex = 0;
        clearInterval(IntervalID);
        document.getElementById("change").innerText ="This Text Will Change";
    }
}
