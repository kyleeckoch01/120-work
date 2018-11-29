function setup() {
  createCanvas(windowWidth, 500);
}

function draw() {
  let numPerRow = 175;
  let circleSize = 5;
  let pad = width / numPerRow;

  background('black');
  for (let y = circleSize; y < height; y+= pad) {
    for (let x = circleSize; x < width; x += pad) {
      fill( 255, 200, random(255) );
      ellipse( x, y, circleSize, circleSize );

    }
  }

}
