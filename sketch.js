let minhaAnimacao;
let seanImage;
let shipImages = [];

function preload() {

    // Carrega a imagem "sean.png"
    seanImage = loadImage('sea.png');

  // Carrega a animação
  minhaAnimacao = loadAnimation('ship-1.png', 'ship-2.png', 'ship-3.png', 'ship-4.png');

}

function setup() {
  // Crie um canvas e configure sua cena aqui
  createCanvas(400, 400);
}

function draw() {
  // Desenhe a animação e a imagem no canvas
  background(seanImage, 200, 200, 100, 100);
  animation(minhaAnimacao,10,10);
}