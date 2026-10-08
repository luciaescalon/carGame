let bgColor;
let circleColor;
let flower;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  flower = await loadImage("flower.png");

  bgColor = color(222, 44, 172);
  circleColor = color(130, 200, 75);
}

function draw() {
  background(bgColor);

  stroke(120, 40, 200);
  strokeWeight(10);
  line(50, 100, 500, 600);

  // this is how you write notes

  fill(circleColor);
  stroke(70, 140, 100);
  strokeWeight(5);
  ellipse(300, 350, 100, 100);

  // notes
  fill(80, 120, 220);
  rect(450, 200, 100, 200);

  fill(230, 200, 80, 200);
  noStroke();
  ellipse(400, 200, 50, 50);

  noFill();
  stroke(70, 200, 100);
  strokeWeight(20);
  triangle(100, 500, 200, 550, 50, 600);

  // IMAGE
  image(flower, 400, 450, 100, 100);
}


// MOUSE EVENT
function mousePressed() {
  bgColor = color(
    random(255),
    random(255),
    random(255)
  );
}


// KEY PRESSED EVENT
function keyPressed() {
  circleColor = color(
    random(255),
    random(255),
    random(255)

    
  );
}
