
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var paper;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(0,0);
	paper=new Paper(200,0,75)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225)
 
  groundObject.display();
  dustbinObj.display();
  paper.display();
  groundObject.display();
  dustbinObj.display();
  paper.display();
  
}

function keyPressed(){
 if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:290,y:-400})
}
}
