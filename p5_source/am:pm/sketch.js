function setup() {
createCanvas(500,500);
background(20);
stroke(255);
angleMode(DEGREES);
}

function draw() {
background(0);
let s = second();
let min = minute();
let hr = hour();
console.log(hr + " " + min + " " + s);

fill(60);
ellipse(width/2,height/2, 30,30);

fill(150);
// marking


//  var ms = map(s,0,60,0,360);
for ( var i = 0; i <360; i+=6 ) {
  push();
  translate(width/2, height/2);
  rotate(-90);  // offset rotate
  rotate(i);
  //line(0,0,150,0);
  ellipse(150,0, 2,2);
  pop();
}

fill(255);
// secs
push();

translate(width/2, height/2);
var ms = map(s,0,60,0,360);
rotate(-90);  // offset rotate
rotate(ms);
//line(0,0,150,0);
ellipse(150,0, 5,5);
pop();

// min
push();
translate(width/2, height/2);
var mm = map(min,0,60,0,360);
rotate(-90);  // offset rotate
rotate(mm);
//line(0,0,120,0);
ellipse(120,0, 5,5);
pop();


//hour
push();
translate(width/2, height/2);
var mh = map(hr,0,12,0,360);
rotate(-90);  // offset rotate
rotate(mh);
//line(0,0,80,0);
ellipse(80,0, 5,5);
pop();

if (mouseIsPressed) {

  showtext();

}


}


function showtext() {
  push();
  translate(width/2-220,height/2);
  scale(3.0);
  console.log("TOD is" + " " +isAMPM(hour())) ;
  console.log("hour" + " " + convert24hrTo12(hour())) ;
  let str;
  str = convert24hrTo12(hour()) + ":";
  str += minute() + ":";
  str += second() + " " ;
  str += isAMPM(hour()) ;
  textSize(19);
  textAlign(CENTER);
  text(str,0, 0, 180,20);
  pop();
}


function isAMPM (hrs) {
let tod;
if (hrs < 12) {  //its AM
tod = "AM";
} else { //otherwise PM
tod = "PM";
}
return tod;
}

function convert24hrTo12 (hrs) {
let nuHr;
if (hrs < 13) {  //its normal 12 hour range
  nuHr = hrs;
} else { // switch it from 24 to 12
  nuHr = hrs-12;
}
return nuHr;
}
