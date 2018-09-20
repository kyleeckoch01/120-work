function setup(){
  createCanvas( 600, 900 );
}

function draw(){
  background ( 'black' );
//body
  push();

  translate( 300, 450 );
//top
  push();
  rectMode(CENTER);
  fill( 'pink' );
  rect(0, 0, 275, 375);
  pop();
//buttons
  push();
  fill( 'grey' );
  ellipse(-5, -125, 15, 15);
  ellipse(-5, -50, 15, 15);
  ellipse(-5, 30, 15, 15);
  ellipse(-5, 110, 15, 15);
  pop();
//head
  push();
  translate(0, -285);
    fill( 'tan');
    ellipse(0, 0, 350, 200);
    pop();
//eye L
    push();
    translate( -60, -300 );

    fill(255);
    ellipse( 0, 0, 55, 30 );
    noFill();
    fill( 'brown' );
    ellipse( 0, 0, 30 );
    fill( 0 );
    ellipse( 0, 0, 20 );
    pop();
//eye R
    push();
       translate( 60, -300 );

       fill(255);
       ellipse( 0, 0, 55, 30 );
       noFill();
       fill( 'brown' );
       ellipse( 0, 0, 30 );
       fill( 0 );
       ellipse( 0, 0, 20 );
       pop();
//mouth
       fill('pink');
       arc(0, -250, 75, 60, 0, PI, CHORD);
       pop();
//skirt
       push();
      rectMode(CENTER);
      fill('grey');
      rect(300, 700, 275, 175, 0, 0, 30, 30);
      pop();
//legs
    push();
    translate( 292, 788 );
    fill('tan');
    triangle(10, 0, 100, 0, 210, 190);
    triangle(-10, 0, -100, 0, -210, 190);
    pop();
//hair
    push();
    fill('brown');
    rect(140, 55, 315, 50, 50, 30, 0, 0);
    pop();

    push();
    fill('brown');
    rect(125, 55, 85, 300, 50, 0, 0, 0);
    pop();

    push();
    fill('brown');
    rect(400, 55, 85, 300, 0, 50, 0, 0);
    pop();
//arms
    push();
    fill('pink');
    rect(105, 345, 60, 220, 40, 40, 0 ,0);

    push();
    fill('pink');
    rect(435, 345, 60, 220, 40, 40, 0 ,0);

    push();
    fill('tan');
    ellipse(465, 600, 70);

    push();
    fill('tan');
    ellipse(135, 600, 70);
    pop();


}
