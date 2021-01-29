var backGround,backGroundImg;
var mouse,mouseImg,mouseImg1,mouseImg2,mouseImg3;
var tom,tomImg,tomImg2,tomImg3; 
var mouse_collide

function preload() {
  backGroundImg =loadImage("garden.png");
  mouseImg =loadAnimation("images/jerryOne.png");
  mouseImg1 =loadAnimation("images/jerryTwo.png","images/jerryThree.png");
  mouseImg2 =loadAnimation("images/jerryFour.png");
  //mouseImg3 =loadAnimation("images/jerryOne.png");
  tomImg  =loadAnimation("images/tomOne.png");
  tomImg2  =loadAnimation("images/tomTwo.png","images/tomThree.png");
  tomImg3 = loadAnimation("images/tomFour.png");
}
//mouse.collide(tom);
function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
    //backGround=createSprite(400,200);
    //backGround=addImage(backGroundImg);

   mouse=createSprite(95,500);
   mouse.addAnimation("mouse",mouseImg)
   mouse.scale=0.1
  
   tom= createSprite(450,500);
   tom.addAnimation("tom",tomImg)
   tom.scale=0.1
   
}

  
  
 

function draw() {
     background(backGroundImg);

    keyPressed();

    if((tom.x-mouse.x)<150)
   
    
    {
      tom.addAnimation("tom2",tomImg3)
      tom.changeAnimation ("tom2")
      tom.velocityX=0
      mouse.addAnimation("mouse2",mouseImg3)
      mouse.changeAnimation("mouse2")
      
    }  
      
      
        
    //Write condition here to evalute if tom and jerry collide
    
      
    drawSprites();
}





function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
    mouse.addAnimation ("mouse1",mouseImg1)
    tom.addAnimation("tom1",tomImg2)
  
    tom.changeAnimation("tom1")
    tom.velocityX=-2
   // mouse.frameDelay=25
    mouse.changeAnimation("mouse1")
    
  
  }
 

}
