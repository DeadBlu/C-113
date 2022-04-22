function preload() {
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 230,150,220,200);
    fill("Green");
    stroke("blue");
    circle(30, 30, 50);
    circle(610, 30, 50);
    circle(30, 450, 50);
    circle(610, 450, 50);
    fill("yellow")
    stroke("blue")
    rect(50, 20, 540, 20);
    rect(50, 440, 540, 20);
    rect(20, 55, 20, 375);
    rect(600, 55, 20, 375)
}

function take_snapshot(){
    save('student_name.png')
}
