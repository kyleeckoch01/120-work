function setup() {
  createCanvas(windowWidth, 700);

}

function draw() {
  background('black');

  // Draw sun
  stroke(50);
  fill(255, 204, 0);
  ellipse(150, 350, 200, 200);
  //draw mercury
  stroke(50);
  fill(102, 102, 153);
  ellipse(375, 350, 35, 35);
// draw venus
  stroke(50);
  fill(204, 102, 0);
  ellipse(485, 350, 50, 50);
//draw earth
stroke(50);
fill(51, 204, 255);
ellipse(575, 350, 40, 40);
// draw mars
stroke(50);
fill(179, 45, 0);
ellipse(650, 350, 35, 35);
//draw Jupiter
stroke(50);
strokeWeight(0);
fill(102, 153, 153);
ellipse(750, 350, 85, 85);
//draw saturn
stroke(50);
fill(179, 179, 0);
ellipse(850, 350, 50, 50);
//draw rings
stroke(102, 102, 153);
strokeWeight(5);
noFill();
ellipse(850, 350, 75, 15);
//draw uranus
stroke(10);
fill(102, 153, 204);
ellipse(1000, 350, 65, 65);
//draw neptune
stroke(10);
fill(187, 153, 255);
ellipse(1350, 350, 50, 50);

//drawing the orbits
//orbit one
stroke(255, 50);
strokeWeight(1);
noFill();
ellipse(0, 350, 787, 120);
//orbit 2
stroke(255, 50);
noFill();
ellipse(0, 350, 1023, 175);
//orbit 3
stroke(255, 50);
noFill();
ellipse(0, 350, 1190, 195);
//orbit 4
stroke(255, 50);
noFill();
ellipse(0, 350, 1337, 230);
//orbit 5
stroke(255, 50);
noFill();
ellipse(0, 350, 1590, 300);
//orbit 6
stroke(255, 50);
noFill();
ellipse(0, 350, 1745, 435);
//orbit 7
stroke(255, 50);
noFill();
ellipse(0, 350, 2063, 500);
//orbit 8
stroke(255, 50);
noFill();
ellipse(0, 350, 2747, 550);

//add stars
for (var i = 0; i < 200; i++) {
  var x = random(windowWidth);
  var y = random(windowHeight);

  noStroke();
  fill(255, 255, 0);
  ellipse(x, y, 2, 2);

}
}
