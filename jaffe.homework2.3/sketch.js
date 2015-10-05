
var whitney; // this is gonna hold the text file

var currentline = '';
var whitneypositions = new Array();
var whitneysizes = new Array();

var thefont;

function preload(){
  whitney = loadStrings ('./data/whitney.txt');
  thefont = loadFont('./data/font1.otf'); // loads font
}

function setup() {
  frameRate(random(70))
  createCanvas(800,600);
  console.log(whitney.length);
  textFont(thefont);
  doit();
}

function draw(){
  background(255);
  var xposition = mouseX; // where I am typing
  var yposition = mouseY
  fill (0,200,100)
  stroke (0,255,255)
 
  
  for(var i = 0;i<currentline.length;i++)
  {
    textSize(whitneysizes[i]);
    text(currentline.charAt(i), xposition, whitneypositions[i]);
    xposition+=textWidth(currentline.charAt(i));
    whitneypositions[i] += random(1,5);
  }
}

function keyReleased()
{
  doit();
}
function doit()
{
  var whichline = floor(random(0, whitney.length)); 
  currentline = whitney[whichline];
  whitneypositions = new Array(currentline.length);
  whitneysizes = new Array(currentline.length);
  for(var i = 0;i<currentline.length;i++)
  {
    whitneypositions[i] = 0;
    whitneysizes[i] = random(20, 50);
  }

}