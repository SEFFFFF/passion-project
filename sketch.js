var circles;
var dia;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(0);
}

function draw() {
  
  // Dictates amount of circles based on mouseX value.
  circles = mouseX / 30 + 1;
  
  for (var i = 0; i < 20; i++); {
    // Sets the min and max diameter of the ellipse.
    dia = map(i, 0, circles, 25, 250)
    noFill();
    stroke(255, 0, 0, 50);
    ellipse(width / 2, height / 2, dia);
  }
}
