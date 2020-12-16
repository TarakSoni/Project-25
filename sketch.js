
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(650,350,1300,20)
	
	paperObject = new Paper(160,300,40)

	bin = new Bin(1040,290,150,150)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  
 ground.display();
 paperObject.display();
 bin.display();
 

}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:75,y:-95});

	}
}

