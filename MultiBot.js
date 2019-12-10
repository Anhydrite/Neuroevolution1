function allCheck(PaTab,Boule){
    for(z=0;z<PaddleTotal;z++){
        PaTab[z].checkPosition(Boule)
    }
}

var BrainExample;
var BrainWin;
function Reorganisation(){
    for(var i = 0 ; i<PaddleTotal;i++){
        if(Highscore>=TotalHighscore && Highscore > 0 && PaTab[i].alive == true){
            if(Highscore>TotalHighscore){
            BrainWin=PaTab[i].brain.copy();
            }
        // if(PaTab[i].alive==true && PaTab[i].score==Highscore){
        //     BrainExample=PaTab[i];
        // }
    }
    }
    BrainExample=BrainWin.copy();
}

function creationAnticipe(){
        for(i=0;i<PaddleTotal;i++){
        if(BrainExample){
            if(i==0){
                PaTab[i] = new paddle(BrainWin);
            }else{
                BrainExample.mutate(0.1);
        PaTab[i] = new paddle(BrainExample);
            }
        }else{
            creation();
        }

    }
    console.log("Generation up !");
    Generation++;
}

function Restart(){
    // la copie
    Reorganisation();
    //recréation
    PaddleRestant=PaddleTotal;
    creationAnticipe();
    //creation();
    
    Boule=new boule(x,y,10);
    draw();
    if(TotalHighscore < Highscore)
    TotalHighscore=Highscore;
    Highscore=0;
}
/*
function massiveThinkMoveDrawColli(PaTab,boule){
    for(i=0;i<PaddleTotal;i++){
        PaTab[i].think(boule);
        PaTab[i].movePaddle();
        PaTab[i].drawPaddle();
    }

    for(w=0;w<PaddleTotal;w++){
        if(boule.x > PaTab[w].x && boule.x < PaTab[w].x +PaTab[w].width && boule.y>PaTab[w].y && boule.y <PaTab[w].y + PaTab[w].height) {
            allCheck(PaTab,Boule)
              boule.dy = -boule.dy;
              if(boule.dx < 0 ){
                  boule.dx -= 1;
              }else {
                  boule.dx += 1;
              }
              if(boule.dy<0){
                  boule.dy-=1;
              }else {
                  boule.dy+=1;
              }
            }
    }
}
*/