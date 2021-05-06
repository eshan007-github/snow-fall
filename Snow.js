class Snow{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.r=50
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}