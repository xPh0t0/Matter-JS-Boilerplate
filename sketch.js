const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ground = new Ground(200,390,400,20);
	World.add(ground);

	ball = Matter.Bodies.circle(200,200,ball_options);
	World.add(ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



