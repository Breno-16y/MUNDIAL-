function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de verificação de login (pode ser substituído por autenticação real)
    if (username === "brenomundial@gmail.com" && password === "09/04/2008") {
        alert("Login bem-sucedido!");
        // Redirecionar ou alterar para uma página de conteúdo (apenas exemplo de alert)
        window.location.href = "home.html"; // Você pode criar uma página home.html ou redirecionar conforme necessário
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
