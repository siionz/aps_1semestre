document.addEventListener("DOMContentLoaded", function () {
  const btnSim = document.getElementById("btn-sim");
  const btnNao = document.getElementById("btn-nao");

  btnSim.addEventListener("click", iniciarQuiz);
  btnNao.addEventListener("click", () => {
      window.location.href = "index.html";
  });
});

const perguntas = [
  {
      pergunta: "Qual é o principal gás de efeito estufa emitido pelas atividades humanas?",
      opcoes: [
          "Dióxido de carbono (CO₂)", 
          "Oxigênio (O₂)",            
          "Gás hélio (He)",           
      ],
      resposta: 0,
  },
  {
      pergunta: "O que o desmatamento causa além da perda de biodiversidade?",
      opcoes: [
          "Aumenta a concentração de CO₂ na atmosfera", 
          "Reduz a emissão de gases",                  
          "Resfria o clima da Terra",                  
      ],
      resposta: 0,
  },
  {
      pergunta: "Como o derretimento do permafrost afeta o aquecimento global?",
      opcoes: [
          "Reduz a emissão de gases",           
          "Aumenta a absorção de CO2",          
          "Libera metano preso no solo",        
          "Gera chuvas ácidas",                 
      ],
      resposta: 2,
  },
  {
      pergunta: "Qual setor mais contribui para a emissão de gases do efeito estufa?",
      opcoes: [
          "Agricultura e Pecuária",   
          "Transporte Público",       
          "Energia Solar",            
      ],
      resposta: 0,
  },
  {
      pergunta: "O que pode acontecer se a temperatura média do planeta continuar subindo?",
      opcoes: [
          "As estações do ano deixarão de existir",     
          "Alguns animais e plantas podem desaparecer", 
          "A Terra vai parar de girar",                 
          "O oxigênio pode acabar",                     
      ],
      resposta: 1,
  },
  {
      pergunta: "O que acontece quando usamos muita energia elétrica sem necessidade?",
      opcoes: [
          "A conta de luz fica mais barata",                     
          "A natureza sofre com a produção dessa energia",       
          "O planeta gira mais devagar",                         
          "As plantas crescem menos",                            
      ],
      resposta: 1,
  },
  {
      pergunta: "Por que devemos evitar jogar lixo nos rios e mares?",
      opcoes: [
          "Porque os peixes gostam de água limpa",                 
          "Porque isso ajuda a economizar energia elétrica",       
          "Porque isso polui a água e afeta toda a vida marinha",  
          "Porque o lixo desaparece sozinho na água",              
      ],
      resposta: 2,
  },

  {
    pergunta: "Qual é a principal fonte de energia renovável usada para gerar eletricidade no Brasil?",
    opcoes: [
      "Energia solar",
      "Energia hidráulica",
      "Energia eólica",
      "Energia nuclear",
    ],
    resposta: 1,
  },
  {
    pergunta: "O que é o efeito estufa?",
    opcoes: [
      "Um processo que mantém a Terra aquecida",
      "A poluição do ar causada por carros",
      "A destruição da camada de ozônio",
      "O aumento do nível dos oceanos",
    ],
    resposta: 0,
  },
  {
    pergunta: "Qual dessas ações ajuda a reduzir o aquecimento global?",
    opcoes: [
      "Desmatar áreas para construir casas",
      "Usar transporte público ou bicicleta",
      "Queimar lixo em terrenos abertos",
      "Comprar mais produtos descartáveis",
    ],
    resposta: 1,
  },
];

let perguntaAtual = 0;
let pontuacao = 0;

function iniciarQuiz() {
  document.getElementById("start-quiz").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  mostrarPergunta();
}

function mostrarPergunta() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  const pergunta = perguntas[perguntaAtual];
  
  const titulo = document.createElement("h3");
  titulo.innerText = pergunta.pergunta;
  container.appendChild(titulo);

  pergunta.opcoes.forEach((opcao, index) => {
      const botao = document.createElement("button");
      botao.classList.add("option-button");
      botao.innerText = opcao;
      botao.onclick = () => verificarResposta(index);
      container.appendChild(botao);
  });
}

function verificarResposta(index) {
  if (index === perguntas[perguntaAtual].resposta) {
      pontuacao++;
  }

  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
  } else {
      mostrarResultado();
  }
}

function mostrarResultado() {
  const container = document.getElementById("quiz-container");
  const resultado = document.getElementById("result");

  container.style.display = "none";
  resultado.style.display = "block";
  resultado.innerHTML = "";

  const tituloResultado = document.createElement("h2");
  tituloResultado.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
  resultado.appendChild(tituloResultado);

  let mensagem = "";
  if (pontuacao === perguntas.length) {
    mensagem = "Incrível! Você sabe tudo sobre o aquecimento global!";
  } else if (pontuacao >= 3) {
    mensagem = "Muito bom! Você entende bastante, mas ainda pode aprender mais!";
  } else {
    mensagem = "Vamos estudar um pouquinho mais? O planeta precisa de você!";
  }

  const textoMensagem = document.createElement("p");
  textoMensagem.innerText = mensagem;
  resultado.appendChild(textoMensagem);

  const estrelas = document.createElement("div");
  estrelas.id = "stars";
  estrelas.innerText = "★".repeat(pontuacao) + "☆".repeat(perguntas.length - pontuacao);
  resultado.appendChild(estrelas);

  // highscore 
  const pontosAtuais = pontuacao * 100;
  const highScore = localStorage.getItem("highScore") || 0;

  const highScoreText = document.createElement("p");
  highScoreText.innerText = `Sua pontuação atual: ${pontosAtuais} pontos`;

  const recordeText = document.createElement("p");
  if (pontosAtuais > highScore) {
    localStorage.setItem("highScore", pontosAtuais);
    recordeText.innerText = `🎉 Novo Recorde! High Score: ${pontosAtuais} pontos`;
  } else {
    recordeText.innerText = `🏆 Seu High Score: ${highScore} pontos`;
  }

  resultado.appendChild(highScoreText);
  resultado.appendChild(recordeText);

  const botaoReiniciar = document.createElement("button");
  botaoReiniciar.id = "restartBtn";
  botaoReiniciar.innerText = "Refazer Quiz";
  botaoReiniciar.classList.add("botao-enviar");
  botaoReiniciar.onclick = () => location.reload();
  resultado.appendChild(botaoReiniciar);
}
