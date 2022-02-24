const splashScreen = document.querySelector(".game-intro");
const gameScreen = document.querySelector(".game-board");
const gameOverScreen = document.querySelector(".game-over");

let road;
let player;
let car;
let block;


function preload() {
  road = loadImage("../images/road.png");
  car = loadImage("../images/car.png");
}

function setup() {
  const canvas = createCanvas(500, 700);
  canvas.parent("game-board");
  player = new Player(210.5, 500, 79, 159.5);
  frameRate(60);
}

function draw() {
  background(road);
  image(car, player.x, player.y, player.width, player.height);

  if ((keyIsDown(LEFT_ARROW) && player.x > 50)) {
    player.x += -7;
  } else if ((keyIsDown(RIGHT_ARROW) && player.x < 375)) {
    player.x += 7;
  }
}

function startGame() {
  splashScreen.style.display = "none";
  
}

function stopGame() {
  splashScreen.style.display = "none";
  gameScreen.style.display = "none";
  gameOverScreen.style.display = "block";
}
/*
function createCoordinates(){
  xcoord = Math.floor((Math.random() * (40-400)) +40);
  ycoord = Math.floor((Math.random() * (1-300)) +1);
  widthcoord = Math.floor((Math.random() * (100-200)) +100);
  heightcoord = Math.floor((Math.random() * (10-50)) +10);
}
*/
class Obstacle {
  constructor(x, y, width, height) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }
}
class Player {
  constructor(x, y, width, height) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;

  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();

  }
};

