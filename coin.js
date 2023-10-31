class Coin {
  constructor(tempX, tempY, tempR) {
    //added a this.r for the radius. 
    this.x = tempX;
    this.y = tempY;
    this.r = tempR; //adding a variable here to track the radius
  }

  show() {
    fill(235, 190, 68);
    ellipse(this.x, this.y, this.r*2);
  }
  
  //just like the enemy, coin needs it's own overlap function. You are calling coins[i].overlap within the sketch so we need a function here within the coin class
  
  //the whole "other" setup, is basically a parameter that we call within the overlap function. This other, will be the player and the other.x and other.y basically is player.x, player.y. We can't write player.x/.y since this is within the coin class
  overlap(other) {
    let d = dist(other.x, other.y, this.x, this.y);
    //print(d);
    if (d < this.r*2) {
      return true;
    } else {
      return false;
    }
  }
      
}
