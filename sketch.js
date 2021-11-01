var bg;

var cat,cata,catb;

var rat,ratn,ratp;

function preload() {
    //carregue as imagens aqui

    bg = loadImage("images/garden.png")

    ratn = loadAnimation("images/mouse1.png","images/mouse2.png")

    ratp = loadAnimation("images/mouse3.png","images/mouse4.png")

    cata = loadAnimation("images/cat1.png","images/cat2.png")

    catb = loadAnimation("images/cat3.png","images/cat4.png")

}

function setup(){
    createCanvas(1000,800);
    
    BG = createSprite(200,200)
    
    BG.addImage(bg)

    cat = createSprite(350,100)
    
    cat.addAnimation(cata,"c")
    cat.addAnimation(catb,"d")



    rat = createSprite(100,350)
    
    rat.addAnimation(ratp,"a")
    rat.addAnimation(ratn,"b")

    rat.changeAnimation("a")

    //crie os sprites de gato e rato aqui
    
}

function draw() {

    background(255);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
  
  rat.changeAnimation("a")
  
  rat.frameDelay = 25;

}
