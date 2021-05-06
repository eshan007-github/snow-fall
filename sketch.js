const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world


var bg;
var snow=[];


function preload() {
  bg = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;
  Engine.run(engine)

  

}



function draw() {
  background(bg);
  
  if(frameCount%10 === 0){
    snow.push(new Snow(random(0,800),30,30))
  }
  for (var i = 0; i<snow.length; i++){
    snow[i].display();
  }
  drawSprites();

}