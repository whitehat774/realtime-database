var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite()
  dog = addImage("images/dogImg.png")

  happyDog = createSprite()
  happyDog = addImage("images/dogImg1.png")

  var database = firebase
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
}


function draw() {  
  background(46, 139, 87)
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage("images/dogImg1.png")
  }
  
  drawSprites();

  textSize(20)
  fill(255)
  stroke(255)
  text("foodStock"-database, 250, 100)
}
function readStock(data) {
   foodS-data.val();
}
function writeStock(x) {
  
  data.ref('/').update({
  })
}


