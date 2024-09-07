let bg, music;
let welcome, aim, gamePlay;
function preload(){
  bg = loadImage('Pictures/bg.png');
  music = createAudio('Sounds/music.mp3');
  welcome = document.getElementById("welcome");
  aim = document.getElementById("aim");
  gamePlay = document.getElementById("gamePlay");
}

let objects;
function setup() {
  createCanvas(400, 400);
  objects = new Objects();
  music.play();
}

function draw() {
  background(bg);
  
  objects.display();
  objects.CloudCollisionControl();
  objects.TreasureCollisionControl();
  objects.Warning();
  objects.Complete();
  
  welcome.style.position="relative";
  aim.style.position="relative";
  gamePlay.style.position="relative";
}