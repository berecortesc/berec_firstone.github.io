var count = 20;
var countOne = 20;// mine
var col = 163;
var posX = new Array(count);
var posY = new Array(count);
var posB = new Array(countOne);
var posC = new Array(countOne);
var speedX = new Array(count);
var speedY = new Array(count);
var speedB = new Array(countOne);
var speedC = new Array(countOne);
var sizeW = new Array(count);
var sizeH = new Array(count);
var sizeC = new Array(countOne);
//var colors = [color('#ff0046')];
//let k = color(153,0,76);


function setup() {
  createCanvas(800, 600);


  noStroke();
  for (var i=0; i < posX.length; i++) {
    posX[i] = width/2;
    posY[i] = height/2;
    posB[i] = width;//
    posC[i] = height;//
    speedX[i] = random(-5, 5);
    speedY[i] = random(-5, 5);
    speedB[i] = random(-5,20); //mine
    speedC[i]= random(-4,4);
    sizeW[i] = random(20, 25);
    sizeH[i] = random(20, 100);
    sizeC[i]= random(10,20);
    fill(255,0,0);
  //  colors[i] = var (random(k));
  }
}
function draw() {
  //frameRate(130);
  background(0);
  fill(153,200,89);
  rect(40, 40, width-80, height-80);
  for (var i = 0; i < posX.length; i++) {
    //update all positions
    posX[i] += speedX[i];
    posY[i] += speedY[i];
    posB[i] += speedB[i];
    posB[i] =+ speedC[i];
    //draw all balls
    fill(random(255));// used to be array, must be fixed
    ellipse(posX[i], posY[i], sizeW[i], sizeW[i]);
    rect(posX[i], posB[i], sizeC[i], sizeC[i]);
    //check boundaries for all balls

    if (posX[i] < 40+sizeW[i]/2 || posX[i] > (width-40)-sizeW[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (posY[i] < 40+sizeW[i]/2 || posY[i] > (height-40)-sizeW[i]/2) {
      speedY[i] = -speedY[i];
       // }
    if (posB[i] < 40+sizeC[i]/2 || posB[i] > (width-40)-sizeC[i]/2 ) {
      speedB[i] = -speedB[i];
         //}
    //if (posC[i] < 40+sizeC[i]/2 || posC[i] > (width-40)-sizeC[i]/2 ) {
      //speedC[i] = -speedC[i];
    }
    else
    {
         noLoop();
    }
    //saveFrame();
  }
}
}
