class Player
{
    constructor()
    {
        this.size= 100;
        this.x= this.size;
        this.y=height-0;
        this.velocityY= 0;
        this.gravity = 0.75;

    }
    
    show(){
        image(pImg, this.x,this.y, this.size, this.size);
    }
    
   
    
    jump(){
        if(this.y==height - this.size){
            this.velocityY= -15;
   
         }
        }
    move()
    {
        this.y+= this.velocityY
        this.velocityY += this.gravity;
        this.y = constrain(this.y,0, height - this.size);
}
collided(currentObs){
    let isColliding = collideRectRect(this.x,this.y, this.size, this.size,currentObs.x,currentObs.y,currentObs.size,currentObs.size);
    return isColliding
}
}