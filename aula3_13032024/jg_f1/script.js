let larguraPista = 800;
let linhaChegada = 750;
let saldo = 100; // Saldo inicial do jogador
let valorAposta = 0; // Valor apostado
let carroApostado; // Carro escolhido para a aposta

// Atualiza o saldo na interface
function atualizaSaldo() {
    document.getElementById('saldo').innerText = 'Saldo: R$' + saldo;
}

// Reseta a posição dos carros e habilita os botões para uma nova corrida
function resetCorrida() {
    let carros = document.getElementsByClassName('carro');
    for (let carro of carros) {
        carro.style.left = '0px';
    }
    toggleItemButtons(false); // Habilita os botões para a próxima corrida
    atualizaSaldo(); // Atualiza o saldo na interface
}

// Inicializa o jogo
function init() {
    resetCorrida();
}

// Lógica para iniciar a corrida
function iniciarCorrida() {
    valorAposta = parseInt(document.getElementById('valorAposta').value, 10);
    carroApostado = parseInt(document.getElementById('pilotoEscolhido').value, 10);
    
    if (isNaN(valorAposta) || valorAposta < 5) {
        alert('Aposta inválida. O valor mínimo de aposta é R$5.');
        return;
    }
    
    if (saldo < valorAposta) {
        alert('Saldo insuficiente para a aposta.');
        return;
    }
    
    saldo -= valorAposta;
    toggleItemButtons(true); // Desabilita os botões durante a corrida
    atualizaSaldo();

    let carros = document.getElementsByClassName('carro');
    let intervalo = setInterval(function() {
        for (let i = 0; i < carros.length; i++) {
            let carro = carros[i];
            let posicaoAtual = parseInt(carro.style.left || 0, 10);
            let avanco = Math.floor(Math.random() * 10) + 1;
            carro.style.left = posicaoAtual + avanco + 'px';

            document.getElementById('distancia' + (i + 1)).innerText = `Distância ${i + 1}: ${posicaoAtual + avanco}m`;

            if (posicaoAtual + avanco >= linhaChegada) {
                clearInterval(intervalo);
                let vencedor = i + 1;
                if (carroApostado === vencedor) {
                    saldo += valorAposta * 2; // Dobrar a aposta para o saldo
                    alert('Você ganhou!');
                } else {
                    alert('Você perdeu.');
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
