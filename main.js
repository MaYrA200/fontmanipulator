difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
     video = createCapture(VIDEO);
     video.size(550 , 500);

     canvas = createCanvas(550 , 550);
     canvas.position(560 , 150);

     poseNet = ml5.poseNet(video , modelLoaded);
     poseNet.on('pose' , gotPoses);
}

function gotPoses(results)
{
   if(results.length > 0)
   {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    righttWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - righttWristX);
    console.log("left wrist x = " + leftWristX + " righttWristX = " + righttWristX + " difference = " + difference);

   }
}

function modelLoaded()
{
    console.log('PoseNet is initilaized');
}

function draw()
{
    background('#6C91C2');
    document.getElementById("font_size").innerHTML = "font size of the text will be = " + difference + "px";
    textSize (difference);
    fill('#FFE787');
    text('Mayra' , 50 , 400);
}