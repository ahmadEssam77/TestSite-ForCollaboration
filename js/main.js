let user = prompt("Write your name to welcome you xD", "Ahmad");
let welcomeUserDisplay = document.querySelector(".welcomeUserDisplay");

welcomeUserDisplay.innerHTML = `Welcome ${user} :)`;