var bgImg;
var kitty, mouse;
var kittyImg1, kittyImg2, kittyImg3;
var mouseImg1, mouseImg2, mouseImg3;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");

    kittyImg1 = loadAnimation("cat1.png");
    kittyImg2 = loadAnimation("cat2.png","cat3.png");
    kittyImg3 = loadAnimation("cat4.png");

    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    kitty = createSprite(800,600);
    kitty.addAnimation("kitty",kittyImg1);
    kitty.scale = 0.2;
    mouse = createSprite(120,640);
    mouse.addAnimation("rat",mouseImg1);
    mouse.scale = 0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(kitty.x - mouse.x < (kitty.width - mouse.width)/2){
        kitty.velocityX =0;
        kitty.addAnimation("kittysitting", kittyImg3);
        kitty.changeAnimation("kittysitting");
        kitty.x =140;

        mouse.addAnimation("mousehappy", mouseImg3);
        mouse.changeAnimation("mousehappy");
        mouse.x = 100;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){

      kitty.velocityX =-6;
      kitty.addAnimation("catRunning", kittyImg2);
      kitty.changeAnimation("catRunning");

      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 20;
  }
}
