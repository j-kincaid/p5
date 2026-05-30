let squareSize;
let lineWidth;

function setup() {
  // happens once
  createCanvas(1777, 1000);
  // lineWidth = random(8, 20);
  background(100);
}


function draw() {
  // this function LOOPS

  lineWidth = random(3, 40);
  squareSize = random(7, 300);
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(0, 0, 255, 10);
  fill(255, 255, 0, 18);
  square(200, 150, squareSize);
}
