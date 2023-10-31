let y;
let x; //x and y are for moving rect (player)
let enemies = [];
let coins = [];
let player;
let rotation = 1;
let coinCount = 0;
let mode;

function preload() {
  img = loadImage("bckg.jpg");
  ghost = loadImage("ghost.png");
  mainmenu = loadImage("startmenu.jpg");
  gameover = loadImage("gameover.jpg");
  myFont = loadFont("Playfair.ttf");
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("game");

  mode = 0;

  //I've updated your array of enemies to spawn at the start of the program. The enemy class functions are called in the draw. Update this single for loop to add more enemies
  for (let i = 0; i < 10; i++) {
    let x = random(110, 790);
    let y = random(465, 490);
    let r = 50;
    enemies[i] = new Enemy(x, y, r);
  }
  for (let i = 0; i < 20; i++) {
    let x = random(10, 790);
    let y = random(10, 490);
    let r = 10;
    coins[i] = new Coin(x, y, r);
  }

  player = new Player();
}

function draw() {
  background(img);
  textFont("Playfair");
  rotation++;

  if (mode == 0) {
    fill(255);

    background(mainmenu);
    textAlign(CENTER);

    textSize(20);
    textFont("Playfair");
    text("Use arrow keys to move", 200, 290);
    text("Collect the coins", 200, 315);
    text("Avoid the spikes", 200, 340);
    textSize(35);
    fill(189, 36, 72);
    text("Press SPACE to start", 200, 390);
  } else if (mode == 1) {
    //we setup another for loop to handle the array of enemies and their respective functions
    for (let i = 0; i < enemies.length; i++) {
      enemies[i].show();
      enemies[i].move();
      enemies[i].bounce();
      enemies[i].collide(player); //this parameter is filled by the player (this connects to the other.x/y values)
    }
    for (let i = 0; i < coins.length; i++) {
      coins[i].show();
    }
    coinCounter();
    collectCoin();

    player.show();
    player.move();
    if (coinCount == 20) {
      mode = 3;
    }
  } else if (mode == 2) {
    fill(255);

    background(gameover);
    textAlign(CENTER);
    textSize(24);
    text("You died...", 400, 380);
    textSize(24);
    text("Press R to restart", 400, 420);
  } else if (mode == 3) {
    background(mainmenu);
    textSize(36);
    text("You Win!", 200, 380);
    textSize(24);
    text("Press R to restart", 200, 420);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    mode = 1;
  }

  if (keyCode === 82) {
    mode = 0;
  }
}

function coinCounter() {
  fill(255);
  textSize(20);
  text("Coins collected: " + coinCount, 80, 50);
}

//you created a function here with the coins[i].overlap, so I've added a function with that name within your coin class. The other.x,other.y, is read by the arguement within the function, which is the player.
function collectCoin() {
  for (let i = 0; i < coins.length; i++) {
    if (coins[i].overlap(player)) {
      coins.splice(i, 1);
      coinCount++;
    }
  }
}
