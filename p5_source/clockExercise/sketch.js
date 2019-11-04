function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  angleMode(DEGREES);//FROM DEGREES T0 RADIANS
}//DEGREES WORKS FOR CLOCK IN SECONDS

function draw() {
  background(0);

  rectMode(CENTER);
  translate(width / 2, height / 2);
  let s = second();
  console.log(s);
  translate(p5.Vector.fromAngle(second() / 60, 60));
  var p = map(s, 0, 60, 0, 360);
  rotate(s-90);
  rect(0, 0, 40, 40);


  push();
 let m= minute();
 //console.log(m);
 scale(width/10,height/10);
 //var a=map(m,0,60,0,360);
 rotate(m-90);
 stroke(10);
 fill(255);
ellipse(0,-1,30,0);
//pop();


}
