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
        { username: "brenogomesmundial", password: "09042008", fullName: "Breno Gomes De Lima Andrade" },
        { username: "mariaeduardaoliveiradasilva", password: "09122008", fullName: "Maria Eduarda Oliveira Da Silva" },
        { username: "miguelaguiarcostaneto", password: "09072008", fullName: "Miguel Aguiar Costa Neto" },
        { username: "yasmincaldeiraribeiro", password: "09032006", fullName: "Yasmin Caldeira Ribeiro" },
        { username: "anaclarapitzerdelima", password: "11092007", fullName: "Ana Clara Pitzer de Lima" },
        { username: "anabeatrizdonascimentopessoa", password: "26092008", fullName: "Ana Beatriz do Nascimento Pessoa" },
        { username: "marceloreispereiracosta", password: "14052009", fullName: "Marcelo Reis Pereira Costa" },
        { username: "rafaelwagnerrdossantos", password: "17032009", fullName: "Rafael Wagner dos Santos" },
        { username: "mariaclaradossantosmoura", password: "24072007", fullName: "Maria Clara dos Santos Moura" },
        { username: "mariaeduardasantosferreira", password: "31102008", fullName: "Maria Eduarda Santos Ferreira" },
        { username: "laylagonçalvesdemolimpio", password: "31052008", fullName: "Layla Gonçalves de Molimpio" },
        { username: "anaaliaamvantival", password: "15092005", fullName: "Ana Ália Amvantival" },
        { username: "joaofelipeferreirasampaio", password: "05012009", fullName: "João Felipe Ferreira Sampaio" },
        { username: "marcelodesouzafreitas", password: "28052008", fullName: "Marcelo de Souza Freitas" },
        { username: "matheusmendes", password: "20102007", fullName: "Matheus Mendes" },
        { username: "nicolesantos", password: "06032008", fullName: "Nicole Santos" },
        { username: "alicevictoriaferreiradasilva", password: "10032005", fullName: "Alice Victoria Ferreira da Silva" },
        { username: "sabrinabatistarocha", password: "16022006", fullName: "Sabrina Batista Rocha" },
        { username: "adriellesantanamachado", password: "24102007", fullName: "Adrielle Santana Machado" },
        { username: "miguelvieirademesquita", password: "04092007", fullName: "Miguel Vieira de Mesquita" },
        { username: "mariagabriellesilvasantosdefarias", password: "25042007", fullName: "Maria Gabrielle Silva Santos de Farias" },
        { username: "leticiamoledopereira", password: "08082008", fullName: "Letícia Moledo Pereira" },
        { username: "raissadasilvalimadossantos", password: "03102006", fullName: "Raíssa da Silva Lima dos Santos" },
        { username: "lavinyalimaferreira", password: "15012009", fullName: "Lavínya Lima Ferreira" },
        { username: "mariavitoriacordeiro", password: "20122005", fullName: "Maria Vitória Cordeiro" },
        { username: "anaclaracostasantos", password: "10072007", fullName: "Ana Clara Costa Santos" },
        { username: "rafaelacristinadossantos", password: "18112006", fullName: "Rafaela Cristina dos Santos" },
        { username: "mariaeduardadossantosbraz", password: "29102008", fullName: "Maria Eduarda dos Santos Braz" },
        { username: "williampachecomachado", password: "16111983", fullName: "William Pacheco Machado" },
        { username: "daniellimadesouza", password: "04122007", fullName: "Danielle Lima de Souza" },
        { username: "visitante", password: "123456", fullName: "Visitante" },
        { username: "user31", password: "password31", fullName: "Usuário 31" }
    ];

    // Verifica se as credenciais são válidas
    const validLogin = validCredentials.find(
        (user) => user.username === username && user.password === password
    );

    if (validLogin) {
        // Armazena login e nome completo na sessão
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("fullName", validLogin.fullName); // Armazena o nome do usuário

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
    sessionStorage.removeItem("fullName"); // Remove nome do usuário
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
