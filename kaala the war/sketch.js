var king,kingimg,king2,king3,king4,king5
var dragon
var s1,s2,s3,s4,s5,s6
var s1img, s2img,s3img, s4img, s5img,s6img
var bg;
var invsground
var w1,w1img,w2,w2img
var PLAY = 1
var END = 0
var FINISH = 2
var gameState = PLAY
var life=15
var bar=5
var bar2=12
var bar3=24
var bar4=45
var w3,w3img,w32
var level=1
var level2=1
var level3=1
var w4,w4img
var wd,wdimg
var edge1,edge2
var w111,w112img,w112
var w113img,w113,w114img,w114
var wdr,wdrimg
var diamondimg,diamond
var princess,princessimg


function preload(){
  kingimg = loadImage("g.png")
  king3 = loadImage("v.png")
  king4 = loadImage("u.png")
  king5 = loadImage("u1.png")
  resetimg = loadImage("reset.png")
  dragonimg=loadImage("r.png")
  king2=loadImage("f.png")
  s1img = loadImage("a.png")
  s2img = loadImage("e.png")
  s3img = loadImage("d.png")
  bg = loadImage("bg.png")
  princessimg = loadImage("o.png")
  diamondimg = loadImage("diamon.png")
  wdrimg = loadAnimation("n/a.png","n/b.png","n/c.png","n/d.png","n/e.png","n/f.png","n/g.png","n/h.png","n/i.png","n/j.png","n/k.png","n/l.png","n/m.png")
  w114img = loadAnimation("wk2/wk21.png")
  w113img = loadAnimation("wk/w12.png")
  w112img = loadAnimation("w1/wea3/h1.png","w1/wea3/h2.png","w1/wea3/h3.png","w1/wea3/h4.png")
  w111 = loadAnimation("w1/w2/b.png","w1/w2/b2.png","w1/w2/b3.png","w1/w2/b4.png","w1/w2/b5.png","w1/w2/b6.png","w1/w2/b7.png","w1/w2/b8.png","w1/w2/b9.png","w1/w2/b10.png")
  w2img = loadImage("w1.png")
  w3img = loadImage("w1.png")
  w4img = loadAnimation("w4/a1.png","w4/a2.png","w4/a3.png","w4/a5.png","w4/a6.png","w4/a7.png")
  
  wdimg = loadAnimation("wd/wd6.png")
  
}

