if(document.querySelector("body").classList.contains("primary-bg-color")){
    let user = prompt("Write your name to welcome you xD");
    let welcomeUserDisplay = document.querySelector(".welcomeUserDisplay");

    welcomeUserDisplay.innerHTML = `Welcome ${user} :)`;
}
else{
    function displayTime(){
        let currentTime = new Date().toLocaleTimeString();
        document.querySelector("#demo").innerHTML = currentTime;
    }
    
    setInterval(displayTime)
}



// ===============================
