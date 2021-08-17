class Box
  {
  constructor(x,y,h,w){
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50 ;
  }

  show(){
    rect(this.x, this.y , this.w, this.h);
  }

  set_speed(v){
    this.x = this.x+v;
  }
  }
  
