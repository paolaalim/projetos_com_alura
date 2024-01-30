alert('Bem-vindo ao jogo do número secreto');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute
let tentativas = 1;
console.log('númerosecreto:', numeroSecreto); 
console.log('Valor do chute:', chute);

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`); 
    
    if (chute == numeroSecreto) {
        break;
    }else { 
        if (chute > numeroSecreto){
            alert('O número secreto é menor que ' + chute );
        } else {
            alert('O número secreto é maior que ' + chute );
        }
        tentativas++
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! você descobriu o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativas}.`);
