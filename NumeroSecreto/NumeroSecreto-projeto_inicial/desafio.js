// Desafios finais
// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log ('Boas vindas à área secreta dos devs');

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome= 'Paola';
console.log ('Olá, ', nome);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome2= 'Paola';
alert ('Olá, ', nome);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
// Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemFavorita = prompt ('Qual a linguagem de programação que você mais gosta?');
console.log ('Resposta:', linguagemFavorita);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada 
// "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 10
let valor2 = 9
let resultado = valor1 + valor2
console.log (`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada 
// "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a 
// [resultado]." no console.
let valor12 = 45
let valor22 = 78
let resultado2 = valor12 - valor22
console.log (`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`)


// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar 
// se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt("Digite sua idade")
if (idade > 17) {
    console.log ('Maior de idade')
    }else{
        console.log ('Menor de idade')
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
// Use if-else para imprimir a respectiva mensagem.

// não da pra usar {let numero = prompt("Digite um numero")} pq isso retorna string

var numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
    console.log ('O número digitado é positivo')
    }else if (numero < 0) {
        console.log ('O número digitado é negativo')
    }else {
        console.log("O número é zero.");
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let numero1= 1

while (numero1 <= 1){
    console.log (numero)
    numero++
} 

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é 
// maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 9
if (nota>= 7){
    console.log ('Aprovado')
}else {
    console.log ('Reprovado')
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio= parseInt(Math.random())
console.log(numeroAleatorio)

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroAleatorio10 = (parseInt(Math.random() * 10 + 1))
console.log(numeroAleatorio10)

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAleatorio1000 = (parseInt(Math.random() * 1000 + 1))
console.log(numeroAleatorio1000)
