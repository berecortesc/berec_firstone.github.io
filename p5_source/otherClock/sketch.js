function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  angleMode(DEGREES);//FROM DEGREES T0 RADIANS
}//DEGREES WORKS FOR CLOCK IN SECONDS

function draw() {
  background(0);

push();
let millisecond = mills();
translate

pop();


  push();
  rectMode(CENTER);
  translate(width / 2, height / 2);
  let s = second();
  console.log(s);
  translate(p5.Vector.fromAngle(second() / 60, 60));
  var p = map(s, 0, 60, 0, 360);
  rotate(s-90);
  rect(0, 0, 40, 40);
  pop();

push();
let m= minute();
scale(0.5+sin(m*10)*0.25);
makeCircles();
pop();
}
function makeCircles()
{
fill(250, 238, 2);
ellipse(0,0,width,height);
}
