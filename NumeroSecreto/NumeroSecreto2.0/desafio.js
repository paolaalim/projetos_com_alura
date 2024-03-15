// Criar uma função que exibe "" no console.

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// Criar uma função que recebe um número como parâmetro e retorna o resultado da 
// multiplicação desse número por ele mesmo

function mostarSaudacao() {
    console.log ('Olá, mundo!');
}
mostarSaudacao();

function exibirNome(nome) {
    console.log (`Olá, ${nome}!`);
}
exibirNome(Paola);

function calcularDobro(numero) {
    return numero*2;
}
let resultadoDobro = calcularDobro (3);
console.log (resultadoDobro)

function calcularMedia(a, b, c) {
    return (a+b+c)/3;
}
let resultadoMedia = calcularMedia(9,6,7)
console.log (resultadoMedia)

function encontarMaiorNumero(a, b) { 
    return a > b ? a : b;
}
let maior = encontarMaiorNumero (4, 15)
console.log (maior)

function calculaRaiz(numero){
    return numero*numero;
}
let raiz = calculaRaiz (9)
console.log (raiz)

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
// em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente 
// em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e 
// largura que serão dadas como parâmetro.

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que 
// será fornecido como parâmetro. Considere Pi = 3,14.

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function calcularImc(altura, peso) {
    let imc = peso/(altura ** 2)
}

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
      }
    
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
    
      return fatorial;
    }

function calcularConversaoMonetaria(valorEmDolar) {
    let cotacaoDolar= 4.80
    let valorEmReais = valorEmDolar*cotacaoDolar 
    return valorEmReais.toFixed(2)
}

function calcularAreaEPerimetroSalaRetangular(altura, largura) {
    let area = altura*largura
    let perimetro = 2*(altura+largura)
    console.log (`A área é${area} e o perimetro é ${perimetro}`)
}

function calcularAreaEPerimetroSalaCircular(raio) {
    numeroPi = 3.14
    let area = numeroPi*raio**2
    let perimetro = 2* numeroPi* raio
    console.log (`A área é${area} e o perimetro é ${perimetro}`)
}

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }

//   Crie uma lista vazia, com o nome listaGenerica.

//   Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes 
//   elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

//   Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

//   Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

//   Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

//   Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

var listaGenerica = [];

var linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin' , 'Python'];
linguagensDeProgramacao.push ['Java', 'Ruby' , 'GoLang'];

var listaNomes = ['Alice', 'Paola', 'Maria'];
console.log (listaNomes[0]);
console.log (listaNomes[1]);
console.log (listaNomes[2]);


  