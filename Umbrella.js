class Umbrella{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        this.image = loadImage("Umbrellas.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, 200,200);
      }}