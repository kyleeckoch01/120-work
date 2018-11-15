let circles = [];

function setup() {
  createCanvas( 600, 600 );
  let c = new Circles(width/2, height/2, 10);
  circles.push(c);

}

function mouseDragged() {
  let r = random(20, 75);
  let c = new Circles(mouseX, mouseY, r);
  circles.push(c);
}

function draw() {
  background('black');
  for (let i = 0; i < circles.length; i++){
    circles[i].move();
    cicles[i].show();
  }
}

class Circles {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

  }
  move() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }
  show() {
    stroke(255);
    strokeWeight(7);
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }
}
