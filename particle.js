class Particle {
    constructor (x, y, exploded, color, power,flash){
        this.pos = createVector(x,y);
        this.exploded = exploded;
        this.flash = 0;
        this.power = power;
        this.burnTime = 50 + random(2,this.power);
        if (color == 10){
            this.color = int(random(1,4));
        }else{
            this.color = color;
        }
        this.weight = int(random(1,4));

        if (flash == true){
            this.flash = int(random(250,253))
        } else if (random(0,100) > 95){
            this.flash = int(random(240,255));
        }
       

        if (this.exploded){
            this.vel = p5.Vector.random2D();
            if (this.power > 120 && this.color !=4){
                this.vel.mult(random(0,20)); 
            }else if (this.color == 5){
                this.vel.mult(3);
            }else{
                this.vel.mult(random(0,10));
            }
        }else{
            this.vel = createVector(random(-3,3),random(-14,-10));
            
        }
        this.acc = createVector(0,0);
        this.prevPos = createVector(x,y);
    }

    setPrevPos(){
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    update(){
        this.setPrevPos();
        if (this.exploded){
            this.vel.mult(0.95+(random()/20));
            this.burnTime -= 2;
            let r =int(random(0,500));
            if (r < reburnRate.getValue()){
                this.burnTime = int(random(20,150+r*5));
            }
        }
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
        
        
    }

    applyForce(force){
        this.acc.add(force);
    }

    show(exploded){
        if(exploded){
            if(255 > this.flash && this.flash > 0){
                this.flash += 1;

                stroke(250,250,255);
                //point(this.prevPos.x, this.prevPos.y);
            }

            if (this.flash == 255 ){
                stroke(250,250,255,255);
                strokeWeight(this.weight);
                point(this.pos.x, this.pos.y);
                //this.flash = 254;
                this.flash = int(random(240,253));
             }   

            const alpha = map(this.burnTime,10,100,20,255);
            //const alpa = 255;

            switch (this.color){
                case 0:
                    stroke(255,255,200,alpha);
                    break;
                case 1:
                    stroke(255,100,100,alpha);
                    break;
                case 2:
                    stroke(100,255,100,alpha);
                    break;
                case 3:
                    stroke(100,100,255,alpha);
                    break;
                case 4:
                    stroke(75,30,0,alpha);
                break;

                default:
                    stroke(200,200,50,alpha);


            }
         

        }else{
            stroke(255,255,240,rocketTransparancy.getValue());
        }
        
        strokeWeight(this.weight);
        line(this.pos.x, this.pos.y, this.prevPos.x,this.prevPos.y);

        
    }
}