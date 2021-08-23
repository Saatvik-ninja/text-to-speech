var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking selfie");
    
    Speak();
    }
}
function Speak(){
    var synth=window.speechSynthesis;
    Speak_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(Speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        picture();
        save();
    },5000);
    
    
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");

function picture(){
    Webcam.snap(function(data_uri){ 
        document.getElementById("result").innerHTML='<img id="selfie"src="'+data_uri+' ">';
    });
}

function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click();
}