// press any key to draw elipses 
// release space bar to reset

var r, g, b, w, h;


function setup() {
  createCanvas(800,600);

  background(0, 0, 0, 0);
  
  x1 = width/2;
  y1 = height/2;
  
  
}

var value = 0;

  var value = 0;
function draw() {
  fill(value);
}

function draw() {
  // Click within the image to change
// the value of the rectangle
// after the mouse has been clicked
var value = 0;
if (keyIsPressed === true) {
      // this fades out the previous stuff
  noStroke();
  fill(0, 0, 0, 10);
  rect(0, 0, width-1, height-1);
  
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
  r = random(0,500);
  g = random(0, 500);
  b = random (0, 500);
 //beginShape();
 fill(r,g,b)

  beginShape();
  ellipse(mouseX, mouseY,50+b,10+r);
  endShape(); 
  beginShape();
  ellipse(mouseX+drunky, mouseY+drunkx ,7,7);
  endShape(); 
  beginShape();
  ellipse(mouseX+r/drunkx, mouseY+g/drunky,5,5);
  endShape(); 
  
  x2 = x1+random(-200, 200);
  y2 = y1+random(-200, 200);
  fill(0,0,0,0)
  stroke(r,g,b,100)
  line(mouseX,mouseY, r, r)
  
  fill(0,0,0,0)
  stroke(r,g,b,100)
  line(mouseX,mouseY, b,b)
  
  } else {

  // this fades out the previous stuff
  noStroke();
  fill(0, 0, 0, 10);
  rect(0, 0, width-1, height-1);
  
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
  r = random(0,500);
  g = random(0, 500);
  b = random (0, 500);
 //beginShape();
 fill(r,g,b)

  beginShape();
  ellipse(mouseX+r/5+drunkx, mouseY+b/5+drunky ,10,10);
  endShape(); 
  beginShape();
  ellipse(mouseX+drunky, mouseY+drunkx ,7,7);
  endShape(); 
  beginShape();
  ellipse(mouseX+r/drunkx, mouseY+g/drunky,5,5);
  endShape(); 
  
  x2 = x1+random(-200, 200);
  y2 = y1+random(-200, 200);
  fill(0,0,0,0)
  stroke(r,g,b,100)
  line(mouseX,mouseY, r, r)
  
  fill(0,0,0,0)
  stroke(r,g,b,100)
  line(mouseX,mouseY, b,b)



}

}
function keyReleased()
{
  if(key==' ') clear(); // clears the canvas
}
