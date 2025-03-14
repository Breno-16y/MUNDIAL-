// Função de login simulada
function handleLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de verificação de login (pode ser substituído por autenticação real)
    if (username === "brenogomesmundial" && password === "09042008") {
        // Exibe a mensagem de sucesso
        const successMessage = document.getElementById("success-message");
        successMessage.classList.remove("hidden");
        successMessage.classList.add("visible");

        // Redireciona para a página inicial (home.html) após login bem-sucedido
        setTimeout(() => {
            window.location.href = "home.html"; // Redireciona para a página home
        }, 2000); // Espera 2 segundos antes de redirecionar
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

// Função de logout
function logout() {
    alert("Você foi desconectado.");
    window.location.href = "index.html"; // Redireciona de volta para a página de login (index.html)
}
