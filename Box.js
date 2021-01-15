class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'frictionAir':0.005,
            'density':1.0
        }
        this.x=x
        this.y=y
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position
      
        push();
        translate(this.body.position.x, this.body.position.y);
       fill("yellow")
       stroke("purple");
       strokeWeight(5);
        rectMode(CENTER)
        rect(0,0, this.width, this.height);
        pop();
      }
}