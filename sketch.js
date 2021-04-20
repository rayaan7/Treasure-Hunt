var bgimg;
var treasureimg;
var form ;
var system;
var code;
var security;
var score=0;

function preload() {
  bgimg = loadImage("images/aladdin_cave.jpg");
  treasureimg = loadImage("images/treasure.jpg");

}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bgimg);
  clues();
  security.display();
  textSize(20);
  fill("White");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(treasureimg)
    fill("White")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}