// Função de login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const successMessage = document.getElementById("successMessage");

    // Simulação de verificação de login (substitua com um backend real)
    if (username === "brenogomesmundial" && password === "09042008") {
        // Exibe a mensagem de sucesso
        successMessage.style.display = "block";

        // Aguarda 2 segundos e redireciona para a home
        setTimeout(() => {
            window.location.href = "home.html";
        }, 2000);
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

// Função de logout
function logout() {
    alert("Você foi desconectado.");
    window.location.href = "index.html"; // Redireciona de volta para a página de login
}
