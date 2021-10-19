const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var bg, bgImage;
var engine, world;
var canvas;
var lives = 3;
var score = 0;
var bullet, bulletGroup;
var hearts=[]
var heart

function preload() {
    //load the images here
   bgImage=loadImage("images/space.png")
   heartImage=loadImage("images/heart.png");
   bulletImage=loadImage("images/bullet.png")
}

function setup(){
    canvas = createCanvas(1000,800);
    engine=Engine.create();
    world=engine.world;
    bg = createSprite(width/2, height/2);
    bg.addImage("bg", bgImage);
    bg.scale=2
   
    
  //  heart1 = createSprite(width-225, height-725, 20, 20)
   // heart1.addImage("heart1",heartImage);
   // heart1.scale=.2;
    
   // heart2 = createSprite(width-150, height-725, 20, 20)
   // heart2.addImage("heart2",heartImage);
   // heart2.scale=.2;

   // heart3 = createSprite(width-75, height-725, 20, 20)
   // heart3.addImage("heart3",heartImage);
   // heart3.scale=.2;

    for(var i=75;i<=225;i=i+75)
    {
        heart = createSprite(width-i, height-725, 20, 20)
        heart.addImage("heart",heartImage);
        heart.scale=0.2;
        hearts.push(heart)
    }


    bulletGroup=createGroup();

    earth = new Earth ()
    asteroid = new Asteroid ();
    plane = new Plane();
    dinosaur = new Dinosaur(990,790)

}

function draw() {

    background("black");

    Engine.update(engine);

    if(keyDown("space")){
        shootBullet();
    }

    //if(bulletGroup.collide(asteroid.asteroidGroup)){
    //    score=score+20;
    //    asteroid.asteroid.destroy();
    //    bulletGroup.destroyEach();
   // }
   
    bulletGroup.overlap(asteroid.asteroidGroup, function(collector, collected) {
      score=score+20;
        
        collected.remove();
        bulletGroup.destroyEach();
     });

    

   if(asteroid.asteroidGroup.isTouching(earth.planet)){
        console.log(hearts)
       
        asteroid.asteroidGroup.destroyEach();
        hearts[hearts.length-1].destroy()
        hearts.pop()
        
    }
    
   

    drawSprites();

    textSize(25);
    text("score : " + score, width-200, height-650)
    if(hearts.length==0){
        text("gameOver",500,100)
        asteroid.asteroidGroup.setVelocityEach(0);
    }
    
    earth.display();
    asteroid.display();
    plane.display();
    dinosaur.display();
    plane.handlePlaneMovement();

    
}

// function windowResized(){
//     resizeCanvas(windowWidth,windowHeight)
// }

function shootBullet(){
    bullet= createSprite(500, 450, 50,20)
    bullet.x=plane.x
    bullet.addImage(bulletImage)
    bullet.scale=0.12
    bullet.velocityY= -7
    bulletGroup.add(bullet);
  }

