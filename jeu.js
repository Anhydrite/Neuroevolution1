var canvasHeight=720;
var canvasWidth=1280;
// var ctx = canvas.getContext("2d");
var ballRadius = 20;
var x = canvasWidth/2;
var y = canvasHeight-30;
var dx = 10;
var dy = -10;
var Pdx=10;
var paddleHeight = 30;
var paddleWidth = 75;
var paddleX = canvasWidth/2-paddleWidth/2;
var paddleY=canvasHeight-20;
var PaddleTotal = 400;
var PaddleRestant = PaddleTotal;
var Generation = 1;
var Highscore = 0;
var PaTabDead = [];
var TotalHighscore = 0;

var TextLast = document.getElementById('restant');
var TextGen = document.getElementById('gen');
var PaTab=[];

class boule{
    constructor(x,y,radius){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.dx=dx;
        this.dy=dy;
    }

    Mouvement(){
        
        if(this.x <= 0){
            this.dx = -this.dx;
        }
        if(this.y <= 0){
            this.dy = -this.dy;

        }

        if(this.x >= canvasWidth){
            this.dx = -this.dx;
        }
        if(this.y >= canvasHeight){
            // this.dy = -this.dy; 

            this.dy = 0;
            this.dx=0;
            Restart();
        }
        this.x+=this.dx;
        this.y+=this.dy;
      
    }

    Show() {
      stroke(255);
      fill(51);
      arc(this.x, this.y, this.radius, this.radius, 0, Math.PI*2);
      }

      massiveThinkMoveDrawColli(){
        
        for(i=0;i<PaddleTotal;i++){
          if(PaTab[i].alive==true){
            PaTab[i].think(Boule);
          }
        }

    
        for(var w=0;w<PaddleTotal;w++){
          if(PaTab[w].alive==true){

          if(this.x > PaTab[w].x && this.x < PaTab[w].x +PaTab[w].width && this.y>PaTab[w].y && this.y <PaTab[w].y + PaTab[w].height) {
            Highscore++;
            this.score++;
              allCheck(PaTab);
                this.dy = -this.dy;
                this.y-=10;
                
                if(this.dx < 0 ){
                    this.dx -= 0;
                }else {
                    this.dx += 0;
                }
                if(this.dy<0){
                    this.dy-=0;
                }else {
                    this.dy+=0;
                }
              }
      }}
  }
}

var Boule = new boule(x,y,ballRadius);

function creation(){

  for(i=0;i<PaddleTotal;i++){
    PaTab[i]=0;
    PaTab[i]=new paddle();
  }
}

// creation();




