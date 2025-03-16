document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verifica se o login é válido (substitua este código pela sua lógica de autenticação)
    if (username === 'usuario' && password === 'senha') {
        window.location.href = 'produtos.html'; // Redireciona para a página de produtos
    } else {
        alert('Nome de usuário ou senha incorretos');
    }
});
