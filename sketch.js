const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//first layer var
var box1,box2,pig1,log1, ground;

//second layer var
var box3,box4,pig2,log2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
    //first layer
    pig1= new Pig(810,320);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    log1= new Log(810,290,300,PI/2);

    //second layer
    pig2= new Pig(810,270);
    box3 = new Box(700,270,70,70);
    box4 = new Box(920,270,70,70);
    log2= new Log(810,240,300,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
}
