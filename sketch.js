var dog,sadDog,happyDog;
var addFood,foodObj,feed;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  foodObj=new Food();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
 
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  drawSprites();
  fedTime=database.ref('/');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
  fill (255,255,254) ;
  textSize(15);
  if(lastFed>=12){
    text("last fed:"+lastfFes%12+"PM",350,30)
    
  }else   if(lastFed===0){
    text("last fed:12 AM",350,30)

  }else{
    text("last fed:"+lastfFes+"AM",350,30)
  }
}

//function to read food Stock
function feedDog(){
  dog.addImage(happyDog);

  if(fooodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodobj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodobj.getFoodStock()-1);
  }
  database.ref('/').update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour()
  })
}
function addFoods(){
  foodS++;
  database.ref('/').update({
Food:foodS
  })
}