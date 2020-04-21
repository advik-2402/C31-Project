var snake;
var scl = 20;
var food;

function setup() {
  createCanvas(800,400);
   snake = new Snake();
   frameRate(10);
   pickLocation();
}

function draw() {
  background("grey"); 
  
  if(snake.eat(food)) {
    pickLocation();
  }

  snake.death();
  snake.update();
  snake.show();

  fill("red");
  rect(food.x,food.y,scl,scl);
}

function pickLocation(){
  var columns = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(columns)),floor(random(rows)));
  food.mult(scl);
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    snake.dir(0,-1);
  }
  else if(keyCode === DOWN_ARROW) {
    snake.dir(0,1);
  }
  else if(keyCode === RIGHT_ARROW) {
    snake.dir(1,0);
  }
  else if(keyCode === LEFT_ARROW) {
    snake.dir(-1,0);
  }
}