function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginModal = document.getElementById("loginModal");

    if (username === "brenogomesmundial" && password === "09042008") {
        loginModal.style.display = "flex";

        setTimeout(() => {
            loginModal.style.display = "none";
            window.location.href = "home.html";
        }, 2000);
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

function logout() {
    alert("Você foi desconectado.");
    window.location.href = "index.html";
}
