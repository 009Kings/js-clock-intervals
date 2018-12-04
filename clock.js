document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content has loaded");
	
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
    if (hrStatus >= 12) {
        hrStatus = 0;
    }
    console.log(`${hrStatus}:${minStatus}:${secStatus}`);
}

setInterval(moveSeconds, 1);
