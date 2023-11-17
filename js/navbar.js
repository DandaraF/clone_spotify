const navbar = document.getElementById('navbar');

navbar.innerHTML = `
    <div class="navbar-container">
        <img src="/assets/img/logo.png" alt="Logo" class="logo">
        <ul class="navbar-items">
            <li class="navbar-item"><a href="/pages/premium.html">Premium</a></li>
            <li class="navbar-item">Ajuda</li>
            <li class="navbar-item">Baixar</li>
            <li class="navbar-item"> <a href="/pages/register.html">Inscrever-se</a></li>
            <li class="navbar-item"><a href="/pages/login.html">Entrar</a></li>
        </ul>
    </div>
`;