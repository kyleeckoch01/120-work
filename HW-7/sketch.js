

let ball = {};
ball.width = 40;
ball.x = 20;
ball.y = 20;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 600);
    background('black');
}

let color = false


function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    if(ball.x <=400){
      fill(204, 153, 0);
    } else if (ball.x <= 750){
      fill('white');
    } else if (ball.x <= 1050){
        fill('red');
    } else if (ball.x <= 1250){
        fill ('white');
    } else if (ball.x <= 1500){
          fill(204, 102, 0);
      }
    {

      }

    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.25, 20);
    ball.scale_y = map(mouseY, 0, height, 0.25, 20);

}
