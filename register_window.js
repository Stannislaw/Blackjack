let username;
let password;
let email;
const API_BASE_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000"
    : "https://your-render-backend.onrender.com";

function backToGame() {
    window.location.href = "index.html";
}

function openLoggingInWindow() {
    window.location.href = "login_window.html";
}

async function gatherRegistrationData() {
    username = document.getElementById("username").value.trim();
    password = document.getElementById("password").value;
    email = document.getElementById("email").value.trim();

    if (!username || !password || !email) {
        alert("Please fill username, password and email.");
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password, email })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Registration failed.");
            return;
        }

        alert("Account created! You can log in now.");
        window.location.href = "login_window.html";
    } catch (error) {
        alert("Cannot connect to backend server. Is it running?");
    }
}








