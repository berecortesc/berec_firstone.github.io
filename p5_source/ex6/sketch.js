// example 6.3

    // This uses the transformation matrix tools to move,
    //rotate and scale things as batch operations
    var numbers = [90, 30, 30, 45, 12, 78, 56, ];
    var words= ["a", "b", "c", "d", "e", "f","g", ];

    var numbers2 = [
       [0, 0, 0, 0, 0, 0, 0],
       [0, 0, 1, 0, 1, 0, 0],
       [0, 0, 1, 0, 1, 0, 0],
       [0, 0, 0, 0, 0, 0, 0],
       [0, 1, 0, 0, 0, 1, 0],
       [0, 0, 1, 1, 1, 0, 0],
       [0, 0, 0, 0, 0, 0, 0]
       ];

    function setup() {
    createCanvas(500, 500);
    background(0, 60, 150);
    fill(100);
    //translate example
    push();
    translate(20, 20);
    drawarray(255);

    pop();

    //and rotate
    push();
    translate(150, 20);
    rotate(radians(45));
    drawarray(255);
    pop();

    //and scale
    push();
    translate(200, 200);
    rotate(radians(-45));
    scale(3.0);
    drawarray(100);
    pop();
    }
    function drawarray(fade) {
    for (var i = 0; i < numbers.length; i++) {
      if(words[i] =="r")
      {
        fill(255,0,0);
        rect(i * 10, 20,10,10);
      }
      else if {
        fill(0,0,255);
        rect(i * 10, 20, 10, 10);
      }
      else {
    fill(numbers2[2][i] * 255,fade);
    rect(i * 10, 20, 10, 10);
    text(words[i] * 10, 20, 10, 10)
    }
  }
}
