let username;
let password;


function openRegistrationForm() {
    window.location.href = "register_window.html";  
}

function backToGame() {
    window.location.href = "index.html";
}

function gatherLogingData() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

}