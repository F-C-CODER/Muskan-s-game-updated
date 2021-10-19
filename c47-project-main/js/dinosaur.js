class Dinosaur{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 3
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 200;
      this.height = 100;
      this.image = loadImage("images/dinosaur.png")
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        image(this.image, pos.x, pos.y, this.width, this.height);
        Matter.Body.applyForce(this.body,this.body.position,{x:-1, y:-1.5})
    }
}
