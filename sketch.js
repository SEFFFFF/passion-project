
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (var i=0; i<40; i++) {
    for (var j=0; j<24; j++){
      var x= i * 50 + 24;
      var y= j * 50 + 24;
      var d= 25;
      
      fill(0);
      noStroke();
      ellipse(x, y, d);
    }
  };
  
}

