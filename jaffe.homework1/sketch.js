var r, g, b, w, h;

function setup() {
  createCanvas(800,600);
  
  background(250,150,0);
  
  x1 = width/2;
  y1 = height/2;
  
}

function draw() {
  //fade
  //noStroke();
  //fill(0, 0, 0, 10);
  
  var dx = (mouseX-x1)/20.;
  var dy = (mouseY-y1)/20.;

  var drunkx = 0.;
  drunkx += random(-20, 20);
  drunkx += random(-20, 20);
  drunkx += random(-20, 20);
  drunkx = drunkx / 3.;
  var drunky = 0.;
  drunky += random(-20, 20);
  drunky += random(-20, 20);
  drunky += random(-20, 20);
  drunky = drunky / 3.;
  
  // variables
  r = random(1,255);
  g = random(1, 255);
  b = random (1, 255);
 beginShape();
vertex(mouseX, mouseY);
bezierVertex(mouseX/r, mouseY, width-1, height-1, mouseX, 20);
bezierVertex(mouseX, mouseY, (mouseX+1), (mouseY+1), (mouseX+3), (mouseY+3));
stroke(100,150,200,80);
endShape(); 


}