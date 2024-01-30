alert('Bem-vindo ao jogo do número secreto');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute
let tentativas = 1;
//ambiente secreto dos DEV's
console.log('númerosecreto:', numeroSecreto); 
console.log('Valor do chute:', chute);
//a vatiável chute foi criada para armazenar o número digitado no prompt

// Operadores: sinais de comparação: Igual == ; Não é igual != ; Maior > ;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`); 
    
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    }else { 
        if (chute > numeroSecreto){
            alert('O número secreto é menor que ' + chute );
        } else {
            alert('O número secreto é maior que ' + chute );
        }
        //tentativas = tentativas + 1;
        tentativas++
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! você descobriu o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativas}.`);
