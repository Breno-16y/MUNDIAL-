// Função de login simulada
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    if (username === "brenogomesmundial" && password === "09042008") {
        loginMessage.textContent = "Login bem-sucedido!";
        loginMessage.style.opacity = "1";
        loginMessage.style.visibility = "visible";

        setTimeout(() => {
            window.location.href = "home.html"; 
        }, 2000);
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
