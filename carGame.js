let gameState = "start";
let timer = 0;

let carImg;
let carX;
let carY;
let carSpeed = 5;

let roadLeft;
let roadRight;

let obsSpeed = 4;

let obs1X;
let obs1Y = 0;
let obs2X;
let obs2Y = 0;
let obs3X;
let obs3Y = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  roadLeft = width * 0.25;
  roadRight = width * 0.75;

  carX = width / 2;
  carY = height - 100;

  obs1X = random(roadLeft + 20, roadRight - 20);
  obs2X = random(roadLeft + 20, roadRight - 20);
  obs3X = random(roadLeft + 20, roadRight - 20);

  carImg = await loadImage("car.png");
}

function draw() {
  background(30, 36, 48);

  // road
  fill(58, 63, 75);
  rect(roadLeft, 0, roadRight - roadLeft, height);
  stroke(242, 201, 76);
  strokeWeight(4);
  line(width / 2, 0, width / 2, height);
  noStroke();

  // start screen
  if (gameState == "start") {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("Car Dodge", width / 2, height / 2 - 80);
    textSize(20);
    text("Use the LEFT and RIGHT arrow keys to move", width / 2, height / 2 - 20);
    text("Avoid the cones and stay on the road", width / 2, height / 2 + 15);
    text("Click to start", width / 2, height / 2 + 60);
  }

  // game
  if (gameState == "play") {

    // timer goes up by 1 every second
    if (frameCount % 60 == 0) {
      timer++;
    }

    // obstacles get faster as time goes up
    obsSpeed = 4 + timer * 0.2;

    // move the car
    if (keyIsDown(LEFT_ARROW) === true) {
      carX -= carSpeed;
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
      carX += carSpeed;
    }

    // game over if the car leaves the road
    if (carX < roadLeft || carX > roadRight) {
      gameState = "gameover";
    }

    // cone 1 (always there)
    obs1Y += obsSpeed;
    if (obs1Y > height) {
      obs1Y = 0;
      obs1X = random(roadLeft + 20, roadRight - 20);
    }
    drawCone(obs1X, obs1Y);
    if (dist(carX, carY, obs1X, obs1Y) < 35) {
      gameState = "gameover";
    }

    // cone 2 (appears after 5 seconds)
    if (timer >= 5) {
      obs2Y += obsSpeed;
      if (obs2Y > height) {
        obs2Y = 0;
        obs2X = random(roadLeft + 20, roadRight - 20);
      }
      drawCone(obs2X, obs2Y);
      if (dist(carX, carY, obs2X, obs2Y) < 35) {
        gameState = "gameover";
      }
    }

    // cone 3 (appears after 10 seconds)
    if (timer >= 10) {
      obs3Y += obsSpeed;
      if (obs3Y > height) {
        obs3Y = 0;
        obs3X = random(roadLeft + 20, roadRight - 20);
      }
      drawCone(obs3X, obs3Y);
      if (dist(carX, carY, obs3X, obs3Y) < 35) {
        gameState = "gameover";
      }
    }

    // car
    image(carImg, carX - 35, carY - 35, 70, 70);

    // score
    fill(255);
    textAlign(LEFT, TOP);
    textSize(20);
    text("Score: " + timer, 20, 20);
  }

  // game over screen
  if (gameState == "gameover") {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("GAME OVER", width / 2, height / 2 - 30);
    textSize(20);
    text("Score: " + timer, width / 2, height / 2 + 10);
    text("Click to play again", width / 2, height / 2 + 45);
  }
}

function drawCone(x, y) {
  fill(255, 140, 0);
  triangle(x - 15, y + 20, x + 15, y + 20, x, y - 20);
  fill(255);
  rect(x - 10, y + 8, 20, 5);
}

function mousePressed() {
  if (gameState == "start") {
    gameState = "play";
  } else if (gameState == "gameover") {
    timer = 0;
    carX = width / 2;
    obs1Y = 0;
    obs2Y = 0;
    obs3Y = 0;
    gameState = "play";
  }
}