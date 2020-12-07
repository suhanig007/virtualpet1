//Create variables here
var dog
var happydog
var database
var foodS
var foodStock

function preload()
{
  //load images here
  dogNormal=loadImage("images/dogImg.png");
  dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  dog=createSprite(200,200)
  dog.scale= (0.15)
  dog.addImage(dogNormal)
  
  
  
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogHappy);
  }
  
  
  textSize(20)
  fill("yellow")
  stroke("blue")
  text("Press Up Arrow key to feed Cutiepie!",130,25)
  text("Food Remaining"+foodS,170,50) 
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;

  }else{
    x=x-1;

  }
  database.ref('/').update({
    Food:x
  })
}

