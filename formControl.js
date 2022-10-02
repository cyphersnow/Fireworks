class FormControl{
    constructor(name,type,resetOnChange,val,min,max,step){
        this.title = name;
        this.type = type;
        this.resetOnChange = resetOnChange;
        this.label;
        this.slider;
        this.select;
        this.value = val;
        this.checkbox = [];
        this.checkboxValues =[];
        this.parent = "formControls";
        this.class = "formLabel";
        this.classHeader = "formLabelHeader";
        this.sliderSize = 200;
    
        if (this.type == "slider"){
            this.createLabel(name);
            this.createSlider(name,val,min,max,step);
        }
        if (this.type =="checkbox"){
            this.createLabel(name);
        }
        if (this.type == "select"){
            this.createLabel(name);
            this.createSelect(name);
        }
    }

    createLabel(name){
        this.label = createDiv(name);
        this.label.parent(this.parent);
        this.label.class(this.classHeader);
    }

    createSlider(name,val,min,max,step){
        this.slider = createSlider(min,max,val,step)
        this.slider.parent(this.parent);
        this.slider.size(this.sliderSize);
        this.slider.mouseMoved(showSliderValues);
        if (this.resetOnChange){
            this.slider.mouseReleased(resetFireworks);
        }
    }

    createSelect(name){
        this.select = createSelect();
        this.select.parent(this.parent);
        this.select.class(this.class);
        this.select.option('Test');
        
    }

    createCheckbox(name, val, checked){
        let box = createCheckbox(name,checked);
        box.parent(this.parent);
        box.class(this.class);
        box.changed(changeCheckboxes);

        this.checkbox.push(box);
        this.checkboxValues.push(val);
    }

    addSelect(name,val,initial){
        this.select.option(name, val);
        if (initial){
            this.select.selected(val);
        }

    }
    getValue(){
        let val;
        if (this.type == "slider"){
            val = this.slider.value();
            this.value = val;
        }
        if (this.type == "select"){
            val = this.select.value();
        }
        return val;
    }
}