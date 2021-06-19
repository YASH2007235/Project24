const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var plane;
var rubber;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var iron;


//function preload()
//{

//}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(600,1100,200,50);
	plane = new Plane(600,600,1200,10);
	stone = new Stone(700,300,100,100);
	rubber = new Rubber(900,300,80);
	sand1 = new Sand(500,300,10);
	sand2 = new Sand(510,300,10);
	sand3 = new Sand(520,300,10);
	sand4 = new Sand(530,300,10);
	sand5 = new Sand(540,300,10);
	sand6 = new Sand(550,300,10);
	sand7 = new Sand(560,300,10);
	sand8 = new Sand(570,300,10);
    iron = new Iron(400,300,80,50);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("lightskyblue");

  //drawSprites();
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  iron.display();
}