function setup(){
  createCanvas(1200,500);
  
  princess = createSprite(1400,310)
  princess.addImage(princessimg)
  princess.velocityX=0
 // princess.debug = true
  princess.setCollider("rectangle",-50,0,700,200)

  diamond = createSprite(1600,250)
  diamond.addImage(diamondimg)
 // diamond.debug=true
  
  diamond.scale = 0.1
  
  king = createSprite(150,380)
  king.addImage(kingimg)
  king.scale = 1
  king.setCollider("rectangle",0,0,80,110)
  invsground = createSprite(600,380,1200,10)
  //king.debug=true

  s1 = createSprite(1400,310)
  s1.addImage(s1img)
  s1.velocityX=-4
  //s1.debug=true
  s1.setCollider("rectangle",0,0,170,170)

  edge1 = createSprite(40,250,10,500)
  edge1.visible = false
  edge2 = createSprite(1160,250,10,500)
  edge2.visible = false

  w4 = createSprite(1080,340)
  w4.addAnimation("axe",w4img)
  w4.velocityX=0
  w4.scale=0.17
  w4.visible =false


  w1 = createSprite(200,310)
  w1.addAnimation("weapon",w111)
  w1.scale = 0.4
  w1.velocityX = 0
  w1.visible=false
 // w1.debug=true
  w1.setCollider("rectangle",0,0,400,80)

  w112 = createSprite(200,310)
  w112.addAnimation("weapon",w112img)
  w112.scale = 0.4
  w112.velocityX = 0
  w112.visible=false
 // w1.debug=true
  w112.setCollider("rectangle",0,0,400,80)

  w113 = createSprite(200,380)
  w113.addAnimation("weapon",w113img)
  w113.scale = 0.4
  w113.velocityX = 0
  w113.visible=false
 // w1.debug=true
  w113.setCollider("rectangle",0,0,400,80)

  w114 = createSprite(200,310)
  w114.addAnimation("weapon",w114img)
  w114.scale = 0.3
  w114.velocityX = 0
  w114.visible=false
 // w1.debug=true
  w114.setCollider("rectangle",0,0,400,80)

  w2 = createSprite(1080,340)
  w2.addImage(w2img)
  w2.scale = 0.4
  w2.velocityX = 0
  w2.visible=false

  w3 = createSprite(1080,340)
  w3.addImage(w3img)
  w3.scale = 0.4
  w3.velocityX = 0
  w3.visible=false

  wd = createSprite(1080,340)
  wd.addAnimation("spear",wdimg)
  wd.velocityX =0
  wd.scale = 0.4
  wd.visible = false

  wdr = createSprite(1000,200)
  wdr.addAnimation("spear",wdrimg)
  wdr.velocityX =0
  wdr.scale = 0.5
  wdr.visible = false
 
 
  s2 = createSprite(1400,310)
  s2.velocityX = 0
  s2.addImage(s2img)
  //s2.debug = true
  s2.setCollider("rectangle",0,0,170,170)

  s3 = createSprite(1400,310)
  s3.velocityX = 0
  s3.addImage(s3img)
  //s3.debug = true
  s3.setCollider("rectangle",0,0,170,170)

  dragon = createSprite(1400,300)
  dragon.velocityX = 0
  dragon.scale=0.8
  dragon.addImage(dragonimg)
  //dragon.debug=true
  dragon.setCollider("rectangle",0,0,240,400)

 
}

