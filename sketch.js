var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0
function preload(){

  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(600,400)
  obstacleGroup=new Group()
  bananaGroup=new Group()
  
  monkey=createSprite(60,340,30,30);
  monkey.addAnimation("running_monkey",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(100,370,600,7)
  ground.x=ground.width/2
  console.log(ground.x)

}
   


  



function draw() {
background("green")
drawSprites();
spawnFood();
spawnObstacle();
spawnMonkey();
if(keyDown("space")){
monkey.velocityY=-12}
stroke("red")
textSize(20)
fill("red")
text("Score:"+score,500,50)
score=0

stroke("black")
textSize(20)
fill("black")
survivalTime=Math.ceil(frameCount/20)
text("survivalTime:"+survivalTime,300,50)

  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  
  if(monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach();
  score=score+5
  }
  
  monkey.collide(ground)
}
function spawnFood(){
  if(frameCount%100===0) {
    banana=createSprite(600,random(250,350))
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-6
    bananaGroup.add(banana)
    
  }
}
function spawnObstacle(){
  if(frameCount%200===0) {
    obstacle=createSprite (600,350)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.08
    obstacle.velocityX=-6
    obstacleGroup.add(obstacle)
  }
    
}
 function spawnMonkey(){
  
 {} 
 
}