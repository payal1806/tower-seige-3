const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball;
var stand1;
var ball;
var slingshot;
var polygon_img;

var score=0;

function preload() {
  
  polygon_img=loadImage('polygon.png');
    
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground=new Ground();
    stand1=new Stand(390,300,250,10);
    

    //first floor
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);

    //second floor
    
    block13=new Box(360,195,30,40);
    block14=new Box(390,195,30,40);
    block15=new Box(420,195,30,40);
  
    //third floor

    block16=new Box(390,155,30,40);
 
    ball=Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot=new SlingShot(this.ball,{x:100,y:200});
}





function draw() {
  background(255,255,255);  

  textSize(20);
  fill("red");
  text("SCORE : "+score,750,40);

  ground.display();

  fill("gold")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turqouise")
  block13.display();
  block14.display();
  block15.display();
  fill("purple")
  block16.display();

  stand1.display();

  slingshot.display();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  
  imageMode(CENTER);
  image(polygon_img,ball.position.x,ball.position.y,40,40);
  
  

  drawSprites();

}

function mouseDragged(){

Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}
function mouseReleased(){

slingshot.fly();

}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.ball);
  }
}

