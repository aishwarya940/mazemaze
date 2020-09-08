var bg
var pc
var w1,w2,w3
var r1,r1img
var a1,a2,a1I,a2I;
var gameState = "door1"
function preload(){
r1img = loadImage("que1.png")
bg = loadImage("floor.jpg");
a1I =loadImage("AS1.png");
a2I =loadImage("AS2.png")
loss =loadImage("LOSS.png")
r2img = loadImage("question2.png")
r3img = loadImage("question3.jpg")
r4img = loadImage("question4.png")
r5img = loadImage("question5.png")
r6img = loadImage("question6.png")
r7img = loadImage("question7.jpg")
r8img = loadImage("triangleriddles.jpg")
number12img = loadImage("12no.jpg")
number15img = loadImage("15no.jpeg")
no1 = loadImage("1n.jpg")
no9 = loadImage("9.png")
no48 = loadImage("48.png")
no51 = loadImage("51.png")
no18 = loadImage("18.jpg")
no27 = loadImage("27.jpg")
}
function setup() {
  createCanvas(800,600);
  bg1 = createSprite(400,300)
  bg1.addImage(bg)
  bg1.scale=2
  rand = Math.round(random(1,4))
  pc = createSprite(50,50,50,50);
  w1 = createSprite(90,130,10,400);
  //w2 = createSprite(135,330,100,10);
   w3 = createSprite(90,510,10,200);
  w4 = createSprite(135,465,100,10)
   w5 = createSprite(190,280,10,370)
  d1 = createSprite(92,370,10,80) 
  d1.shapeColor = "red"
  r1 = createSprite(400,300,50,50);
  
  r1.addImage("riddle1",r1img)
  r1.addImage("riddle2",r2img)
  r1.addImage("riddle3",r3img)
  r1.addImage("riddle4",r4img)
  r1.addImage("riddle5",r5img)
  r1.addImage("riddle6",r6img)
  r1.addImage("riddle7",r7img)
  r1.addImage("riddle8",r8img)
  r1.visible=false;
  a1 = createSprite(347,560,25,25);
  a3 = createSprite(347,100,25,25);
  a5 = createSprite(147,560,25,25);
  a7 = createSprite(147,160,25,25);
  a9 = createSprite(457,560,25,25);
  
  a1.addImage("r1",a1I);
  a3.addImage("r2", number12img)
  a5.addImage("r3",no1)
  a7.addImage("r4",no48)
  a9.addImage("r5",no18)
 a1.visible=false;
  a2 = createSprite(460,560,25,25);
  a4 = createSprite(460,100,25,25);
  a6 = createSprite(200,560,25,25);
  a8 = createSprite(200,160,25,25);
  a10 = createSprite(488,560,25,25);
  a2.addImage("r11",a2I);
  a6.addImage("r32",no9)
  a2.visible=false;
  a4.addImage("r21",number15img)
  a8.addImage("r42",no51)
  a9.addImage("r52",no27)
  d2 = createSprite(186,43,10,91)
  d2.shapeColor = "red"
  w7 = createSprite(280,210,10,500)
  w8 = createSprite(350,455,130,10)
  w9 = createSprite(420,294,10,330)
 // w10 = createSprite(470,130,90,10)
  w11 = createSprite(510,355,10,520)
  d3 = createSprite(279,528,10,130)
  d3.shapeColor = "red"
  d4 = createSprite(509,52,10,90)
  d4.shapeColor = "red"
  d5 = createSprite(417,65,10,120)
  d5.shapeColor = "red"
  w12 = createSprite(610,255,10,520)
  d6 = createSprite(556,508,100,10)
  d6.shapeColor = "red"
  
  loss1=createSprite(300,300,70,70)
  loss1.addImage(loss);
  loss1.visible=false;

  a3.visible = false
    a4.visible = false

    a6.visible=false;
     a5.visible=false;

     a8.visible=false;
     a7.visible=false;

     a9.visible = false
      a10.visible = false
}

