class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.Simage=loadImage("sprites/smoke.png");
    this.pilote=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var pos=[this.body.position.x,this.body.position.y]
    this.pilote.push(pos)

    }
    
   
      for(var i=0;i<this.pilote.length;i++){
        image(this.Simage,this.pilote[i][0],this.pilote[i][1])
        
      }
    
  }
}
