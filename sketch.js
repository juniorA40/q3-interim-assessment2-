var x = 350;
var y = 200;
var sizes = [160, 130, 100, 70, 40];

function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    daSquares();
    daCircles();
    
    fill(255,0 ,0);
    if(mouseIsPressed){
    ellipse(mouseX, mouseY, 100,100);
    }
    fill(0,255,0);
    x = 200;
    y+=3;
    rect(x, y, 100, height);
    
    var i = 0;
    var yline = 50;
    while(i<10){
    stroke(255);
    line(100, yline, 500, yline);
    i++;
    yline += 30;
    }
    
}

function color(x, y){
    noStroke();
    fill(255, 0, 0);
    ellipse(x, y, 100, 100);
}

function daSquares(){
    for(var xRect = 40; xRect < 250; xRect+=50){
        //rect(50,50);
        fill(0,255,0);
        rect(xRect, 300, 50, 50);
    }
}

function daCircles(){
    for(var i = 0; i < 5; i++){
        fill(0, 0, 255);
         ellipse((i+1)*100,200,sizes[i], sizes[i]);
    }
}

    if(y > height){
        y = 0 - height;
}

