class Paper {
    constructor(x, y,radius){
      var options = {
        isStatic:false,
       'restitution':0.3,
       'friction':1.4,
       'density':1.2
  }
  
  this.body=Bodies.circle(x,y,radius/2,options);
  this.radius=radius
  this.image=loadImage("paper.png")
  World.add(world, this.body);
 }
    
   display(){
   var pos =this.body.position;
   var angle = this.body.angle;
   push();
   translate(pos.x, pos.y);
   strokeWeight(2);
   image(this.image,0,0,this.radius,this.radius),
   stroke(0);
   pop();
 }
}