leftWristX = 0;
leftWristY= 0;
rightWristX = 0;
rightWristY= 0;

function preload(){
song=loadSound("music2.mp3");
}

 function setup(){
 canvas = createCanvas(600,500);
canvas.center();
    
video = createCapture(VIDEO);
video.hide();

}
function modelLoaded(){
    console.log('PoseNet is initialized')
}

function draw(){
image(video, 0, 0, 600, 500);
fill("#FF0000");
stroke("#FF0000");
}
 
if(results.length >0){
    
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX+" leftWristY = "+leftWristY)

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX+" rightWristY = "+rightWristY)
}
