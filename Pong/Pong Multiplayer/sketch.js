//Variáveis da Bolinha

let xBolinha = 100;
let yBolinha = 200;
let diametro = 32;
let raio = diametro/2;
let esquerdaBolinha = xBolinha - raio;
let direitaBolinha = xBolinha + raio;
let superiorBolinha = yBolinha - raio;
let inferiorBolinha = yBolinha + raio;

//Variáveis da velocidade da Bolinha
let velocidadeXball= 4;
let velocidadeYball= 4;

//Variáveis da raquete
let Xraquete = 5;
let Yraquete = 150;
let compri_raquete = 10;
let Hraquete = 90;
let superiorRaquete = Yraquete;
let direitaRaquete = Xraquete + compri_raquete;
let inferiorRaquete = Yraquete + Hraquete;
let colidiu = false

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verifica_colisao_Borda();
  mostraraquete(Xraquete, Yraquete);
  movimentaRaquete();
//  verifica_colisao_Raquete()
  colisaoraquetebiblio(Xraquete, Yraquete);
  mostraraquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  colisaoraquetebiblio(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}  
  
  
function mostraBolinha() {
  circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXball;
  yBolinha += velocidadeYball;
}


function verifica_colisao_Borda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXball *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYball *= -1;
  }    
}  

function mostraraquete(x,y) {
  rect(x,y,compri_raquete,Hraquete)
  }

function movimentaRaquete() {
     if (keyIsDown(87)) {
        Yraquete -= 10;
     }
       
    if (keyIsDown(83)) {
        Yraquete += 10;
    }
   Yraquete = constrain(Yraquete, 10, 310);
  }

function   verifica_colisao_Raquete() {
  if (esquerdaBolinha < direitaRaquete &&  
      superiorBolinha < inferiorRaquete && 
      inferiorBolinha > superiorRaquete ) 
     
     {velocidadeXball *= -1}
      
}  

function colisaoraquetebiblio(x,y) {
  colidiu = collideRectCircle(x, y, compri_raquete, Hraquete, xBolinha, yBolinha, raio);
  if (colidiu) {velocidadeXball *= -1
               raquetada.play();}
   
}

function movimentaRaqueteOponente() {
      if (keyIsDown(UP_ARROW)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaqueteOponente += 10;
    }
yRaqueteOponente = constrain(yRaqueteOponente, 10, 310);
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 587) {
        meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < 13) {
        pontosDoOponente += 1;
      ponto.play();
    }
}