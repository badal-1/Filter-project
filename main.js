nosex=0;
nosey=0;
eye1=0;
eye2=0;
eye11=0;
eye21=0;
function preload(){
m = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
s = loadImage('https://i.postimg.cc/8zW5VGg5/eye.png');
}
function setup(){
canvas = createCanvas(300,300);
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
eye1 =results[0].pose.leftEye.x-15;
eye2 =results[0].pose.leftEye.y-15;
console.log("Lefteye x = " + eye1);
console.log("Lefteye y = " + eye2);
eye11 =results[0].pose.rightEye.x-15;
eye21 =results[0].pose.rightEye.y-15;
console.log("Lefteye x = " + eye1);
console.log("Lefteye y = " + eye2);
nosex=results[0].pose.nose.x-22;
nosey=results[0].pose.nose.y-15;
console.log("Nose x = " + nosex);
console.log("Nose y = " + nosey);
}
}
function draw(){
image(video, 0, 0, 300, 300);
image(m, nosex, nosey, 50, 50);
image(s, eye1, eye2, 30, 30);
image(s, eye11, eye21, 30, 30);
}
function take_snapshot(){
save('myFilterImage.png');
}