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

        // Armazena login na sessão
        sessionStorage.setItem("loggedIn", "true");

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
    sessionStorage.removeItem("loggedIn"); // Remove o estado de login
    alert("Você foi desconectado.");
    window.location.href = "index.html"; // Redireciona para a página de login
}

// Função para verificar se o usuário está autenticado e redirecioná-lo
function checkLogin() {
    const isLoggedIn = sessionStorage.getItem("loggedIn");

    if (isLoggedIn === "true" && window.location.pathname.includes("index.html")) {
        window.location.href = "home.html"; // Se já estiver logado, redireciona para home
    } else if (!isLoggedIn && window.location.pathname.includes("home.html")) {
        window.location.href = "index.html"; // Se não estiver logado, volta para login
    }
}

// Verifica o login sempre que a página carregar
document.addEventListener("DOMContentLoaded", checkLogin);
