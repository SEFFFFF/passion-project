var count;
var size;
var dia;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Sets the beginning of the row in the center of the screen.
  translate(width / 2, height / 2);

  // count dictates the amount of dots based on the mouseX position.
  // Map translates the mouseX value and reassigns it a value between 0 and 200.
  count = map(mouseX, 0, width / 2, 0, 200);
  size = 10;
  for (var i = 0; i < count; i++) {
    rotate((360 / 30) + frameCount * 0.0002);
    noStroke();
    fill(255);
    ellipse(size, size, 10);
    // size and dia create the offset which make the star shape.
    size += 3;
    dia += 2;
  }
}
