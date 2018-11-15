let balls = [];
const numOfBalls = 65;

function setup() {

    createCanvas(windowWidth, windowHeight);

    let init_x = 70;
    let init_y = 70;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));

        init_x += 1300;
        if (init_x > width) {
            init_x = 10;
            init_y += 130;
        }
    }
}

function draw() {
    background('grey');

    for (let i = 0; i < balls.length; i++) {
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
    }
}

class Ball {
    constructor(x, y, size) {
        this.color = 'purple';
        this.size = random(10, 100);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(-5, 5);
    }


        display() {
            push();

            noStroke();
            fill(this.color);
            translate(this.posX, this.posY);
            ellipse(0, 0, this.size);
            pop();
        }

        move() {
            this.posX += this.deltaX;
            this.posY += this.deltaY;
        }

        edgeCheck() {
            if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
                this.deltaX *= -1;
                this.color = 'pink';
            }

            if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
                this.deltaY *= -1;
                this.color = 'purple';
            }
        }


    ballCheck(otherBalls, myId) {
          for (let n = 0; n < otherBalls.length; n++) {
          if (n != myId) {
              let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
              let combinedR = this.rad + otherBalls[n].rad;

                  if (d <= combinedR) {
                  this.deltaX *= -1;
                  this.deltaY *= -1;
                      if( this.color == 'orange') {
                          this.color = 'pink';
                      } else {
                          this.color = 'white';
              }
            }
          }
        }
      }
  }
