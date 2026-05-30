let x, y, r, g, b;

function setup() {
  // happens once
  createCanvas(1777, 1000);
  // lineWidth = random(8, 20);
  background(0);
}

function draw() {
  // this function LOOPS
  r = random(255);
  g = random(255);
  b = random(255);
  x = random(0, 1777); 
  y = random(0, 1000); 
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 24);
}
