// Função de login simulada
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    // Simulação de credenciais corretas
    if (username === "brenogomesmundial" && password === "09042008") {
        // Armazena login na sessão
        sessionStorage.setItem("loggedIn", "true");

        // Exibe mensagem de sucesso
        loginMessage.textContent = "Login bem-sucedido!";
        loginMessage.style.opacity = "1";
        loginMessage.style.visibility = "visible";

        // Redireciona após 2 segundos
        setTimeout(() => {
            window.location.href = "home.html"; // Redirecionamento após login
        }, 2000);
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

// Função de logout
function logout() {
    sessionStorage.removeItem("loggedIn"); // Remove login da sessão
    alert("Você foi desconectado.");
    window.location.href = "index.html"; // Redireciona para a página de login
}

// Verifica se o usuário está autenticado e redireciona para a página correta
function checkLogin() {
    const isLoggedIn = sessionStorage.getItem("loggedIn");
    const currentPage = window.location.pathname;

    // Verifica se o usuário está logado ao tentar acessar a página de login
    if (isLoggedIn === "true" && currentPage.includes("index.html")) {
        window.location.href = "home.html"; // Se já está logado, vai para home
    } else if (isLoggedIn === "null" && currentPage.includes("home.html")) {
        // Se não está logado e tentar acessar home.html, redireciona para login
        window.location.href = "index.html"; 
    }
}

// Executa a verificação de login ao carregar a página
document.addEventListener("DOMContentLoaded", checkLogin);
