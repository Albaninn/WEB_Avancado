const listaCores = ["aqua", "azul", "coral", "dourado", "verde", "roxo", "vermelho", "verde-azulado", "tomate", "amarelo"];
let corPensada = listaCores[Math.floor(Math.random() * listaCores.length)];
let numeroTentativas = 0;

function verificar() {
  numeroTentativas++;
  const palpite = document.getElementById("palpite").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  if (palpite === corPensada) {
    resultado.innerHTML = `Parabéns! Você adivinhou a cor em ${numeroTentativas} tentativas!`;
    document.getElementById("jogo").style.backgroundColor = corPensada;
  } else if (palpite < corPensada) {
    resultado.innerHTML = "Palpite muito baixo!";
  } else {
    resultado.innerHTML = "Palpite muito alto!";
  }
}
