const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}
function setup() {
	var canvas = createCanvas(1000, 500);
	background("black");
    engine = Engine.create();
    world = engine.world;
	imageMode(CENTER);
	ground = new Ground(500, 495, 1005, 15);
	binB = new Bin(900, 480, 80, 15);
	binL = new Bin(860, 437, 8, 100);
	binR = new Bin(940, 437, 8, 100);
	ball = new Paper(100, 300, 14);
	Engine.run(engine);
}


function draw() {
    Engine.update(engine);
	rectMode(CENTER);
	background("black");
	ground.display();
	binB.display();
	binL.display();
	binR.display();
	ball.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:31, y:-48})
	}
}