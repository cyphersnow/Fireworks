class Firework{
    constructor(particleMin, particleMax){
        this.exploded = false;
        this.flash = false;
        this.particleCount = int(random(particleMin.getValue(),particleMax.getValue()));
        this.color = fireWorkActiveColors[int(random(0,fireWorkActiveColors.length))];
            if (this.color == 4){
                this.particleCount=1000;
                this.flash = true;
            }
        //this.power = map(this.particleCount,50,1000,10,blastPower);
        this.power = random(5,blastPower.getValue());
        this.particles =[];
        this.particles.push(new Particle(random(width),height,this.exploded, this.flash));
        
    }

    add(){
        this.particles.push(new Particle);
    }

    update(){
        for (let i= this.particles.length-1; i>= 0; i--){
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if(this.particles[i].vel.y >=0 && this.exploded == false){
                this.exploded = true;
                this.explode(this.particles[i].pos.x, this.particles[i].pos.y);
                this.particles.splice(i,1);
            }
            if (this.particles[i].pos.y > height | this.particles[i].burnTime <= 0){
                
                this.particles.splice(i,1);
                
            }
        }
    }
    explode(x,y){
        for(let i=0; i<this.particleCount;i++){
            
            this.particles.push(new Particle(x, y, this.exploded, this.color, this.power, this.flash));
        }
    }
    show(){
        for (let particle of this.particles){
            particle.show(this.exploded);
        }
    }
}