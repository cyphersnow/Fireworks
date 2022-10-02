function addFireForm(){
    
    lblCount = createDiv('Fireworks : 5');
    lblCount.parent("myform"); 
    lblCount.class("formLabelHeader");

    sliderCount = createSlider(1,100,5,1);
    sliderCount.parent("myform");
    sliderCount.size(200); 
    sliderCount.mouseMoved(showFireWorksCount);
    sliderCount.mouseReleased(changeFireWorksCount);

    lblGravity = createDiv('<br>Gravity : 1');
    lblGravity.parent("myform"); 
    lblGravity.class("formLabelHeader");
    
    sliderGravity = createSlider(1,50,10,1);
    sliderGravity.parent("myform");
    sliderGravity.size(200);
    sliderGravity.mouseMoved(showGravity);
    sliderGravity.mouseReleased(changeGravity);
    
    lblColors = createDiv("<br>Colors used : ");
    lblColors.parent("myform");
    lblColors.class("formLabelHeader");
    chbWhite = createCheckbox("White",1);
    chbWhite.parent("myform");
    chbWhite.class("formLabel");
    chbWhite.changed(changeColors);
    chbRed = createCheckbox("Red",1);
    chbRed.parent("myform");
    chbRed.class("formLabel");
    chbRed.changed(changeColors);
    chbGreen = createCheckbox("Green",1);
    chbGreen.parent("myform");
    chbGreen.class("formLabel");
    chbGreen.changed(changeColors);
    chbBlue = createCheckbox("Blue",1);
    chbBlue.parent("myform");
    chbBlue.class("formLabel");
    chbBlue.changed(changeColors);
    chbMultiColor = createCheckbox("MultiColor",1);
    chbMultiColor.parent("myform");
    chbMultiColor.class("formLabel");
    chbSparkle = createCheckbox("Sparkle",1);
    chbSparkle.parent("myform");
    chbSparkle.class("formLabel");
    chbSparkle.changed(changeColors);

    lblParticleMin = createDiv("<br>Min particles : 50");
    lblParticleMin.parent("myform");
    lblParticleMin.class("formLabelHeader"); 
    
    sliderParticleMin = createSlider(10,2000,50,10);
    sliderParticleMin.parent("myform");
    sliderParticleMin.size(200);
    sliderParticleMin.mouseMoved(showParticle);
    sliderParticleMin.mouseReleased(changeParticle);

    lblParticleMax = createDiv("<br>Max particles : 1000");
    lblParticleMax.parent("myform");
    lblParticleMax.class("formLabelHeader"); 

    sliderParticleMax = createSlider(10,2000,1000,10);
    sliderParticleMax.parent("myform");
    sliderParticleMax.size(200);
    sliderParticleMax.mouseMoved(showParticle);
    sliderParticleMax.mouseReleased(changeParticle);

    lblTrail = createDiv("<br>Trail size : 65");
    lblTrail.parent("myform");
    lblTrail.class("formLabelHeader");

    sliderTrail = createSlider(0,255,65,1);
    sliderTrail.parent("myform");
    sliderTrail.size(200);
    sliderTrail.mouseMoved(showTrail);
    sliderTrail.mouseReleased(changeTrail);    

    lblPower = createDiv("<br>Max blast power : 50");
    lblPower.parent("myform");
    lblPower.class("formLabelHeader");

    sliderPower = createSlider(5,155,50,1);
    sliderPower.parent("myform");
    sliderPower.size(200);
    sliderPower.mouseMoved(showPower);
    sliderPower.mouseReleased(changePower);

    lblRocket = createDiv("<br>Rocket visibility : 255");
    lblRocket.parent("myform");
    lblRocket.class("formLabelHeader");

    sliderRocket = createSlider(0,255,125,1);
    sliderRocket.parent("myform");
    sliderRocket.size(200);
    sliderRocket.mouseMoved(showRocket);
    sliderRocket.mouseReleased(changeRocket);

}



function showFireWorksCount(){
    lblCount.html("Fireworks : "+sliderCount.value());
}
function changeFireWorksCount(){
    showFireWorksCount();
    fireworks =[];
    for (let i=0; i< sliderCount.value();i++){
        fireworks.push(new Firework(particleMin, particleMax));
      
      }
}

function showGravity(){
    lblGravity.html("<br>Gravity : "+sliderGravity.value()/10);
}
function changeGravity(){
    showGravity();
    gravity = createVector(0,sliderGravity.value()/100);
}

function showParticle(){
    lblParticleMin.html("<br>Min particles : " + sliderParticleMin.value());
    lblParticleMax.html("<br>Max particles : " + sliderParticleMax.value());
}

function changeParticle(){
    showParticle();
    if (sliderParticleMax.value() > sliderParticleMin.value()){
        particleMin = sliderParticleMin.value();
        particleMax = sliderParticleMax.value();
    }
    
}
function showTrail(){
    lblTrail.html("<br>Trail size : "+ sliderTrail.value());
}

function changeTrail(){
    showTrail();
    trailSize = sliderTrail.value();
}

function showPower(){
    lblPower.html("<br>Max blast power : "+ sliderPower.value());
}

function changePower(){
    showPower();
    blastPower = sliderPower.value();
}

function showRocket(){
    lblRocket.html("<br>Rocket visibility : "+sliderRocket.value());
}

function changeRocket(){
    showRocket();
    rocketTransparancy = sliderRocket.value();
}
function changeColors(){
    fireWorkColors =[];
    if (chbWhite.checked()){
        fireWorkColors.push(0);
    }
    if (chbRed.checked()){
        fireWorkColors.push(1);
    }
    if (chbGreen.checked()){
        fireWorkColors.push(2);
    }
    if (chbBlue.checked()){
        fireWorkColors.push(3);
    }
    if (chbSparkle.checked()){
        fireWorkColors.push(4);
    }
    if (chbMultiColor.checked()){
        fireWorkColors.push(10);
    }

}