// Função de login simulada
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de verificação de login (pode ser substituído por autenticação real)
    if (username === "brenogomesmundial" && password === "09042008") {
        alert("Login bem-sucedido!");
        // Redireciona para a página inicial (home.html) após login bem-sucedido
        window.location.href = "home.html"; // Redireciona para a página home
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

// Função de logout
function logout() {
    alert("Você foi desconectado.");
    window.location.href = "index.html"; // Redireciona de volta para a página de login (index.html)
}

