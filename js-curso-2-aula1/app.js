let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirtextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function mensagemInicial(params) {
    exibirtextoNaTela('h1', 'Jogo do número secreto');
    exibirtextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();



function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirtextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Isso aí! você descobriu o número secreto ${numeroSecreto}, 
        com ${tentativas} ${palavraTentativas}.`;
        exibirtextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    }else{
        chute > numeroSecreto ? exibirtextoNaTela('p', 'O número secreto é menor que ' + chute + '.') 
        : exibirtextoNaTela('p', 'O número secreto é maior que ' + chute + '.');
        tentativas++; 
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
function limparCampo() {
    chute= document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute ('disabled', true);
}
