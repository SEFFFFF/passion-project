// var s determines grid size.
// Increase number to make the grid larger.
// Decrease number to make the grid smaller.
var size = 30;
var col;
var row;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  col = width / size;
  row = height / size;
}

function draw() {
  background(255);
  var yoff = 0;
  // In both for loops change the numbers in y / x += 1.5 to alter distance between objects.
  for (var y = 0; y <= row; y += 1.5) {
    var xoff = 0;
    for (var x = 0; x <= col; x += 1.5) {
      // angle creates random noise value.
      // Change PI to TWO_PI for a more random angles.
      // This value can be further altered by dividing or multiplying PI/TWO_PI.
      var angle = noise(xoff, yoff) * PI * 2;
      // v creates a vector starting at the value of angle.
      var v = p5.Vector.fromAngle(angle);
      stroke(0);
      push();
      translate(x * size, y * size);
      rotate(v.heading());
      line(0, 0, size, 0);
      pop();
      xoff += 0.1;
    }
    yoff += 0.1;
  }
}
