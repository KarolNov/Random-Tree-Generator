function Leaf(d, size) {
  this.r     = round(random(size*1.005));
  this.r     = constrain(this.r, 0, size);
  this.aOff  = PI/4;
  this.a     = random(PI/2-this.aOff, PI*3/2+this.aOff);
  this.x     = this.r*sin(this.a);
  this.y     = this.r*cos(this.a);
  this.d     = d;
  this.pos   = createVector(this.x+mouseX, this.y+mouseY);
  this.reached = false;
  this.min_dist = 10;
  this.max_dist = 50;
  
  this.show = function() {
    push();
  	colorMode(HSB);
  	var col = map(this.r, 0, size, 0, 360);
    fill(col, 100, 100);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.d, this.d);
    pop();
  }

}