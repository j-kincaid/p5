function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(0);
  rect(100, 200, 75, 125);
  ellipse(200, 400, 75, 125);
  triangle(30, 75, 58, 20, 86, 75);
  quad(360, 150, 80, 80, 80, 70, 360, 70);
  line();
  arc();
  console.log(mouseX);
  console.log(mouseY);
}