function draw() {
  background(0); 
  text(mouseX+","+mouseY,mouseX,mouseY)
  if(keyDown(UP_ARROW)){
    pc.y = pc.y-5
  }
  if(keyDown(DOWN_ARROW)){
    pc.y = pc.y+5
  }
  if(keyDown(LEFT_ARROW)){
    pc.x = pc.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    pc.x = pc.x+5
  }
  if(pc.isTouching(d1)&&gameState==="door1"){
    
      r1.addImage("riddle1",r1img)
    
   
    r1.depth = 300
    r1.visible=true;
    a1.visible=true;
    a2.visible=true;
    r1.scale = 0.5
    pc.bounce(d1)

  }
  if(mousePressedOver(a1)&&gameState==="door1"){
   //loss1.visible=true;
    a2.visible=false;
    a1.visible=false;
    r1.destroy();
    
    
    pc.x = 50
    pc.y = 50
  }
  if(mousePressedOver(a2)&&gameState==="door1"){
    d1.destroy();
    d1.visible = false;
    r1.visible = false;
    a1.destroy();
    loss1.visible = false
    a2.destroy();
gameState = "door2"
    
  }
  if(pc.isTouching(d2)&&gameState==="door2"){
    r1.depth = 300
    r1.visible = true;
    r1.scale = 2;
    a3.visible = true
    a4.visible = true
    a3.scale = 0.1
    a4.scale = 0.1
    pc.bounce(d2)
r1.changeImage("riddle2",r2img)
a3.addImage("r2",number12img)
a4.addImage("r21",number15img)
  }
  console.log(gameState)
  if(mousePressedOver(a3)&&gameState==="door2"){
    d2.destroy();
    a3.visible = false
    a4.visible = false
    r1.visible = false
    loss1.visible = false
    gameState = "door3"
  }
  if(mousePressedOver(a4)&&gameState==="door2"){
    loss1.visible=true;
     a2.visible=false;
     a1.visible=false;
     pc.x = 50
     pc.y = 50
     
  }
  if(pc.isTouching(d3)&&gameState==="door3"){
    pc.bounceOff(d3)
    r1.depth = 300
    r1.visible = true;
    r1.scale = 0.5;
r1.changeImage("riddle3",r3img)
a5.visible = true 
a6.visible = true
a5.scale = 0.05
a6.scale = 0.05
a5.addImage("r3",no1)
a6.addImage("r32",no9)
  }
  
  if(mousePressedOver(a5)&&gameState==="door3"){
    d3.destroy();
    a5.visible = false
    a6.visible = false
    r1.visible = false
    loss1.visible = false
    gameState = "door4"
  }
  if(mousePressedOver(a6)&&gameState==="door3"){
    loss1.visible=true;
     a6.visible=false;
     a5.visible=false;
     pc.x = 50
     pc.y = 50
  }
  if(pc.isTouching(d4)&&gameState==="door4"){
    r1.depth = 300
    r1.visible = true;
    pc.bounceOff(d4)
    r1.scale = 0.5;
r1.changeImage("riddle4",r4img)
a7.visible = true 
a8.visible = true
a7.scale = 1.5
a8.scale = 1.5
a7.addImage("r4",no48)
a8.addImage("r42",no51)
  
  }
  if(mousePressedOver(a7)&&gameState==="door4"){
    d4.destroy();
    a7.visible = false
    a8.visible = false
    r1.visible = false
    loss1.visible = false
    gameState = "door5"
  }
  if(mousePressedOver(a8)&&gameState==="door4"){
    loss1.visible=true;
     a8.visible=false;
     a7.visible=false;
     pc.x = 50
     pc.y = 50
  }
  
    if(pc.isTouching(d5)&&gameState==="door5"){
      r1.depth = 300
      r1.visible = true;
      pc.bounceOff(d5)
      r1.scale = 0.5;
  r1.changeImage("riddle8",r8img)
  a9.visible = true 
  a10.visible = true
  a9.scale = 0.05
  a10.scale = 0.05
  a9.addImage("r5",no18)
  a10.addImage("r52",no27)
    
    }
    if(mousePressedOver(a9)&&gameState==="door5"){
      d5.destroy();
      a9.visible = false
      a10.visible = false
      r1.visible = false
      loss1.visible = false
      gameState = "door6"
    }
    if(mousePressedOver(a10)&&gameState==="door5"){
      loss1.visible=true;
       a10.visible=false;
       a9.visible=false;
       pc.x = 50
       pc.y = 50
    
  }
  if(pc.isTouching(d6)&&gameState==="door6"){

  }
  
 
  createEdgeSprites();
  pc.bounceOff(w1);
 
  pc.bounceOff(w3)
  pc.bounceOff(w4)
  pc.bounceOff(w5)

  pc.bounceOff(w7)
  
  drawSprites();
}