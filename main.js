function preLoad() {

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 600);
}

function draw() {
    circle(300, 30, 20);
    ellipse(49, 50, 69, 69);
    //rect(100, 60, 100, 100);//
    stroke('green');
    strokeWeight(4);
    rect(100, 60, 100, 100);
    //describe('White rect at center with green outline.');//

    stroke('red');
    strokeWeight(4);
    circle(300, 30, 20);
    //describe('White circle at center with red outline.');//
}