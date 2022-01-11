var count;
var size;
var dia;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
}


function draw() {
  background(0);
  translate(width / 2, height / 2);
  count = map(mouseX, 0, width / 2, 0, 200);
  //size = map(mouseY, 0, height, 25, 200);
  //dia = map(mouseX, 0 , width / 2, 5, 25);
  //count = 100;
  size = 10;
  for (var i = 0; i < count; i++) {
    rotate((360 / 30) + frameCount * 0.0002);
    noStroke();
    fill(255);
    ellipse(size, size, 10);
    size += 3;
    dia += 2;
  }
}
