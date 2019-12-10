
class paddle{
    constructor(brain){
        this.x=paddleX;
        this.y = paddleY;
        this.height=paddleHeight;
        this.width=paddleWidth;
        this.Pdx=Pdx;
        this.alive=true;
        this.score=0;
        if (brain) {
            this.brain = brain.copy();
          } else {
            this.brain = new NeuralNetwork(8, 32, 3);
          }
    }
    
    drawPaddle() {
      fill(color(0.05,126,126,126));
      rect(this.x, this.y, this.width, this.height);
      }

      
      
      checkPosition(){
          if(Boule.x > this.x && Boule.x < this.x +this.width && Boule.y>this.y && Boule.y <this.y + this.height){
            this.score++;
          }else{
            if(this.alive==true){
            this.alive="false";
            PaddleRestant-=1;
            }
          }
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

  dispose() {
    this.brain.dispose();
  }

  mutate() {
    this.brain.mutate(0.1);
  }

  think(balle) {
    let inputs = [];
    inputs[0] = this.x;
    inputs[1] = balle.x;
    inputs[2] = balle.y;
    inputs[3] = balle.dx;
    inputs[4] = balle.dy;
    inputs[6] = this.Pdx; //Paddle X
    inputs[5] = 0;
    inputs[7]=this.width;
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
