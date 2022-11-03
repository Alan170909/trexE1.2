
var trex;
var trex_run;
var ground;
var groundImg;
var invisGround;
function preload(){
  trex_run = loadAnimation("trex1.png","trex3.png","trex4.png");
groundImg = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)

 ground = createSprite(200,180,400,20);
 ground.addImage(groundImg);
 ground.velocityX = -10;
 invisGround = createSprite(200,190,400,10);
 invisGround.visible = false
 trex = createSprite(50,170,20,40);
 trex.addAnimation("run", trex_run);
 trex.scale = 0.5;
}

function draw(){
  background("180");
 drawSprites(); 

console.log(trex.velocityY)

if (keyDown("space") && trex.y>140){
  trex.velocityY = -10;
}
if (ground.x<0){
  ground.x = ground.width/2;
}

trex.velocityY = trex.velocityY +0.7;
trex.collide(invisGround)
}
