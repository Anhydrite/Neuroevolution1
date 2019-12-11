
class paddle{
    constructor(brain){
        this.x=paddleX;
        this.y = paddleY;
        this.height=paddleHeight;
        this.width=paddleWidth;
        this.Pdx=Pdx;
        this.alive=true;
        this.score=0;
        this.scoreFit=0;
        this.fitness=0;
        if (brain) {
            this.brain = brain.copy();
          } else {
            this.brain = new NeuralNetwork(7,30,3);
          }
    }
    
    drawPaddle() {
      fill(color(0.05,126,126,126));
      rect(this.x, this.y, this.width, this.height);
      }

      
      
      
      
      botMove(choix){
        if(choix=="droite"){
            if(this.x<canvas.width-this.width){
              this.x+=this.Pdx;
            }else{
                this.x=canvas.width-this.width;
            }
      }
         if(choix=="gauche"){
          if(this.x>0){
              this.x-=this.Pdx;
            }else{
                this.x=0;
            }
      }
      }



  mutate() {
    this.brain.mutate(0.1);
  }

  think(balle) {
    let inputs = [];
    inputs[0] = this.x; //100 : 3
    inputs[1] = balle.x; // 100 : 2
    inputs[2] = balle.y; // 100 : 2
    inputs[3] = balle.dx; // 100 : 2
    inputs[4] = balle.dy; // 100 : 3 tot
    inputs[5] = this.Pdx; //Paddle X 100 : 3 200 : inf
    // inputs[6] = this.y; // 100 : 4 224 : inf
    inputs[6]=this.width; //100:4 1000 : 6
    let output = this.brain.predict(inputs);
    //if (output[0] > output[1] && this.velocity >= 0) {
    if (output[0] > 0.5) {
      this.botMove("droite");
      //console.log("droite");
    }else if(output[1]>0.5){
        this.botMove("gauche");
        //console.log("gauche");
    }else{
      
    }
  }
}

function creationPaddle() {

  for (i = 0; i < PaddleTotal; i++) {
    PaTab[i] = 0;
    PaTab[i] = new paddle();
  }
}
