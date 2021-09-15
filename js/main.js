(function (){
    let userName = prompt("Write your name to welcome you xD");
    let firstCharacter = userName.charAt(0);
    firstCharacter = firstCharacter.toUpperCase();
    let slicingUserName = userName.slice(1);
    slicingUserName = slicingUserName.toLowerCase();
    userName = firstCharacter + slicingUserName;


    document.querySelector("h1").style.display = "block";
    
    setTimeout( function(){
        welocmeUser(userName);
    }, 3000)

})()


function welocmeUser(userName){
    let mainContent = document.querySelector(".content");
    mainContent.innerHTML = `<p class="userName forth-color">Welcome ${userName} :)</p>`;
}


