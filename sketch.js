
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // These two loops create the grid.
  // Change the number in i<40 to change the amount of columns.
  for (var i=0; i<40; i++) {

    // Change the number in j<24 to change the amount of rows.
    for (var j=0; j<24; j++){

      // First number in x and y determine the space between objects in the grid.
      // Second number determines x and y offset from starting point.
      var x= i * 50 + 24;
      var y= j * 50 + 24;

      // Value of d sets the diameter of the drawn objects.
      var d= 25;
      
      fill(0);
      noStroke();
      ellipse(x, y, d);
    }
  };
  
}

