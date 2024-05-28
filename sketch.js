function setup() {
  createCanvas(600, 600);
  background("skyblue");
}

function draw() {
  stroke ("steelblue");
  fill ("steelblue")
  
  if (mouseIsPressed) {
    circle (mouseX,mouseY, 40, 65);
  }
}