objects = [];
status = "";

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
 function draw(){
     image(video,0,0,380,380);
     if(status != "")
     {
        objectDetector.detect(video,gotResult);
        for(i = 0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML= "status: Detected " ;
            fill("blue")
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x,object[i].y)
            noFill();
            stroke("orange")
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
     
     }
 }
 function gotResult (error,results){
     if(error){
         console.log(error);
     }
     else{
         console.log(results);
         objects = results;
     }
 }
 function start(){
     objectDetector = ml5.objectDetector('cocossd',modelLoaded);
     document.getElementById("status").innerHTML= "status: Detecting objects " ;
     object = document.getElementById("object").value
 }
 function modelLoaded(){
     console.log("modelLoaded");
     status = true;
 }
