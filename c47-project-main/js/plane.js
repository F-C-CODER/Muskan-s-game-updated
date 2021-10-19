class Plane {
    constructor(){
        this.x= 500
        this.y=450
        this.width=300
        this.height=200
        this.image=loadImage("images/plane.png")
        //this.velocityY=3;
    }
    display(){
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    }
    
    handlePlaneMovement(){
        if(keyDown(LEFT_ARROW)){
            this.x=this.x-15;
        }
        if(keyDown(RIGHT_ARROW)){
            this.x=this.x+15;
        }
    }
}