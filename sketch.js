
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box2;
var paperObject;
var ground;


function preload()
{
	
	
}

function setup() {
	createCanvas(1600, 700);

	

	engine = Engine.create();
	world = engine.world;
	
	box2 = new Box(1100 ,640 ,200 ,300);


	paperObject = new Paper(200 ,450 ,40);
	ground = new Ground(width/2 ,670 ,width ,20);
	

	//Create the Bodies Here.


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 
  box2.display();
  paperObject.display();
  ground.display();

  drawSprites();
 
}
function keyPressed(){

	if(keyCode=== UP_ARROW){
		
		
		Matter.Body.applyForce(paperObject.body,paperObject.position,{x:85,y:-85});

	}
}
