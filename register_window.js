let username;
let password;
let email;

function backToGame() {
    window.location.href = "index.html";
}

function openLoggingInWindow() {
    window.location.href = "login_window.html";
}

function gatherLogingData() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    // Tutaj możesz dodać kod do wysłania danych do serwera lub dalszego przetwarzania
}








