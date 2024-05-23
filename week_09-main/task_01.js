function login(username, password) {
   
    if (username === "admin" && password === "admin123") {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", username);
     
        updateUI();
    } else {
        alert("Invalid username or password");
    }
}

function logout() {
    
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    updateUI();
}
function checkLoginStatus() {
    return localStorage.getItem("isLoggedIn") === "true";
}


function updateUI() {
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");
    const greeting = document.getElementById("greeting");

    if (checkLoginStatus()) {
        const username = localStorage.getItem("username");
        greeting.textContent = "Welcome, " + username;
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
    } else {
        greeting.textContent = "Please log in";
        loginButton.style.display = "block";
        logoutButton.style.display = "none";
    }
}

window.addEventListener("load", function () {
    updateUI();
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
});

document.getElementById("logoutButton").addEventListener("click", function () {
    logout();
});
