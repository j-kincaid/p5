
let circleX = 100;
let rad = 100; 
function setup() {
  // happens once
  createCanvas(400, 300);
}

function mousePressed() {
  circleX = 4;
}

function draw() {
  // this function LOOPS
  // background layer goes behind the others
  background(0);
  noStroke();
  fill(255);
  circle(circleX, 10, rad);
  circleX += 0.5;
  rad += 0.15;
}
