var survivaltime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  
}


function draw() {
 background("white") 
  
 if(keyDown('space')){
    monkey.velocityY=-6
   
    
    }
  monkey.velocityY=monkey.velocityY+1
  monkey.collide(ground)
  
if(ground.x<0){
   ground.x=ground.width/2
   
}
  spawnrocks();
  spawnbananas();
  drawSprites()
  
  
  stroke("white")
  textSize(20)
  fill("white")
  
  
  
  
}
function spawnbananas(){
  if (frameCount % 80 === 0) {
     banana= createSprite(350,250,2,10);
    banana.y = Math.round(random(10,80));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
  
  
  
  
}
}
function spawnrocks() {
  if (frameCount % 300 === 0) {
     obstacle= createSprite(350,330,2,10);
  
    obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
  obstacle.velocityX = -3;
  
  
  
  
  
}
}


