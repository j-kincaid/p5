function setup() {
  createCanvas(1280, 720);
  // background layer goes behind the others
  background(0);
}

function draw() {
  // LOOPS
  // ellipse
  noStroke();
  fill(250, 255, 0, 80);
  ellipse(mouseX, mouseY, 75, 75);
  
  // rectangle
  rect(100, 200, 75, 125);
  //yellow fill
  fill(0, 255, 255);
  // triangle
  triangle(30, 75, 58, 20, 86, 75);
  // quad
  quad(360, 150, 80, 80, 80, 70, 360, 70);
  stroke(15, 0, 255);
  // ellipse
  ellipse(600, 500, 175, 125);
  stroke(0, 0, 255);
  // fill can use alpha 
  fill(85, 0, 255, 100);
  strokeWeight(6);
  line(130, 120, 185, 175);
  arc();
  console.log(mouseX);
  console.log(mouseY);
}

function mousePressed() {
  // an EVENT: waits for something to happen
  background(0);
}