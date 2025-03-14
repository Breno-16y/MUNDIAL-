function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de verificação de login (pode ser substituído por autenticação real)
    if (username === "brenogomesmundial" && password === "09042008") {
        // Esconde a página de login e exibe a página de perfil
        document.getElementById("login").style.display = "none"; // Esconde o formulário de login
        document.getElementById("profile").classList.remove("hidden"); // Exibe a página de perfil
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
