(function (){
    let userName = prompt("Write your name to welcome you xD");
    let firstCharacter = userName.charAt(0);    // Detect or select the first letter of the user name
    firstCharacter = firstCharacter.toUpperCase(); // Change it to be upper case style
    let slicingUserName = userName.slice(1);  // Select or cut the whole user name except the first letter
    slicingUserName = slicingUserName.toLowerCase(); // Make the rest of the name except the first letter to be lower case style
    userName = firstCharacter + slicingUserName;  


    document.querySelector("h1").style.display = "block";
    
    setTimeout( function(){
        welocmeUser(userName);
    }, 3000)

})();


function welocmeUser(userName){
    let mainContent = document.querySelector(".content");
    mainContent.innerHTML = `<p class="userName forth-color">Welcome ${userName} :)</p>`;
}


