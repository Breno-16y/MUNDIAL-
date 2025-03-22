// Função de login simulada
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

    // Simulação de credenciais corretas
    const validCredentials = [
        { username: "brenogomesmundial", password: "09042008" },
        { username: "mariaeduardaoliveiradasilva", password: "09122008" },
        { username: "miguelaguiarcostaneto", password: "09072008" },
        { username: "yasmincaldeiraribeiro", password: "09032006" },
        { username: "anaclarapitzerdelima", password: "11092007" },
        { username: "anabeatrizdonascimentopessoa", password: "26092008" },
        { username: "marceloreispereiracosta", password: "14052009" },
        { username: "rafaelwagnerrdossantos", password: "17032009" },
        { username: "mariaclaradossantosmoura", password: "24072007" },
        { username: "mariaeduardasantosferreira", password: "31102008" },
        { username: "laylagonçalvesdemolimpio", password: "31052008" },
        { username: "anaaliaamvantival", password: "15092005" },
        { username: "joaofelipeferreirasampaio", password: "05012009" },
        { username: "marcelodesouzafreitas", password: "28052008" },
        { username: "matheusmendes", password: "20102007" },
        { username: "nicolesantos", password: "06032008" },
        { username: "alicevictoriaferreiradasilva", password: "10032005" },
        { username: "sabrinabatistarocha", password: "16022006" },
        { username: "adriellesantanamachado", password: "24102007" },
        { username: "miguelvieirademesquita", password: "04092007" },
        { username: "mariagabriellesilvasantosdefarias", password: "25042007" },
        { username: "leticiamoledopereira", password: "08082008" },
        { username: "raissadasilvalimadossantos", password: "03102006" },
        { username: "lavinyalimaferreira", password: "15012009" },
        { username: "mariavitoriacordeiro", password: "20122005" },
        { username: "anaclaracostasantos", password: "10072007" },
        { username: "rafaelacristinadossantos", password: "18112006" },
        { username: "mariaeduardadossantosbraz", password: "29102008" },
        { username: "williampachecomachado", password: "16111983" },
        { username: "daniellimadesouza", password: "04122007" },
        { username: "visitante", password: "123456" },
        { username: "user31", password: "password31" }
    ];

    // Verifica se as credenciais são válidas
    const validLogin = validCredentials.find(
        (user) => user.username === username && user.password === password
    );

    if (validLogin) {
        // Armazena login na sessão
        sessionStorage.setItem("loggedIn", "true");

        // Exibe mensagem de sucesso
        loginMessage.textContent = "Login bem-sucedido!";
        loginMessage.style.opacity = "1";
        loginMessage.style.visibility = "visible";

        // Redireciona após 2 segundos
        setTimeout(() => {
            window.location.href = "home.html";
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

    if (isLoggedIn === "true" && (currentPage === "/" || currentPage.endsWith("index.html"))) {
        // Se já está logado e tentar acessar index.html, redireciona para home
        window.location.href = "home.html";
    } else if (!isLoggedIn && currentPage.endsWith("home.html")) {
        // Se não está logado e tentar acessar home.html, redireciona para login
        window.location.href = "index.html";
    }
}

// Executa a verificação de login ao carregar a página
document.addEventListener("DOMContentLoaded", checkLogin);
