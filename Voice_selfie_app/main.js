var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
 function start() 
 { document.getElementById("textbox").innerHTML = "";
  recognition.start();
 } 
 recognition.onresult = function(event) 
 { console.log(event); 
 var Content = event.results[0][0].transcript;
  document.getElementById("textbox").innerHTML = Content;
   console.log(Content);
 if(Content =="take my selfie") { console.log("taking selfie --- ");
 speak(); } }

 function speak (){
var synth = window.speechSynthesis;

speak_data="takind your selfie 5 second";
var utterThise= new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThise);
Webcam.attach(camera);
setTimeout(function(){
  take_snapshot();
  save();
},5000);



}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
camera =document.getElementById("camera");
function take_snapshot(){
Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML='<img id="selfe_img" src="'+data_uri+'">';
});

}
function save(){
link=document.getElementById("link");
img=document.getElementById("selfe_img").src;
link.href=img;
link.click();




}

 
