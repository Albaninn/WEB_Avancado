const listaCores = ["aqua", "azul", "coral", "dourado", "verde", "roxo", "vermelho", "verde-azulado", "tomate", "amarelo"];
let corPensada = listaCores[Math.floor(Math.random() * listaCores.length)];
let numeroTentativas = 0;
let jogoFinalizado = false;

function verificar() {
  if (jogoFinalizado) {
    return;
  }
  numeroTentativas++;
  const palpite = document.getElementById("palpite").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  if (listaCores.includes(palpite)) {
    if (palpite === corPensada) {
      resultado.innerHTML = `Parabéns! Você adivinhou a cor em ${numeroTentativas} tentativas!`;
      document.getElementById("jogo").style.backgroundColor = corPensada;
      jogoFinalizado = true;
      removerBotao(); // Chama a função para remover o botão
    } else if (palpite < corPensada) {
      resultado.innerHTML = "Palpite muito baixo!";
    } else {
      resultado.innerHTML = "Palpite muito alto!";
    }
  } else {
    resultado.innerHTML = "A cor digitada não está na lista. Tente novamente.";
  }
}

function removerBotao() {
  const botaoVerificar = document.getElementById("botaoVerificar");
  botaoVerificar.parentNode.removeChild(botaoVerificar);
}
