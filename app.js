// Função de login simulada
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    if (username === "brenogomesmundial" && password === "09042008") {
        // Exibe a mensagem de login bem-sucedido
        loginMessage.textContent = "Login bem-sucedido!";
        loginMessage.style.opacity = "1";
        loginMessage.style.visibility = "visible";

        // Aguarda 2 segundos antes de redirecionar
        setTimeout(() => {
            window.location.href = "home.html"; // Redireciona para a página home
        }, 2000);
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

// Função de logout
function logout() {
    alert("Você foi desconectado.");
    window.location.href = "index.html"; // Redireciona para a página de login
}

// Verifica se o usuário está autenticado e redireciona para home.html se já estiver logado
function checkLogin() {
    const isLoggedIn = sessionStorage.getItem("loggedIn");

    if (isLoggedIn === "true") {
        window.location.href = "home.html"; // Redireciona se já estiver logado
    }
}

// Chama checkLogin() quando a página de login carrega
document.addEventListener("DOMContentLoaded", checkLogin);
