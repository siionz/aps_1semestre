document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
  
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
  
    if (usuarioSalvo && email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
      alert("Login bem-sucedido!");
      window.location.href = "index.html"; 
    } else {
      alert("Email ou senha inválidos.");
    }
  });
  