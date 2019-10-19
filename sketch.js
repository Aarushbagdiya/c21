 var fixedrect,movingrect;
 var game1,game2,game3,game4;

function setup() {
  createCanvas(1200,800);
   fixedrect = createSprite(600,400,100,70);
   fixedrect.shapeColor="red";
   fixedrect.debug=true;
   movingrect = createSprite(400,200,100,70);
   movingrect.shapeColor="red";
   movingrect.debug=true;
   game1=createSprite(100,100,50,50);
   game1.shapeColor="green";
   game2=createSprite(200,100,50,50);
   game2.shapeColor="green";
   game3=createSprite(300,100,50,50);
   game3.shapeColor="green";
   game4=createSprite(400,100,50,50);
   game4.shapeColor="green";
  
}

function draw() {
  background("black"); 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

   if(isTouching(game1,movingrect)){
    game1.shapeColor="blue";
    movingrect.shapeColor="blue"
  }
 else {
   game1.shapeColor="red";    
   movingrect.shapeColor="red";
 
 }
   
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 
   && object2.y - object1.y < object2.height/2 + object1.height/2 
   && object1.y - object2.y < object2.height/2 + object1.height/2 ){
   return true;
}
else{
  return false ; 

}
 }










  