function draw(){
  background(bg);
 

  fill("black")
  textFont("public secret demo")
  textSize(20)
  text("YOUR LIFE: " , 220,30)

  textFont("caramel sweets")
  text( life +"💖",315,30)
 
 if(gameState === PLAY){
  
  fill("black");
  textFont("CARAMEL SWEETS");
  textSize(20);
  text(" S - TO SHOOT",10,30);
  
 /* fill("black")
  textFont("arial")
  textSize(10)
  text("(after shooting it takes some time to reload)",110,25)*/

  fill("black")
  textFont("caramel sweets")
  textSize(20)
  text("(also use arrows to move, jump)",400,30)

  /*fill("black");
  textFont("CARAMEL SWEETS");
  textSize(15);
  text(" SPACE - TO JUMP",10,50);*/

  /*fill("black");
  textFont("CARAMEL SWEETS");
  textSize(20);
  text("| KILL THE ENEMY TO GET A NEW WEAPON 🏹 and to upgrade your self",420,80);*/

  /*fill("black")
  textFont("arial")
  textSize(10)
  text("(jump to escape from enemies)",130,50)*/

 /* fill("red")
  textFont("impact")
  textSize(23)
  text("Weapon Status: ",500,30)*/

  fill("red")
  textFont("public secret demo")
  textSize(23)
  text("WARNING: ",810,30)

  fill("black")
  textFont("public secret demo")
  textSize(18)
  text("do not go near to the enemies, they may kill you!!!",910,10,290,70)
 
  king.collide(invsground)
  invsground.visible = false
  king.collide(edge1)
  //king.debug = true

  if((keyDown("space") || keyDown("up") ) && king.y >= 300){
    king.velocityY = -15
   
  }
  if ((keyDown("right"))){
    king.x=king.x+10
    
  }
  if ((keyDown("left"))){
    king.x=king.x-10
  
  }

  if(keyDown("s")){
    w1.visible=true
    w1.velocityX=11
  }

  king.velocityY = king.velocityY + 0.8

  

  if(w2.x <= -300){
    w2.x = 1080
  }

  if(w3.x<=-400){
    w3.x = 1080
  }
 

  if(w1.x> 1400){
    w1.velocityX=0
    w1.velocityY=0
    w1.x = 200
    w1.y=310
    w1.visible=false
    
  }
  if(s1.x===1100){
    s1.velocityX = 0
    w2.velocityX = -12
    w2.visible = true
  }
  if (bar!=0){
  fill("black")
    textFont("caramel sweets")
    textSize(22)
    text(bar+"💖",s1.x,s1.y-150)
  }
  if(life === 0||life===-1){
    gameState = END
    life=0
  }
  if(life === -1){
    life = 0
  }

  if(w1.isTouching(s1)&&w1.y>300){
    bar = bar-1
    w1.x=1300
    w1.y=310
  }
  if(bar === 0){
    
    s1.destroy()
    w1.destroy()
    w2.destroy()
    w3.destroy() 
    firstlord()
  }

  
  if( bar<=3 && s1.x===1100){
    w3.velocityX = -12
    w3.visible = true
  }
  
 }
 //////////////////////////////////////////////////////////////////////
 if(king.isTouching(w2)&&w2.x<king.x-10){
   life=life-1
   w2.x = 1080
   
 }

 if((king.isTouching(w3)||king.isTouching(s1)||king.isTouching(s2))&& w3.x<king.x-10){
   life=life-1
   w3.x = 1080
 }

 if((king.isTouching(wd)||king.isTouching(s3))){
  life=life-3
  wd.x = 1080
 }

 if((king.isTouching(wdr)||king.isTouching(dragon))){
  life=life-3
  wdr.x = 1050
  wdr.y = 200
 }
 
 if(gameState === END){
   king.visible=false
   w1.visible=false
   w2.visible=false
   w3.visible=false
   s2.visible=false
   w4.visible=false
   s1.visible=false
   s3.visible=false
   wd.visible=false
   wdr.visible = false
   dragon.visible = false
   
   life=0
   background("rgba(0,0,0,0.7)")
   fill("red")
   textSize(50)
   textFont("caramel sweets")
   stroke("black")
   strokeWeight("06")
   text("  GAME OVER  ",400,230)

   fill("gold")
   textSize(30)
   textFont("caramel sweets")
   stroke("black")
   strokeWeight("06")
   text("Reload the page to get Another Chance",300,270)
 


   
 }
 
  ////////////////////////////////////////////////////////////////////////////  

  if(gameState===FINISH){
    background(bg)
    king.x=530
    king.y=250
    king.scale=0.9
    princess.destroy()

    diamond.scale=0.5
    diamond.x= 700

    fill("orange")
   textSize(40)
   textFont("caramel sweets")
   stroke("black")
   strokeWeight("04")
   text("IDLE OF FIRE 🔥🔥🔥",400,480)

   fill("red")
   textSize(30)
   textFont("Comic Sans MS")
   stroke("black")
   strokeWeight("03")
   text("A small Game by VIJAY.G.V",850,200,200,200)

   fill("orange")
   textSize(20)
   textFont("Comic Sans MS")
   stroke("black")
   strokeWeight("4")
   text("The king again turned into the IDLE OF FIRE after getting back his fire crystal",70,70,200,200)

   fill("yellow")
   textSize(30)
   textFont("Comic Sans MS")
   stroke("black")
   strokeWeight("3")
   text("To play my game again, reload your page",70,300,200,200)
  
   fill("gold")
   textSize(60)
   textFont("Impact")
   stroke("black")
   strokeWeight("06")
   text("V     I     C     T     O     R     Y",320,70)
   
  }
  
  drawSprites()

}

