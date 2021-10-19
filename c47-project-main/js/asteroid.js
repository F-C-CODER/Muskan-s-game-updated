class Asteroid {
    constructor(){
        this.x=500;
        this.y=-20;
        this.width=100
        this.height=100
        this.image=loadImage("images/asteroid.png")
        this.asteroidGroup=createGroup();
       
    }
    display(){
    if(frameCount%60==0){
        this.asteroid = createSprite(this.x,this.y,this.width,this.height);
        this.x=Math.round(random(50,950))
        this.asteroid.addImage("asteroid",this.image);
        this.asteroid.scale=0.3;
        this.asteroid.velocityY=3;
        this.asteroidGroup.add(this.asteroid);
    }
    }
}