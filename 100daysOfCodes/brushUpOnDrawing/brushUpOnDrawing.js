/** 
EECS 1720 LAB04
Shana Isaac 216 753 477
Jan 20th - Random drawing

**/

function setup() {
  createCanvas(480, 120);
}


function draw() {
  background(205);

  beginShape();
  vertex(50, 120);
  vertex(100, 90);
  vertex(110, 60);
  vertex(80, 20);
  vertex(210, 60);
  vertex(160, 80);
  vertex(200, 90);
  vertex(140, 100);
  vertex(130, 120);

  endShape();
  fill(0);
  ellipse(155, 60, 8, 8);
}
