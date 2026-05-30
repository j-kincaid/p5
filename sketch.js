let x, y, r, g, b;

function setup() {
  // happens once
  createCanvas(windowWidth, windowHeight);
  // lineWidth = random(8, 20);
  background(0);
}

function draw() {
  // this function LOOPS
  r = random(255);
  g = 0;
  b = random(255);
  x = random(0, windowWidth); 
  y = random(0, windowHeight); 
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 24);
}
