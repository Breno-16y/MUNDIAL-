function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de verificação de login (pode ser substituído por autenticação real)
    if (username === "admin" && password === "123456") {
        // Esconde a página de login e exibe o conteúdo do site
        document.getElementById("login").style.display = "none";
        document.getElementById("header").classList.remove("hidden");
        document.getElementById("home").classList.remove("hidden");
        document.getElementById("about").classList.remove("hidden");
        document.getElementById("services").classList.remove("hidden");
        document.getElementById("contact").classList.remove("hidden");
        document.querySelector("footer").classList.remove("hidden");
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
