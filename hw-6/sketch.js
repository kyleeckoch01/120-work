function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 800 );
    frameRate(10);


}

function draw() {
  let orange = floor( random(256) );
  let yellow = floor( random(256) );
  let red = floor( random(256) );
  background( orange, yellow, red );

  noFill();
  stroke( 300 );

  let circle_size = random( 10, width-10 );
  ellipse( width/2, height/2, circle_size );

  var leftWall = 25;
  var rightWall = 75;

  var xm = mouseX;
  var xc = constrain(mouseX, leftWall, rightWall);

//walls
  stroke(300);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);

  //circles
  noStroke();
  fill(300);
  ellipse(xm, 50, 50, 50);
  fill(0);
  ellipse(xm, 50, 50, 50);
}
