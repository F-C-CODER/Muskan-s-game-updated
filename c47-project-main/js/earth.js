class Earth {
    constructor(){
        this.x=width/2
        this.y=height-100
        this.width=1000
        this.height=400
        this.image=loadImage("images/earth.png")
        
    }
    display(){
    this.planet = createSprite(this.x,this.y,this.width,this.height);
    this.planet.addImage("planet",this.image);
    this.planet.scale=1.7;
    this.planet.setCollider("circle",0,300,400)
    

    }
}