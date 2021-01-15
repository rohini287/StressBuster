const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone_img
var ground,box1,box2,box3,box4,box5,box6,box7,box8
var ground1,ground2,stone
var bg
function preload(){
  stone_img=loadImage("stone.jpeg");
  bg=loadImage("bg.jpg");
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(500,570,1000,30);
    box1= new Box(600,550,50,70);
    box2=new Box(625,550,50,70);
    box3=new Box(650,550,50,70);

    box4=new Box(600,515,50,70);
    box5=new Box(625,515,50,70);
    box6=new Box(650,515,50,70);

    box7=new Box(600,480,50,70);
    box8=new Box(625,480,50,70);
    box9=new Box(650,480,50,70);
    
    box10=new Box(600,445,50,70);
    box11=new Box(625,445,50,70);
    box12=new Box(650,445,50,70);
    
    box13=new Box(600,410,50,70);
    box14=new Box(625,410,50,70);
    box15=new Box(650,410,50,70);
    
    ground1=new Ground(270,360,10,400);
    ground2=new Ground(320,200,100,10)
    
    stone=Bodies.circle(350,300,40);
    World.add(world,stone);

    slingshot=new Slingshot(this.stone,{x:370,y:200})

    


}
function draw(){
   Engine.update(engine);
   background(bg);

   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();

   ground1.display();
   ground2.display();

   slingshot.display();

   imageMode(CENTER);
   image(stone_img,stone.position.x,stone.position.y,40,40);
}
function mouseDragged(){
    Matter.Body.setPosition(this.stone,{x:mouseX,y:mouseY})
}
