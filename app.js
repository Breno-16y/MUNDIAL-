// Função de login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginModal = document.getElementById("loginModal");

    // Simulação de verificação de login
    if (username === "brenogomesmundial" && password === "09042008") {
        // Exibe o modal de sucesso
        loginModal.style.display = "flex";

        // Aguarda 2 segundos, depois fecha o modal e redireciona
        setTimeout(() => {
            loginModal.style.display = "none"; // Esconde a mensagem
            window.location.href = "home.html"; // Redireciona para a página inicial
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
