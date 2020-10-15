
var monkey , monkey_running;
var banana ,bananaimage, obstacle, obstacleimage;
var FoodGroup, obstacleGroup;
var ground;
var score;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimage = loadImage("banana.png");
  obstaceimage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
background("lime");
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  stroke("black");
  textSize(20);
  fill("Black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:" ,100,50)
  if(keyDown("space")){
    monkey.velocityY=-13;
    
  }
  monkey.velocityY= monkey.velocityY+0.8;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  Food();
  obstacles();
  drawSprites();
}
function Food(){
  if(World.frameCount%80===0){
     banana=createSprite(300,random(120,200),10,10);
     banana.addImage(bananaimage);
     banana.velocityX=-3;
     banana.lifetime=180;
     banana.scale=0.1;
     FoodGroup.add(banana); 
     
     }
}
function obstacles(){
  if(World.frameCount%300===0){
     obstacle=createSprite(80,400,10,10);
     obstacle.addImage(obstacleimage);
     
     obstacle.lifetime=180;
     obstacle.scale=0.1;
     obstacleGroup.add(obstacle);
     
     }
}





