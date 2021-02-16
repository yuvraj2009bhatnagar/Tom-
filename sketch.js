
var fixed_Rect, moving_Rect;

var gameObj1, gameObj2, gameObj3, gameObj4,gameObj5,gameObj6;

function setup() {
  createCanvas(800,400);

  fixed_Rect= createSprite(200,200,50,80);
  fixed_Rect.shapeColor= "green";

  moving_Rect= createSprite(400,200,80,30);
  moving_Rect.shapeColor= "green";


gameObj1= createSprite(100,100,50,50);
  gameObj1.shapeColor= "green";
  
  gameObj2= createSprite(200,100,50,50);
  gameObj2.shapeColor= "green";

  gameObj3= createSprite(300,100,50,50);
  gameObj3.shapeColor= "green";

  gameObj4= createSprite(400,100,50,50);
  gameObj4.shapeColor= "green";

  gameObj5= createSprite(400,50,50,50);
  gameObj5.shapeColor= "green";
gameObj5.velocityY= 5;

  gameObj6= createSprite(400,400,50,50);
  gameObj6.shapeColor= "green";
  gameObj6.velocityY= -5;
}

function draw() {
  background(0); 
  console.log(moving_Rect.y-fixed_Rect.y);
  moving_Rect.x= mouseX;
  moving_Rect.y= mouseY;


if(isTouching(moving_Rect, gameObj1)) {
  moving_Rect.shapeColor= "blue";
  gameObj1.shapeColor= "blue";
}
else {
  moving_Rect.shapeColor= "green";
  gameObj1.shapeColor= "green";
}


if (isTouching(moving_Rect,gameObj2 )) {
  moving_Rect.shapeColor = "yellow";
  gameObj2.shapeColor = "yellow";
}
else{
  moving_Rect.shapeColor = "red";
  gameObj2.shapeColor = "red";

}bounceoff(gameObj5,gameObj6);
drawSprites();
}












