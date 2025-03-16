// Função de login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let loginMessage = document.getElementById("login-message");

    // Se a div de mensagem não existe, cria dinamicamente
    if (!loginMessage) {
        loginMessage = document.createElement("div");
        loginMessage.id = "login-message";
        loginMessage.classList.add("login-message");
        document.body.appendChild(loginMessage);
    }

    // Verificação de login com duas opções válidas
    if (
        (username === "brenogomesmundial" && password === "09042008") ||
        (username === "admin" && password === "1234")
    ) {
        sessionStorage.setItem("loggedIn", "true");

        loginMessage.textContent = "Login bem-sucedido!";
        loginMessage.style.opacity = "1";
        loginMessage.style.visibility = "visible";
        loginMessage.style.color = "green";

        // Redirecionamento personalizado
        const destination = (username === "brenogomesmundial") ? "produtos.html" : "home.html";
        setTimeout(() => {
            window.location.href = destination;
        }, 2000);
    } else {
        loginMessage.textContent = "Usuário ou senha incorretos.";
        loginMessage.style.opacity = "1";
        loginMessage.style.visibility = "visible";
        loginMessage.style.color = "red";
    }
}

// Função de logout
function logout() {
    sessionStorage.removeItem("loggedIn");
    alert("Você foi desconectado.");
    window.location.href = "index.html";
}

// Verificação de login ao carregar a página
function checkLogin() {
    const isLoggedIn = sessionStorage.getItem("loggedIn");
    const currentPage = window.location.pathname;

    if (isLoggedIn === "true" && (currentPage.endsWith("/") || currentPage.endsWith("index.html"))) {
        window.location.href = "home.html";
    } else if (!isLoggedIn && currentPage.endsWith("home.html")) {
        window.location.href = "index.html";
    }
}

// Executa verificação de login após carregamento da página
document.addEventListener("DOMContentLoaded", checkLogin);

