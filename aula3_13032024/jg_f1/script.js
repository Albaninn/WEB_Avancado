let larguraPista = 800;
let linhaChegada = 750;
let saldo = 100; // Saldo inicial do jogador
let valorAposta = 0; // Valor apostado
let carroApostado; // Carro escolhido para a aposta

// Atualiza o saldo na interface
function atualizaSaldo() {
    document.getElementById('saldo').innerText = 'Saldo: R$' + saldo;
}

// Reseta a corrida para o estado inicial
function resetCorrida() {
    document.querySelectorAll('.carro').forEach(carro => {
        carro.style.left = '0'; // Reseta a posição dos carros
        carro.classList.remove('carroDestacado'); // Remove o destaque de todos os carros
    });
    toggleItemButtons(false); // Habilita os botões para uma nova corrida
    atualizaSaldo();
}

// Inicializa o jogo
function init() {
    resetCorrida();
    atualizaSaldo();
}

// Lógica para iniciar a corrida
function iniciarCorrida() {
    let valorAposta = parseInt(document.getElementById('valorAposta').value, 10);
    let carroApostado = parseInt(document.getElementById('pilotoEscolhido').value, 10);
    
    if (isNaN(valorAposta) || valorAposta < 5) {
        alert('Aposta inválida. O valor mínimo de aposta é R$5.');
        return;
    }
    
    if (saldo < valorAposta) {
        alert('Saldo insuficiente.');
        return;
    }
    
    saldo -= valorAposta;
    toggleItemButtons(true); // Desabilita os botões durante a corrida
    atualizaSaldo();
    
    // Destaca o carro apostado
    document.querySelector(`#carro${carroApostado}`).classList.add('carroDestacado');

    let carros = document.querySelectorAll('.carro');
    let intervalo = setInterval(function() {
        for (let i = 0; i < carros.length; i++) {
            let carro = carros[i];
            let posicaoAtual = parseInt(carro.style.left || 0, 10);
            let avanco = Math.floor(Math.random() * 10) + 1;
            carro.style.left = posicaoAtual + avanco + 'px';

            if (posicaoAtual + avanco >= linhaChegada) {
                clearInterval(intervalo);
                let resultado = (i + 1) === carroApostado ? 'Você ganhou!' : 'Você perdeu.';
                if ((i + 1) === carroApostado) {
                    saldo += valorAposta * 2; // Dobrar a aposta para o saldo
                    alert('Você ganhou!');
                } else {
                    alert(resultado);
                }
                resetCorrida();
                break;
            }
        }
    }, 50);
}

// Habilita ou desabilita os botões de buff/debuff
function toggleItemButtons(disable) {
    document.querySelectorAll('#itensCompra button').forEach(button => {
        button.disabled = disable;
        button.style.backgroundColor = disable ? '#ccc' : '#f2f2f2';
    });
}

// Compra um item de buff/debuff
function compraItem(custo, efeito, button) {
    if (saldo >= custo) {
        saldo -= custo;
        efeito();
        button.disabled = true;
        button.style.backgroundColor = '#ccc';
        atualizaSaldo();
    } else {
        alert('Saldo insuficiente para comprar este item.');
    }
}

// Adiciona os efeitos correspondentes aos botões
document.getElementById('aumentaVelocidade').addEventListener('click', function() {
    compraItem(7, function() {
        // Implementar o efeito de aumentar a velocidade
    }, this);
});

document.getElementById('reduzOponente').addEventListener('click', function() {
    compraItem(5, function() {
        // Implementar o efeito de reduzir a velocidade de um oponente aleatório
    }, this);
});

document.getElementById('reduzPrimeiro').addEventListener('click', function() {
    compraItem(10, function() {
        // Implementar o efeito de reduzir a velocidade do primeiro colocado
    }, this);
});

// Inicia a corrida
document.getElementById('startRace').addEventListener('click', iniciarCorrida);

// Chama a função de inicialização do jogo
init();
