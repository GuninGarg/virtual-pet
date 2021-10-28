class Food{
    constructor(){
        this.foodStock=0;
        this.image=loadImage("Milk.png");
    }
    getFoodStock (){
    return this.foodStock
    } 
    
   
    updateFoodStock(foodS){
    this.foodStock=foodS
    }

    deductFood(){
      if(this.foodStock>0){
     this.foodStock=this.foodStock-1
      
      }
    }
    display(){
      var x=80,y=100;

    imageMode (CENTER);
    this.image(this.image,720,220,70,70);

    if(this.foodStock!=0){
      for(vari=0;i<this.foodStock;i++){
       if(i%10==0){
        x=80;
        y=y+50;
       }
       image(this.image,x,t,50,50); 
       x=x+30;
      }
    }
  
  
  }
}
