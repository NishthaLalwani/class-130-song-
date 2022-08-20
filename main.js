peter_pan_song = "";
harry_potter_theme_song = "";

 function preload(){
peter_pan_song = loadSound("music.mp3");
harry_potter_theme_song= loadSound("music2.mp3");
}

rightWristX =0;
rightWristY =0;

leftwristX=0;
leftwristY=0;

scoreleftWrist = 0;
scorerighttWrist = 0;
songright = "";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.posenet(video,modelloaded);
    posenet.on('pose',gotPoses);
}

function modelloaded(){
    console.log("posenet is intialized" );
}

function draw(){
    image(video,0,0,600,500);

    Fill("#FF0000");
    stroke("#FF0000");

    peter_pan_song = peter_pan_song .isPlaying();
    console.log("Peter Pan Song=" + peter_pan_song);

    harry_potter_theme_song = harry_potter_theme_song .isPlaying();
    console.log("Harry Potter Theme Song =" + harry_potter_theme_song);
    
    if(scoreleftWrist > 0.2)
    { 
    circle(leftwristY, leftwristX, 20);
    harry_potter_theme_song.stop();
    if(peter_pan_song == false){
        peter_pan_song.play();
    }
    else{
     document.getElementById("song_id").innerHTML = "Song name: Peter Pan Song";
    }
     }
 }

 if(scoreleftWrist > 0.2)
    { 
    circle(leftwristY, leftwristX, 20);
    peter_pan_song.stop();
    if(harry_potter_theme_song == false){
        harry_potter_theme_song.play();
    } }


    
    

function gotPoses(results){
    if (results.length > 0)
    {
    console.log(results);

    scoreleftWrist = result[0].pose.keypoints[9].score;
    console.log(scoreleftWrist);

    scoreleftWrist = result[0].pose.keypoints[10].score;
    console.log(scoreleftWrist);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;

    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;
}
    



   
}
