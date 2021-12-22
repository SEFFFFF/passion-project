
function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
}

function draw() {
  background(255);

  var xoff = 0;
  // These two loops create the grid.
  // Change the number in i<40 to change the amount of columns.
  for (var i=0; i<windowWidth; i++) {
    var yoff = 0;
    // Change the number in j<24 to change the amount of rows.
    for (var j=0; j<windowHeight; j++){

      // First number in x and y determine the space between objects in the grid.
      // Second number determines x and y offset from starting point.
      var x= j * 25;
      var y= i * 25;

      // Value of d and e sets the diameter of the drawn objects.
      var d= noise(xoff, yoff) * 40;
      noiseDetail(10);
      
      fill(0);
      noStroke();
      ellipse(x, y, d);
      xoff += 0.1;
    }
    yoff += 0.1;
  }; 
}

