let angle = 45;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  
  var xoff = 0;
  //push();
  
  //pop();
  // These two loops create the grid.
  // Change the number in i<40 to change the amount of columns.
  for (var i = 0; i < 30; i++) {
    var yoff = 0;
    
    // Change the number in j<24 to change the amount of rows.
    for (var j = 0; j < 20; j++){
      background(255);

      // First number in x and y determine the space between objects in the grid.
      // Second number determines x and y offset from starting point.
      var x = j * 25;
      var y = i * 25;

      // Value of d and e sets the diameter of the drawn objects.
      var d= (noise(xoff, yoff) * 40) * frameCount;
      noiseDetail(10);
      // var d = 5;
     
      
      fill(0, 0, 0, 75);
      noStroke();
      ellipse(x, y, d);
      
      xoff += 0.1;
    }
    yoff += 0.1;
  }; 
}

