
let flower;
let lineBrushBool = false;
let ellipseBrushBool = false;
let imageBrushBool = false;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  flower = await loadImage('flower.png');
  imageMode(CENTER);
}

function draw() {
  if (lineBrushBool === true) {
    lineBrush();
  }
  if (ellipseBrushBool === true) {
    ellipseBrush();
  }
  if (imageBrushBool === true) {
    imageBrush();
  }
}

function lineBrush() {
  stroke(random(255), random(255), random(255));
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function ellipseBrush() {
  fill(random(255), random(255), random(255));
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 20, 20);
  }
}

function imageBrush() {
  if (mouseIsPressed) {
    image(flower, mouseX, mouseY, 40, 40);
  }
}

function keyPressed() {
  if (key === 'l') {
    lineBrushBool = true;
    ellipseBrushBool = false;
    imageBrushBool = false;
  }
  if (key === 'e') {
    lineBrushBool = false;
    ellipseBrushBool = true;
    imageBrushBool = false;
  }
  if (key === 'f') {
    lineBrushBool = false;
    ellipseBrushBool = false;
    imageBrushBool = true;
  }
  if (key === 'c') {
    lineBrushBool = false;
    ellipseBrushBool = false;
    imageBrushBool = false;
    background(255);
  }
}