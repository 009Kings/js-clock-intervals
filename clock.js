document.addEventListener("DOMContentLoaded", function(){
    var d = new Date();
    console.log(d);
    hrStatus = d.getHours();
    minStatus = d.getMinutes();
    secStatus = d.getSeconds();
    moveSeconds();
    setInterval(moveSeconds, 1000);
});

let hrStatus = minStatus = secStatus = 0;
function moveSeconds () {
    secStatus ++;
    if (secStatus >= 60) {
        secStatus = 0;
        minStatus +=1
    }
    if (minStatus >= 60) {
        minStatus=0;
        hrStatus += 1; 
    };
    if (hrStatus >= 24) {
        hrStatus = 0;
    }
    console.log(`${hrStatus}:${minStatus}:${secStatus}`);
    minAndSecMovement(secStatus, secondHand);
    minAndSecMovement(minStatus, minuteHand);
    hrMove();
}

//Easy access handles
let secondHand = document.getElementById("second");
let minuteHand = document.getElementById("minute");
let hourHand = document.getElementById("hour");

// Determines the state of min/sec and sets arm rotation to match
function minAndSecMovement(state, element) {
    var baseIncriment = 6;
    var currentAngle = state * baseIncriment;
    element.style.transform = `rotate(${currentAngle}deg)`;
}
//minStatus % 12 === 0 +=1 to sth 30d == 1hr rotate.5/min
function hrMove() {
    var baseIncriment = .5;
    var minAngle = minStatus * baseIncriment;
    var currentAngle = (hrStatus * 30) + minAngle;
    hourHand.style.transform = `rotate(${currentAngle}deg)`;
}