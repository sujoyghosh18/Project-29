const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon,slingshot;

function preload(){
	polygon_img=loadImage("polygon.png");
  }

  function setup() {
  createCanvas(1200,500);
  //createSprite(200, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(600,height,1200,20);

  polygon = Bodies.circle(100,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

  stand1 = new Ground(505,300,250,10);
  stand2 = new Ground(800,150,200,10);

  block1 = new Box(415,275,30,40);
  block2 = new Box(445,275,30,40);
  block3 = new Box(475,275,30,40);
  block4 = new Box(505,275,30,40);
  block5 = new Box(535,275,30,40);
  block6 = new Box(565,275,30,40);
  block7 = new Box(595,275,30,40);

  block9 = new Box1(445,235,30,40);
  block10 = new Box1(475,235,30,40);
  block11 = new Box1(505,235,30,40);
  block12 = new Box1(535,235,30,40);
  block13 = new Box1(565,235,30,40);

  block14 = new Box2(475,195,30,40);
  block15 = new Box2(505,195,30,40);
  block16 = new Box2(535,195,30,40);

  block17 = new Box3(505,155,30,40);

  block18 = new Box(735,125,30,40);
  block19 = new Box(765,125,30,40);
  block20 = new Box(795,125,30,40);
  block21 = new Box(825,125,30,40);
  block22 = new Box(855,125,30,40);

  block23 = new Box1(765,85,30,40);
  block24 = new Box1(795,85,30,40);
  block25 = new Box1(825,85,30,40);

  block26 = new Box3(795,45,30,40);
}

function draw() {
  background("red");  
  ground.display();

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  
  stand1.display();
  stand2.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  block14.display();
  block15.display();
  block16.display();
  
  block17.display();

  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  block23.display();
  block24.display();
  block25.display();

  block26.display();

  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body);
  }
}