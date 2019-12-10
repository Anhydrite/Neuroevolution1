let slider;
function draw() {
  background(225);
  for(let i = 0 ; i <= slider.value();i++){
  Boule.Mouvement();
  Boule.massiveThinkMoveDrawColli();
  }
    for(i=0;i<PaddleTotal;i++){
      if(PaTab[i].alive==true){
        PaTab[i].drawPaddle();
      }
    }

    Boule.Show();

    TextLast.innerHTML="Bot restant : "+PaddleRestant+ "  Highscore : "+Highscore;
    TextGen.innerHTML="Generation : "+Generation+" Best Highscore : "+TotalHighscore;
          // arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
    //  if(space == true){
    //    if(true){
    //   TextLast.innerHTML="Bot restant : "+PaddleRestant+ "  Highscore : "+Highscore;
    //   TextGen.innerHTML="Generation : "+Generation+" Best Highscore : "+TotalHighscore;
      
    //   Boule.drawBall();
    //   Boule.Mouvement();
    //   //Boule.massiveThinkMoveDrawColli(PaTab,Boule);
      
    //   //Paddle.mutate();
    //   //collisionDetection(Boule);
    //   //drawBricks();
    //    }
    //  }
    }
    
    // jean();
    
    // function jean(){
    //   draw();
    //   requestAnimationFrame(jean);
    
    // }
    
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  slider = createSlider(1,20,0);
  creation();
}