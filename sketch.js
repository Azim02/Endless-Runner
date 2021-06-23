//declaring variables-
var path, pathAnimation;
var player, playerImg;

var diamond, diamondImg;
var coin, coinImg;

//function to load Images, Animations, Sounds, etc.. - 
function preload(){
  //loading Images
  pathImg = loadImage("track.jpg");
  playerAnimation = loadAnimation("Img1.png", "Img2.png", "Img3.png", "Img4.png", "Img5.png", "Img6.png", "Img7.png", "Img8.png");
  diamondImg = loadImage("diamond.png");
  coinImg = loadImage("coin.png");
}

//setUp function -
function setup(){
   
  //creating the canvas
  createCanvas(400,600);

  //creating the path
  path = createSprite(200,200);
  //adding image to path
  path.addImage(pathImg);
  //giving velocity to the path
  path.velocityY = 4;

  //creating the player
  player = createSprite(70,580,50,50);
  player.addAnimation("player",playerAnimation);
  player.scale = 0.9;
}

//draw function -
function draw(){
 //giving background Image or color
 background(0); 
 
 //giving movement to the player
 player.x = World.mouseX;

 //creating edges and colliding the player with it.
 edges = createEdgeSprites();
 player.collide(edges);

 //making infinite ground
 if(path.y > 400){
   path.y = height/2;
 }

 createDiamond();
 createCoins();

//drawing everything
 drawSprites();
}

//function to spawn diamonds -
function createDiamond(){
  if(World.frameCount % 200 === 0){
    diamond = createSprite(Math.round(random(50, 350),40, 10, 10));
    diamond.velocityY = 3;
    diamond.lifetime = 200;
    diamond.addImage(diamondImg);
    diamond.scale = 0.4;
  }
}
//function to spawn gems -
function createCoins(){
  if(World.frameCount % 320 === 0){
    coin = createSprite(Math.round(random(20, 350),40, 10, 10));
    coin.velocityY = 3;
    coin.lifetime = 200;
    coin.addImage(coinImg);
    coin.scale = 0.3;
  }
}