class Player {
  constructor() {
    this.x = 100;
    this.y = 450;
    this.xspeed = 3;
    this.yspeed = -3;
  }

  //updated the move function to connect to the "this.x, this.y" values
  move() {
    if (keyIsDown(UP_ARROW)) {
      this.y = this.y - 3;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y = this.y + 3;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + 3;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x - 3;
    }
  }

  show() {
    fill(252, 213, 96);
    noStroke();
    image(ghost, this.x, this.y, 40, 40);
  }
}
