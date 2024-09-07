let robo, baymax, grayCloud, whiteCloud, prize, goal;
let cw1,cw2,cw3,cw4,cw5,cw6, cg1,cg2,cg3,cg4,cg5,cg6,cg7; 
let finishSound, hitSound;

class Objects{
  constructor(goalX, goalY, goalW, goalH,cwW,cwH, cgW,cgH){
    robo = loadImage('Pictures/character2.png');
    grayCloud = loadImage('Pictures/cg.png');
    whiteCloud = loadImage('Pictures/cw.png')
    prize = loadImage('Pictures/treasure.png');
    finishSound = createAudio('Sounds/finishSound.wav');
    hitSound = createAudio('Sounds/hit.wav');
    
    this.goalX=-10; this.goalY=-20; this.goalW=130; this.goalH=130;
    this.cwW=100; this.cwH=37.5; this.cgW=50; this.cgH=25;
    
    this.cw1x=40;this.cw1y=350; this.cw2x=280;this.cw2y=300;
    this.cw3x=150;this.cw3y=230; this.cw4x=10;this.cw4y=150;
    this.cw5x=270;this.cw5y=90; this.cw6x=140;this.cw6y=30;
    
    this.cg1x=185;this.cg1y=310; this.cg2x=50;this.cg2y=230;
    this.cg3x=230;this.cg3y=160; this.cg4x=320;this.cg4y=240;
    this.cg5x=50;this.cg5y=85; this.cg6x=310;this.cg6y=20;
    this.cg7x=140;this.cg7y=110;
    
    this.cloudCollision=false;
    this.treasureCollision = false;
    
    mouseX=120; mouseY=330;
  }
  
  display(){
   cw1 = image(whiteCloud,this.cw1x,this.cw1y,this.cwW,this.cwH); 
   cw2 = image(whiteCloud,this.cw2x,this.cw2y,this.cwW,this.cwH); 
   cw3 = image(whiteCloud,this.cw3x,this.cw3y,this.cwW,this.cwH); 
   cw4 = image(whiteCloud,this.cw4x,this.cw4y,this.cwW,this.cwH);
   cw5 = image(whiteCloud,this.cw5x,this.cw5y,this.cwW,this.cwH);
   cw6 = image(whiteCloud,this.cw6x,this.cw6y,this.cwW,this.cwH);
   
   cg1 = image(grayCloud,this.cg1x,this.cg1y,this.cgW,this.cgH);
   cg2 = image(grayCloud,this.cg2x,this.cg2y,this.cgW,this.cgH);
   cg3 = image(grayCloud,this.cg3x,this.cg3y,this.cgW,this.cgH);
   cg4 = image(grayCloud,this.cg4x,this.cg4y,this.cgW,this.cgH);
   cg5 = image(grayCloud,this.cg5x,this.cg5y,this.cgW,this.cgH);
   cg6 = image(grayCloud,this.cg6x,this.cg6y,this.cgW,this.cgH);
   cg7 = image(grayCloud,this.cg7x,this.cg7y,this.cgW,this.cgH);
    
   goal = image(prize,this.goalX,this.goalY,this.goalW,this.goalH);
   baymax = image(robo,mouseX,mouseY,50,50);
  }
  
  CloudCollisionControl(){
    if((mouseX>this.cw1x&&mouseX<this.cw1x+this.cwW)||(mouseY>this.cw1y&&mouseY<this.cw1y+this.cwH)){
      this.cloudCollision = true;
    }
    else if((mouseX>this.cw2x &&mouseX<this.cw2x+this.cwW)||
(mouseY>this.cw2y && mouseY<this.cw2y+this.cwH)){
              this.cloudCollision = true;
            }
    else if((mouseX>this.cw3x &&mouseX<this.cw3x+this.cwW)|| 
(mouseY>this.cw3y && mouseY<this.cw3y+this.cwH) ){
              this.cloudCollision = true;
            }
    else if((mouseX>this.cw4x &&mouseX<this.cw4x+this.cwW)||
(mouseY>this.cw4y && mouseY<this.cw4y+this.cwH)){
              this.cloudCollision = true;
            }
    else if((mouseX>this.cw5x &&mouseX<this.cw5x+this.cwW)||
(mouseY>this.cw5y && mouseY<this.cw5y+this.cwH) ){
              this.cloudCollision = true;
            }
    else if((mouseX>this.cw6x &&mouseX<this.cw6x+this.cwW)|| 
(mouseY>this.cw6y && mouseY<this.cw6y+this.cwH)){
              this.cloudCollision = true;
            }
    else if((mouseX>this.cg1x &&mouseX<this.cg1x+this.cgW)|| 
(mouseY>this.cg1y && mouseY<this.cg1y+this.cgH) ){
              this.cloudCollision = true;
            }
    else if((mouseX>this.cg2x &&mouseX<this.cg2x+this.cgW)|| 
(mouseY>this.cg2y && mouseY<this.cg2y+this.cgH)){
              this.cloudCollision = true;
            }
    else if((mouseX>this.cg3x &&mouseX<this.cg3x+this.cgW)|| 
(mouseY>this.cg3y && mouseY<this.cg3y+this.cgH)){
              this.cloudCollision = true;
            }
    else if((mouseX>this.cg4x &&mouseX<this.cg4x+this.cgW)|| 
(mouseY>this.cg4y && mouseY<this.cg4y+this.cgH)){
              this.cloudCollision = true;
            }
    else if((mouseX>this.cg5x &&mouseX<this.cg5x+this.cgW)|| 
(mouseY>this.cg5y && mouseY<this.cg5y+this.cgH)){
              this.cloudCollision = true;
            }
    else if((mouseX>this.cg6x &&mouseX<this.cg6x+this.cgW)|| 
(mouseY>this.cg6y && mouseY<this.cg6y+this.cgH)){
              this.cloudCollision = true;
            }
    else if((mouseX>this.cg7x &&mouseX<this.cg7x+this.cgW)|| 
(mouseY>this.cg7y && mouseY<this.cg7y+this.cgH)){
              this.cloudCollision = true;
            }
    else{
      this.cloudCollision = false;
    }
  }
  
  TreasureCollisionControl(){
    if((mouseX>this.goalX &&mouseX<this.goalX+this.goalW)|| (mouseY>this.goalY && mouseY<this.goalY+this.goalH)) {
      this.treasureCollision = true;
    }
    else{
      this.treasureCollision = false;
    }
  }
  
  Warning(){
    if(this.cloudCollision == true){
      console.log("Oh No! You hit an obstacle! Try again :'( ")
      hitSound.autoplay(true);
      mouseX=120; mouseY=330;
    }
  }

  Complete(){
    if(this.treasureCollision == true){
      finishSound.autoplay(true);
      console.log("Congratulations! You have successfully reached the treasure! :D");
      mouseX=0; mouseY=0;
    }
  }
}