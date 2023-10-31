class Enemy {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.xspeed = random (3,5);
    this.yspeed = random(-3, -5);
  }

  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  show() {
    rectMode(CENTER);
    angleMode(DEGREES);
    push();
    translate(this.x, this.y);
    rotate(rotation);

    stroke(255);
    fill(255);
    ellipse(0, 0, 25, 25);

    //noFill();
    //ellipse(0, 0, 50, 50); // I added a collision sphere to check the radius of the enemy.

    fill(255);
    triangle(0 + 11, 0 + 7, 0 + 12, 0 - 5, 0 + 20, 0 + 6);
    triangle(0 + 2, 0 + 13, 0 + 10, 0 + 19, 0 + 10, 0 + 8);
    triangle(0 - 7, 0 + 21, 0 + 1, 0 + 13, 0 - 7, 0 + 10);
    triangle(0 - 19, 0 + 11, 0 - 13, 0 + 1, 0 - 8, 0 + 10);
    triangle(0 - 25, 0 - 5, 0 - 10, 0 - 8, 0 - 13, 0 + 2);
    triangle(0 + 15, 0 - 18, 0, 0 - 12, 0 + 10, 0 - 5);
    triangle(0 - 8, 0 - 20, 0 - 10, 0 - 7, 0 + 1, 0 - 10);
    pop();
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1;
    }

    if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1;
    }
  }

  //you were pretty close, I set up a paremeter for the collide function. This "other" references the player.
  collide(other) {
    let d = dist(other.x, other.y, this.x, this.y);

    //change the 25 number to something smaller or larger depending on how forgiving you want the game to be.
    if (d < 30) {
      mode = 2;
    }
  }
}
