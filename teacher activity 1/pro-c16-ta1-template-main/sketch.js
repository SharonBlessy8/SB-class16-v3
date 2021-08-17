var box1, box2;

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100,50,50,50);
  box2 = new Box(200,200,50,50);
}

function draw() 
{
  background(220);

box1.show();
box1.set_speed(2);

box2. show();
box2.set_speed(1);
}

