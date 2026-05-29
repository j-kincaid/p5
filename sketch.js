function setup() {
  createCanvas(1280, 720);
}

function draw() {
  // background layer goes behind the others
  background(0);
  // rectangle
  rect(100, 200, 75, 125);
  // ellipse
  ellipse(200, 400, 75, 125);
  stroke(0, 0, 255);
  //yellow fill
  fill(255, 255, 0);
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