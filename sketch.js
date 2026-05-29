var circleX = 0;
var squareY = 15;
var fillG = 100;
var strokeB = 0;

function setup() {
  // happens once
  createCanvas(1280, 720);
  
  // background layer goes behind the others
  background(0);
}

function draw() {
  // this function LOOPS

  // ellipse
  // noStroke();
  // fill(250, 255, 0, 80);
  ellipse(circleX, 450, 75, 75);
  circleX = circleX + 1;
  
  // rectangle
  rect(100, squareY, 75, 125);
  squareY+=2;
  //yellow fill
  fill(0, fillG, fillG);
  fillG-=1;
  // triangle
  triangle(30, 75, 58, 20, 86, 75);
  // // quad
  quad(360, 150, 80, 80, 80, 70, 360, 70);
  stroke(15, 0, strokeB);
  strokeB += 1;
  // // ellipse
  // ellipse(600, 500, 175, 125);
  // stroke(0, 0, 255);
  // // fill can use alpha 
  // fill(85, 0, 255, 100);
  // strokeWeight(6);
  // line(130, 120, 185, 175);
  // arc();
  console.log(mouseX);
  console.log(mouseY);
}

function mousePressed() {
  // an EVENT: waits for something to happen
  background(0);
}