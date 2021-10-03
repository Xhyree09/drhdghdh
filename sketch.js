var road,boy, leftBoundary,rightBoundary;
var roadImg,boyImg;
var i;

function preload(){
  roadImg = loadImage("road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
createCanvas(400,400);
  
road=createSprite(200,200);
road.addImage(roadImg);
road.velocityY = 4;
road.scale=1.6;

boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  road.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  

  if(road.y > 400 ){
    road.y = height/2;
  
  }


  drawSprites();
}
