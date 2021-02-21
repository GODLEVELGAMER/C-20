var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400,200,80,30);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  fixedRect.shapeColor = "Green";
  movingRect.shapeColor = "Green";
  fixedRect.debug = true;
  movingRect.debug = true;
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = "Red";
    fixedRect.shapeColor = "Red";
  }
  else{
    fixedRect.shapeColor = "Green";
    movingRect.shapeColor = "Green";
  }
  drawSprites();
}