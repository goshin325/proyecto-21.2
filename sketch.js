const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,ground;

var groundObj,leftSide,rightSide;
//Crea la variable ball
var ball;
var radius = 40;

function setup() {
	//aumentar tamaño a 1600 y 700
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Crea las opciones para objeto ball
	var ball_options={
		isSatic:false,
        restitution:0.5,
        friction:0,
        density:1.2
	}
	ball = Bodies.circle(260,100,radius/2,ball_options);
  World.add(world,ball);
	//Cuerpo de los suelos 

	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x,ball.position.y,radius,radius);
  //Llama a la función display para los suelos
  groundObj.display();
  leftSide.display();
  rightSide.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
		//Agregar fuerza para la bola de papel 
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    
  	}
}

