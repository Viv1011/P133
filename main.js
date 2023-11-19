status= "";

function preload() {
    img = loadImage('pic1.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}