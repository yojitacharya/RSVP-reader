var speed;
var time = 0;
var start = true;

window.onload = function() {
    setInterval(addTime,0.5)
    var text = [];
    document.getElementById("start").addEventListener("click", start);
}

function addTime() {
    time += 1;
}

function start() {
    time = 0;
    speed = document.getElementById("speed").value;
    document.getElementById("input").innerHTML = text;


    if(start == true) {
        start = false;
        document.getElementById("start").innerText = "Stop";
    }

    else {
        start = true;
        document.getElementById("start").innerText = "Start";
    }
}

