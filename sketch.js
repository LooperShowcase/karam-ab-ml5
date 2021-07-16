let player;
let pImg;
let oImg;
let bgImg;
let obstacles = [];
let wordClassifier;

function preload(){
  bgImg = loadImage("game_background_71-.jpg");
  pImg = loadImage("player.gif")
  oImg = loadImage("unnamed.png")
  let options={
    probabilityThreshold:0.85,
  };
  wordClassifier=ml5.soundClassifier('SpeechCommands18w', options);
}


function setup() {
  createCanvas(900, 400);
 player = new Player();
 wordClassifier.classify(hearWord);
}

function hearWord(error,results){
  if(results[0].label=="up"){
    player.jump();
  }
}



function keyPressed(){
if(key==" "){
    player.jump();
  }
}
/*
function mouseClicked() {
if(KEY==" "){
  player.jump();
}
}
*/



function draw() {
  background(bgImg);
  player.show();

  player.move();

  if(random(1)<0.01){
    obstacles.push(new Obstacle());

  }
for(let obs of obstacles){
  obs.show();
  obs.move();
  if(player.collided(obs)==true){
    console.log("3 years old kid better that you");
    noLoop();
    
  }
}

}
