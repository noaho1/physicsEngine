// it is like variable that stores a value in comp memory but it is constant and it's value does not change throughtout the execution of program

// namespacing -> giving a different name(nick name) to a large name 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {

  canvas = createCanvas(1200, 600)

  // created engine using Matter.Engine create() method and called it engine
  engine = Engine.create();

  // we can use engine to create World
  world = engine.world;

  //JSON format of storing Data
  var ground_options = {
    //options is used for overriding/changing the default settings of the body object

    isStatic: true

  }
  // created body/ground object using Bodies Module -> with options
  ground = Bodies.rectangle(200, 380, 1200, 60, ground_options);

  //Adding object to the ground
  World.add(world, ground);

  var ball_options = {
    //options is used for overriding/changing the default settings of the body object

    restitution: 0.5

  }
  // created body/ground object using Bodies Module -> with options
  ball = Bodies.circle(300, 200, 50, ball_options);

  //Adding object to the ground
  World.add(world, ball);

  console.log(ground);


}

function draw() {
  background(255, 255, 255);
  Engine.update(engine); // updating engine which is in line 

  // rect(x,y, width,height)
  rect(ground.position.x, ground.position.y, 1200, 20);

  ellipse(ball.position.x, ball.position.y, 50, 50);

}