function firstlord(){
level = level+1
console.log(w2img)

king.setCollider("rectangle",0,0,40,150)
  king.addImage(king3)
  
 //king.debug=true

if(keyDown("s")){
  w112.visible=true
    w112 .velocityX=10
}

s2.velocityX=-4

if(s2.x===1100){
  w4.velocityX=-12
  w4.visible=true
  s2.velocityX=0

}

if (level===2){
  life=life+3
}

if(w4.x<=-300){
  w4.x=1080
}

if(king.isTouching(w4)){
  life=life-2
  w4.x=1080
}

if (bar2!=0){
  fill("black")
    textFont("caramel sweets")
    textSize(22)
    text(bar2+"💖",s2.x,s2.y-150)

}

if(w112.isTouching(s2)&&w112.y>300){
  bar2 = bar2-2
  w112.x=200
  w112.velocityX=0
  w112.visible=false
}





if(bar2 === 0){
  s2.destroy()
  w2.destroy()
  w3.destroy() 
  w4.destroy()
  secondlord()
  w112.destroy()
  
}
}
 
function secondlord(){
  level2=level2+1
  
  king.setCollider("rectangle",0,0,100,300)
  king.addImage(king2)
  king.scale=0.5

  if((keyDown("space") || keyDown("up") ) && king.y >= 270){
    king.velocityY = -15
   
  }

  s3.velocityX = -4

  if(keyDown("s")){
    w113.visible=true
    w113 .velocityX=10
  }

  if (level2===2){
    life=life+5
  }

  if(bar3!=0){
    fill("black")
    textFont("caramel sweets")
    textSize(22)
    text(bar3+"💖",s3.x,s3.y-150) 
  }

  if(wd.x<=-300){
    wd.x = 1080
  }
  
  //wd.debug = true
  wd.setCollider("rectangle",-100,0,460,50)

  if(s3.x===1100){
   wd.velocityX = -13
   wd.visible = true
   s3.velocityX = 0
   
  }
  if(w113.isTouching(s3)&&w113.y>300){
    bar3 = bar3-3
    w113.x=200
    w113.velocityX=0
    w113.visible=false
  }
  

  if(bar3 === 0){
    s3.destroy()
    wd.destroy()
    w113.destroy()
    giantlord()
  }


}

function giantlord(){
  level3=level3+1
  wdr.setCollider("rectangle",0,0,110,110)
  //wdr.debug=true

  king.setCollider("rectangle",0,0,70,350)
  king.addImage(king4)

  if((keyDown("space") || keyDown("up") ) && king.y >= 270){
    king.velocityY = -15
   
  }

  dragon.velocityX = -4

  if(keyDown("s")){
    w114.visible=true
    w114 .velocityX=10
  }

  if (level3===2){
    life=life+7
  }

  if(bar4!=0){
    fill("black")
    textFont("caramel sweets")
    textSize(22)
    text(bar4+"💖",dragon.x,dragon.y-200) 
  }

  if(wdr.x<=-300){
    wdr.x = 1050
    wdr.y = 200
  }
  
  //wd.debug = true
  //wdr.setCollider("rectangle",-100,0,460,50)

  if(dragon.x===1040){
   wdr.velocityX = -13
   wdr.velocityY = 2
   wdr.visible = true
   dragon.velocityX = 0
   
  }
  if(w114.isTouching(dragon)&&w114.y>300){
    bar4 = bar4-5
    w114.x=200
    w114.velocityX=0
    w114.visible=false
  }
  

  if(bar4 === 0){
    dragon.destroy()
    wdr.destroy()
    w114.destroy()
    firecrystal()
  }

}

function firecrystal(){
king.addImage(king5)
king.scale=0.6
princess.velocityX=-4
princess.scale=0.6
princess.y=280

//king.debug=true

if(keyDown("up")){
  king.velocityY = 500

}

if(keyDown("space")){
  king.velocityY = 500

}

if(king.isTouching(princess)){
 king.x=530
 diamond.x = king.x
 if(keyDown("f")){
  gameState = FINISH
}
 fill("black")
   textSize(30)
   textFont("impact")
  
   text("Press F",500,110)

 if(keyDown("left")||keyDown("right")){
   king.x=530
   
 }

}

fill("red")
   textSize(30)
   textFont("impact")
  
   text("Go and Get your Fire crystal",380,80)

diamond.x=princess.x-65
diamond.y=princess.y-70

if(princess.x===700){
princess.velocityX=0
}



}




































































