img = "";
status1 = "";

function preload(){
    img = loadImage('fan.png');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("FAN",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350); 
}