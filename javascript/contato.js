document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      alert("Sua mensagem foi enviada com sucesso! Nossa equipe agradece :).");
  
  
      window.location.href = "Contato.html";
    });
  });
  