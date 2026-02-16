let username;
let password;
const API_BASE_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000"
    : "https://your-render-backend.onrender.com";


function openRegistrationForm() {
    window.location.href = "register_window.html";  
}

function backToGame() {
    window.location.href = "index.html";
}

async function gatherLogingData() {
    username = document.getElementById("username").value.trim();
    password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please provide username and password.");
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Login failed.");
            return;
        }

        alert(`Welcome, ${data.user.username}!`);
        window.location.href = "index.html";
    } catch (error) {
        alert("Cannot connect to backend server. Is it running?");
    }
}