
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground;
 

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;
	var ground_options={
	isStatic:true
	}

	//Create the Bodies Here.
	 ground=new ground(600,height-500,700,20,ground_options);
	 bobobject1= new Bob(300,500,80);
	 bobobject2= new Bob(400,500,20);
	 bobobject3= new Bob(500,500,20);
	 bobobject4= new Bob(600,500,20);
	 bobobject5= new Bob(700,500,20);
	 bobobject6= new Bob(800,500,20);
	 bobobject7= new Bob(900,500,20);

	 sling1= new Rope (bobobject1.body,ground.body,-149*2,0);
	 sling2= new Rope (bobobject2.body,ground.body,-101*2,0);
	 sling3=  new Rope (bobobject3.body,ground.body,-50*2,0);
	 sling4= new Rope (bobobject4.body,ground.body,-3*2,0);
	 sling5= new Rope (bobobject5.body,ground.body,40*2,0);
	 sling6= new Rope (bobobject6.body,ground.body,95*2,0);
	 sling7=new Rope (bobobject7.body,ground.body,142*2,0);
	  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cream");
  ground.display();
  Text("Pull the left Bob",500,50)
  fill("grey")

  bobobject1.display();
	 bobobject2.display();
	 bobobject3.display();
	 bobobject4.display();   
	 bobobject5.display();
	 bobobject6.display();
	 bobobject7.display();
	 sling1.display();
	 sling2.display();
	 sling3.display();
	 sling4.display();
	 sling5.display();
	 sling6.display();
	 sling7.display();

  drawSprites();
 
}
function keyPressed(){

	if (keyCode **UP_ARROW){

	


	Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:50,y:45})
	}

}
function drawline(constraint)
{
bobBodyPosition=constraint.bodyA.position
roofBodyPosition=constraint.bodyB.position

roofBodyOffset=constraint.pointB;

roofBodyX=roofBodyPosition.x+roofBodyOffset.x
roofBodyY=roofBodyPosition.y+roofBodyOffset.y

line (bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);






}


