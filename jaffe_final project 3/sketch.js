
var maze
var x, y; // some variables for the current position of the turtle
var currentangle = 90; // we start out facing north
var step = 5; // how many pixels do we move forward when we draw?
var angle = 90; // how many degrees do we turn with '+' and '-'

var moffset_x = 20; // this is the x offset for drawing the maze
var moffset_y = 20; // this is the y offset for drawing the maze

var mwidth = 600; // this is how wide we're ACTUALLY drawing the maze
var mheight = 600; // this is how tall we're ACTUALLY drawing the maze

var lep; // text file
var osc;

function preload() {
maze = loadImage('./data/maze1.jpg');
gold = loadImage('./data/gold.jpg');
lep = loadStrings ('./data/leptext.txt');

}

function setup() {
  createCanvas(800, 650);

  x = 85;
  y = 20;
  maze.loadPixels(); // this you need so you can ask for pixel values
  osc = new p5.Oscillator(); // set it up
  osc.setType('sine'); // what kind of sound?
  osc.start(); // start it going
  

}


function draw() {
  background(0);
  fill(0);
  image(maze, moffset_x, moffset_y, mwidth, mheight); // draw the maze
  fill(random(128, 255), random(0, 192), random(0, 70), random(50, 100))
  stroke(random(12, 255), random(0, 19), random(100, 170), random(50, 200))
  ellipse(x, y, 10, 10); // draw the cursor
  image(gold, 390, 580, 45, 45)
  text(lep, 342, 612)
  var thefreq = map(x, y, width,500, 100);
  osc.freq(thefreq);
 
 
}

function keyPressed()
{
  var xtoget = 0;
  var ytoget = 0;
  
  
  console.log(keyCode); // what key did we type?
  
  // this is all about checking to see if you're hitting a wall BEFORE we let you move:
  if(keyCode==UP_ARROW) {
    xtoget = floor((maze.width/mwidth)*(x-moffset_x));
    ytoget = floor((maze.height/mheight)*(y-moffset_y-step));
    if(maze.get(xtoget, ytoget)[0]==255)
    {
     y-=step;
    }
  }
  else if(keyCode==DOWN_ARROW) {
    xtoget = floor((maze.width/mwidth)*(x-moffset_x));
    ytoget = floor((maze.height/mheight)*(y-moffset_y+step));
    if(maze.get(xtoget, ytoget)[0]==255)
    {
      y+=step;
     
    }
  }
  else if(keyCode==LEFT_ARROW) {
    xtoget = floor((maze.width/mwidth)*(x-moffset_x-step));
    ytoget = floor((maze.height/mheight)*(y-moffset_y));
    if(maze.get(xtoget, ytoget)[0]==255)
    {
      x-=step;
      
    }
  }
  else if(keyCode==RIGHT_ARROW) {
    xtoget = floor((maze.width/mwidth)*(x-moffset_x+step));
    ytoget = floor((maze.height/mheight)*(y-moffset_y));
    if(maze.get(xtoget, ytoget)[0]==255)
    {
      x+=step;
    }
  }

}

