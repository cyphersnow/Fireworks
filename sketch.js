let fireWorksCount;
let fireworks = [];
let fireWorkColors;
let fireWorkActiveColors = [];
let gravity;
let gravityPower;
let particleMin;
let particleMax;
let trailSize;
let blastPower;
let rocketTransparancy;
let reburnRate;
let formControls =[];

function setup() {
  let myCanvas = createCanvas(windowWidth-350,windowHeight-100);
  myCanvas.parent("canvas");

  formControls[0] = new FormControl("Rocket visibility","slider",false,125,0,255,1);
  rocketTransparancy = formControls[0];

  formControls[1] = new FormControl("Fireworks","slider",true,5,1,255,1);
  fireWorksCount = formControls[1];
  
  formControls[2] = new FormControl("Colors","checkbox",false,true);
  fireWorksColors = formControls[2];
  fireWorksColors.createCheckbox("White", 0, true);
  fireWorksColors.createCheckbox("Red", 1, true);
  fireWorksColors.createCheckbox("Green", 2, true);
  fireWorksColors.createCheckbox("Blue", 3, true);
  fireWorksColors.createCheckbox("Multi color", 10, true);
  fireWorksColors.createCheckbox("Sparkle", 4, false);

  formControls[3] = new FormControl("Min particles","slider",false,50,1,2000,5);
  particleMin = formControls[3];

  formControls[4] = new FormControl("Max particles","slider",false,250,1,2000,5);
  particleMax = formControls[4];

  formControls[5] = new FormControl("Trail size","slider",false,65,0,255,1);
  trailSize = formControls[5];

  formControls[6] = new FormControl("Max blast power","slider",false,50,1,255,1);
  blastPower = formControls[6];

  formControls[7] = new FormControl("Gravity","slider",false,10,1,50,1);
  gravityPower = formControls[7];

  formControls[8] = new FormControl("re-burn rate","select",false,1);
  reburnRate = formControls[8];
  reburnRate.addSelect("None",0,false);
  reburnRate.addSelect("Barely",1,false);
  reburnRate.addSelect("Some",3,true);
  reburnRate.addSelect("Fair",5,false);
  reburnRate.addSelect("A lot",7,false);
  reburnRate.addSelect("Mayhem",10,false);

 changeCheckboxes();
 showSliderValues()
 resetFireworks();
}

function draw() {
  background(0,trailSize.getValue());

  for (let i = fireworks.length-1; i>=0;i--){
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].particles.length == 0){
      fireworks.splice(i,1);
      fireworks.push(new Firework(particleMin, particleMax));
    }
  }
  fill(155);
  stroke(0);
  text("© 2022 Coding by Cyphersnow. Framerate : "+int(frameRate()),8,height-8);
}

function showSliderValues(){
  for (let i=0; i<formControls.length;i++){
      let control = formControls[i];
      if (control.type == "slider"){
          control.label.html(control.title + " : " + control.getValue());
      }
  }
  gravity = createVector(0,gravityPower.getValue()/100);
  if(particleMin.getValue() > particleMax.getValue()){
    particleMin.slider.value(particleMax.getValue());
  }
}

function resetFireworks(){
  fireworks =[];
  for (let i=0; i< fireWorksCount.getValue();i++){
      fireworks.push(new Firework(particleMin, particleMax));
    
    }
}

function changeCheckboxes(){
  fireWorkActiveColors =[];
 
  for (let i=0;i<fireWorksColors.checkbox.length;i++){
    let box = fireWorksColors.checkbox[i];
    if(fireWorksColors.checkbox[i].checked()){
      fireWorkActiveColors.push(fireWorksColors.checkboxValues[i]);
    }
  }

}