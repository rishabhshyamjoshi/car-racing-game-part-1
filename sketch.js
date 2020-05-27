var canvas, backgroundImage,backgroundImage1,backgroundImage2,backgroundImage3,backgroundImage4,backgroundImage5;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bikes, bike1, bike2;
var bike1image, bike2image,bike3image,bike4image;

function preload(){
  track = loadImage("../images/track.png");
  //ground = loadImage("../images/ground.png");
 // ground.scale = 0.5;
  
  bike1image = loadImage("images/bike1.png");
  bike2image = loadImage("images/bike.jpg");
  bike3image = loadImage("images/bike1.jpg");
  bike4image = loadImage("images/bike2.jpg");
  backgroundImage1 = loadImage("images/racing.jpg");
  backgroundImage2 = loadImage("images/racing1.jpg");
  backgroundImage3 = loadImage("images/racing2.jpg");
  backgroundImage4 = loadImage("images/racing3.jpg");
  backgroundImage5 = loadImage("images/racing4.jpg");


  bike1 = createSprite(100,200);
  bike2 = createSprite(300,200);
  bike3 = createSprite(500,200);
  bike4 = createSprite(700,200);
  bike4.scale = 0.8;
  bike2.scale = 0.4;
  bike3.scale = 0.1;
  bike1.scale = 0.2;
  bikes = [bike1, bike2,bike3,bike4];

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  bike1.addImage(bike1image);
  bike2.addImage(bike2image);
  bike3.addImage(bike3image);
  bike4.addImage(bike4image);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
