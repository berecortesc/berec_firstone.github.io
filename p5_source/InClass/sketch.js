var img;
var k;
var counter = 2;
function preload() {
  img = loadImage('images/animals.jpg');
}

function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  k = color(100, 50, 150);

}

function draw() {
   image(img, 0, 0);
   k.setAlpha(255-counter);
  fill(k);
 ellipse(width/2, counter, 50, 50);
counter ++;
}
