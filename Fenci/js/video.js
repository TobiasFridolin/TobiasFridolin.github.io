video = document.getElementById("video");
video.muted = true;
video.loop = true;
stopped = false;

function play(){
    video.play();
}

function pause(){
    video.pause();
}

$("#video").click(function(){
    stopped ? play() : pause();
    stopped = !stopped;
});

$(document).ready(function(){
    play();

    $(document).scroll(function(){
        if(window.scrollY > window.innerHeight / 2){
            if(stopped == false){
                pause();
            }
        }else{
            if(stopped == false){
                play();
            }
        }
    });
});