window.addEventListener("scroll", animationTrigger);
document.onkeydown = checkKey;

var landing = document.getElementById('landing');
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");
var portfolioHeader = document.getElementById("portfolioHeader");
var header = document.getElementById("header");
var body = document.getElementById("body");
var h1s = document.getElementsByTagName("h1");
var h2s = document.getElementsByTagName("h2");
var h3s = document.getElementsByTagName("h3");
var lis = document.getElementsByTagName("li");
var ps = document.getElementsByTagName("p");
var footer = document.getElementById("footer");
var prototype = document.getElementById("prototype");
var scroll = true;
var flag = true;
var scrollThreshold = 20;


function resize(){
    document.documentElement.style.scrollBehavior = "auto";
    document.getElementsByClassName("active")[0].scrollIntoView();
    document.documentElement.style.scrollBehavior = "smooth";
}

function active(id){
    for(section of document.getElementsByTagName("section")){section.classList.remove("active");}
    document.getElementById(id).classList.add("active");
}

function wheel(event){
    var y = event.deltaY;  
    console.log("Scroll direction: " + y);

    if(flag){
        // Scroll down
        if(y > scrollThreshold){
            scrollSection(y);
            flag = false;

        // Scroll up
        }else if(y < -scrollThreshold){
            scrollSection(y);
            flag = false;
        }
    }

    if(y == 1 || y == -1){flag = true;}
}

function checkKey(e) {

    e = e || window.event;

    // Scroll up
    if (e.keyCode == '38') {
        scrollSection(-1);
    }
    // Scroll down
    else if (e.keyCode == '40') {
        scrollSection(1);
    }
}

function scrollSection(y){

    for(i = 0; i < document.getElementsByTagName("section").length; i++){
        sections = document.getElementsByTagName("section");
        elem = sections[i];

        if(elem.classList.contains("active")){

            // If scrolling up
            if(y < 0 && i != 0){
                elem.classList.remove("active");
                sections[i-1].scrollIntoView();
                sections[i-1].classList.add("active");

            
            // If scrolling down
            }else if(y > 0 && i != document.getElementsByTagName("section").length-1){
                elem.classList.remove("active");
                sections[i+1].scrollIntoView();
                sections[i+1].classList.add("active");
                console.log(elem);
                console.log(sections[i+1]);
                return;
            }
        }        
    }    
}








/*
landing.style.display='none';
about.style.display='none';
portfolio.style.display='none';
contact.style.display='none';


function inView(){
    for(section of document.getElementsByTagName("section")){
        section.style.display = 'none';
    }
    about.style.display ="flex";
    console.log("clicked");
}
   */
