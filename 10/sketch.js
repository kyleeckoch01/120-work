//create an array
let go = [12, 30, 50, 100, 150, 200, 250, 300, 350, 425];

function setup() {
  createCanvas(600, 575);

}

function draw(){
  //background
  background('black');

  //add balls
  createBall(go[0],go[0],go[0],go[0]);
  createBall(go[1],go[1],go[1],go[1]);
  createBall(go[2],go[2],go[2],go[2]);
  createBall(go[3],go[3],go[3],go[3]);
  createBall(go[4],go[4],go[4],go[4]);
  createBall(go[4],go[4],go[4],go[4]);
  createBall(go[5],go[5],go[5],go[5]);
  createBall(go[6],go[6],go[6],go[6]);
  createBall(go[7],go[7],go[7],go[7]);
  createBall(go[8],go[8],go[8],go[8]);
  createBall(go[9],go[9],go[9],go[9]);


}

function createBall(x,y,w,h) {
  fill('rgb(204, 102, 0)');
  stroke('rgb(204, 153, 0)');
  strokeWeight();
  ellipse(x * 1.33, y * .66, w * .38, h * .18);

  fill('white');
  stroke('white');
  strokeWeight();
  ellipse(x * 1.85, y * .48, w * .35, h * .25);

  fill('rgb(204, 153, 0)');
  stroke('rgb(204, 153, 0)');
  strokeWeight();
  ellipse(x * 1.5, y * .12, w * .28, h * .15);

  fill('rgb(204, 153, 0)');
  stroke('rgb(204, 153, 0)');
  strokeWeight();
  ellipse(x * 1.25, y * 1.05, w * .35, h * .25);

  fill('rgb(204, 102, 0)');
  stroke('rgb(204, 102, 0)');
  strokeWeight();
  ellipse(x * 1.12, y * 1.46, w * .45, h * .25);

  fill('white');
  stroke('white');
  strokeWeight();
  ellipse(x * .75, y * 2.2, w * .75, h * .35);

  fill('rgb(204, 153, 0)');
  stroke('rgb(204, 153, 0)');
  strokeWeight();
  ellipse(x * .35, y * 4.8, w * .95, h * .5);



}
