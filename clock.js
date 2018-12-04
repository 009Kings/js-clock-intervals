document.addEventListener("DOMContentLoaded", function(){
    startYerClocks();
    setInterval(startYerClocks, 100);
});

//Easy access handles
let hrStatus = minStatus = secStatus = 0;
let secondHand = document.getElementById("second");
let minuteHand = document.getElementById("minute");
let hourHand = document.getElementById("hour");

function setTime() {
    var d = new Date();
    hrStatus = d.getHours();
    minStatus = d.getMinutes();
    secStatus = d.getSeconds();
    console.log(`${hrStatus}:${minStatus}:${secStatus}`);
}
function render() {
    minAndSecMovement(secStatus, secondHand);
    minAndSecMovement(minStatus, minuteHand);
    hrMove();
}

function startYerClocks() {
    setTime();
    render();
}

// Determines the state of min/sec and sets arm rotation to match
function minAndSecMovement(state, element) {
    var baseIncriment = 6;
    var currentAngle = state * baseIncriment;
    element.style.transform = `rotate(${currentAngle}deg)`;
}

function hrMove() {
    var baseIncriment = .5;
    var minAngle = minStatus * baseIncriment;
    var currentAngle = (hrStatus * 30) + minAngle;
    hourHand.style.transform = `rotate(${currentAngle}deg)`;
}