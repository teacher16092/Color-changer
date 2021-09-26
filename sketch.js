var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  background(r, g, b);
  btn_red = createButton("RED");
  btn_red.position(100, 100);

  btn_green = createButton("GREEN");
  btn_green.position(300, 100);

  function draw() {
    // background(r, g, b);
    btn_red.mousePressed(redbg);
    btn_green.mousePressed(greenbg);
  }
}

function redbg() {
  background("red");
}

function greenbg() {
  background("green");
}
