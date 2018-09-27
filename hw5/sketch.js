//person sketch with animation

function setup() {
  createCanvas( windowWidth, 600 );
  //createCanvas
}

let headAngle = 0;
let headRotationRate = 0;

function draw() {
  background( 'black');
  //remove cursor
  noCursor();

  //head rotation
  headRotationRate = (mouseY * 0.2) - 30
  //head angle
  headAngle = headAngle + headRotationRate;

  push();

  translate( mouseX, mouseY );

  //body
  push();
  rectMode(CENTER);
  fill( 'grey' );
  rect( 0, 0, 100, 200 );
  pop();

  //details
  push();
  rectMode(CENTER);
  fill( 'black');
  rect( 0, 0, 60, 35 );
  pop();

  push();
  fill( 'red' );
  ellipse( 0, 0, 20, 20 );
  pop();

  //head
  push();
  translate(0, -130);
  rotate( radians(headAngle) );
    fill( 'grey');
    ellipse(0, 0, 130, 175);
    pop();

//eye
  push();
  translate( 0, -150 );
    fill(255);
    ellipse( 0, 0, 55, 50 );
    noFill();
    fill( 'blue' );
    ellipse( 0, 0, 30 );
    fill( 0 );
    ellipse( 0, 0, 20 );
  pop();

  //mouth
  push();
  rectMode(CENTER);
  fill('white');
  rect( 0, -90 , 50, 25 );
  pop();


  //arms
  push();
  fill( 'grey' );
  rect( 50, -50, 10, 90);
  pop();

  push();
  fill( 'grey' );
  rect( -50, -50, -10, 90);
  pop();

  //legs
  push();
  fill ( 'grey' );
  rect( -50, 100, 25, 150)
  pop();

  push();
  fill( 'grey' );
  rect( 50, 100, -25, 150);
  pop();



}
