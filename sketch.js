var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimage;
var leaf,leafimage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
appleimage=loadImage("apple.png")
leafimage=loadImage("orangeleaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  rabbit.x=mouseX
  rabbit.y=mouseY
  edges= createEdgeSprites();
  rabbit.collide(edges);
spawnapple()
spawnleaves() 
drawSprites();
}

function spawnapple(){
if (frameCount%60==0){
//create apple
apple=createSprite(100,200,20,20)
apple.addImage("apple",appleimage)
apple.scale=0.05
apple.x=Math.round(random(50,200))
apple.lifetime=20
}
}


function spawnleaves(){
if(frameCount%60==0){
  leaf=createSprite(300,150,20,20)
leaf.addImage("leaf",leafimage)
leaf.scale=0.08
leaf.x=Math.round(random(50,300))
leaf.lifetime=25

}
}

