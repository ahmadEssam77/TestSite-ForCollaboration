
let user = prompt("Write your name to welcome you xD");
let welcomeUserDisplay = document.querySelector(".welcomeUserDisplay");

welcomeUserDisplay.innerHTML = `Welcome ${user} :)`;

function displayTime() {
    let currentTime = new Date().toLocaleTimeString();
    document.querySelector("#demo").innerHTML = currentTime;
}

setInterval(displayTime)




// ===============================
