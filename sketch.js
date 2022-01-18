var count = 25;
var col;
var row;
var sizeX = 50;
var sizeY = 28;
var shape;

// Preload loads SVG shape and puts it in an array.
// Array can be expanded in the future with more shapes.
function preload() {
  shape = [];
  shape.push(loadImage('SVG/Asset 1.svg'));
}
 
function setup() {
  createCanvas(1920, 1080);
  imageMode(CENTER);
  // Sets the width and height of the tiles in the grid.
  col = width / 25;
  row = height / 15;
}
 
function draw() {
  // Clear gives the canvas a transparant background.
  clear();
 
  for (var y = 0; y < count; y++) {
    for (var x = 0; x < count; x++) {
      
      // Determines position of shapes in the grid.
      var posX = col * x + col / 2;
      var posY = row * y + col / 2;
 
      // calculate angle between mouse position and actual position of the shape.
      var angle = atan2(mouseY - posY, mouseX - posX);
 
      push();
      translate(posX, posY);
      rotate(angle);
      noStroke();
      image(shape[0], 0, 0, sizeX, sizeY);
      pop();
    }
  }
}