filtrox=0;
filtroy=0;
function preload()
{
m=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setUp()
{
canvas=createCanvas(400, 400),
 canvas.center();
 video=createCapture(VIDEO);
 video.size(400,400);
 video.hide();
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose' , gotPoses);
}
function modelLoaded()
{
  console.log('poseNet esta inicializado');
}
function gotPoses(results)
{
    if(results.lenght > 0)
    {
        filtrox = results[0].pose.filtro.x-40;
        filtroy = results[0].pose.filtro.y;
        
    } 
}
function draw()
{
 image(video,0,0,400,400);
 image(m,filtrox,filtroy,80,35);
}
function savei()
{
    savei('myFilterImage.png');
}