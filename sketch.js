 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];
var particles = [];


var divisionHeight=300;
var score = 0;
var count = 0;

var gameState = "play";
var particle;

var engine;
var world;


function preload(){
 
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    if(keyCode === 32){
      if(gameState !== "end"){
        count++
        particle = new Particle(mouseX, 10, 10, 10);
      }
    }

    
}
 

function draw() {
  background("black");
  Engine.update(engine);

  noStroke();
  textSize(20)
  fill("white");
 text("Score : "+score,20,30);

   textSize(30);
   fill("yellow");
   text("100", 20, 550);
   text("100", 100, 550);
   text("100", 180, 550);
   text("200", 260, 550);
   text("200", 340, 550);
   text("200", 420, 550);
   text("300", 500, 550);
   text("300", 580, 550);
   text("500", 660, 550);
   text("500", 740, 550);

   ground.display();
   

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
 
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();

  }

  if(count>= 5){
    gameState = "end";
  }

  if(gameState === "end"){
    textSize(70);
    text("GameOver!!", 300, 400);
    textSize(50);
    text("Your Score:" + score, 400, 500);
  }

  if(particle !== null){

    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x < 240){
        score = score+ 100;
        particle = null;
      }

      else if(particle.body.position.x < 480){
           score = score+ 200;
           particle = null;
      }

      else if(particle.body.position.x < 640){
        score = score + 300;
        particle = null;
      }

      else if(particle.body.position.x < 800){
        score = score+ 500;
        particle = null;
      }
    }
    }

  

}







