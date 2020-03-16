var portfolio = document.getElementById("portfolio");
var portfolioHeader = document.getElementById("portfolioHeader");


var about = document.getElementById("about");
var contact = document.getElementById("contact");
var header = document.getElementById("header");

var body = document.getElementById("body");
var h1s = document.getElementsByTagName("h1");
var h2s = document.getElementsByTagName("h2");
var h3s = document.getElementsByTagName("h3");
var lis = document.getElementsByTagName("li");
var ps = document.getElementsByTagName("p");

// var currentSection = document.getElementById("currentSection");

// var nav = document.getElementById("nav");




function animationTrigger () {

    let portfolioBoundingRect = portfolio.getBoundingClientRect();
    let portfolioTop = portfolioBoundingRect.top + this.scrollY;
    let portfolioBottom = portfolioBoundingRect.bottom + this.scrollY;


    let contactBoundingRect = contact.getBoundingClientRect();
    let contactTop = contactBoundingRect.top + this.scrollY;

    let aboutBoundingRect = about.getBoundingClientRect();
    let aboutTop = aboutBoundingRect.top + this.scrollY;
    let headerBoundingRect = header.getBoundingClientRect();


    if(this.scrollY > portfolioTop && this.scrollY < portfolioBottom){
        portfolioAnimationEnter();
    }else{
        portfolioAnimationExit();
    }

    // reset / default
    for(p of ps){ p.style.color = 'black';}
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
    h1s[0].innerHTML = 'Tobias Fridolin';
    h1s[0].style.fontSize = "1.5em";
    for(li of lis){ li.style.display = 'initial';}
    for(h1 of h1s){ h1.style.color = 'black';}
    for(h3 of h3s){ h3.style.color = 'black';}

    
    // 1x Header højde inden About
    if(this.scrollY > aboutTop - headerBoundingRect.height){

        h1s[0].innerHTML = '';
        for(li of lis){ li.style.display = 'none';}        

        // About
        if(this.scrollY > aboutTop){

            header.style.backgroundColor = 'white';
            header.style.boxShadow = '0px -28px 14px 21px rgba(102,102,102,1)';
            h1s[0].style.color = 'black';
    
            if(this.scrollY > aboutTop - headerBoundingRect.height){
                h1s[0].innerHTML = 'About';
                h1s[0].style.fontSize = "3em";       
            }
        }

        // Portfolio
        if(this.scrollY > portfolioTop){
            
            h1s[0].innerHTML = 'Portfolio';
            h1s[0].style.color = 'white';
            header.style.backgroundColor = 'black';
            header.style.boxShadow = 'none';
            for(h3 of h3s){ h3.style.color = 'white';}
            for(p of ps){ p.style.color = 'white';}

            // Contact
            if(this.scrollY > contactTop){
                h1s[0].innerHTML = 'Contact';
                header.style.backgroundColor = 'white';
                h1s[0].style.color = 'black';
                for(h3 of h3s){ h3.style.color = 'black';}
                for(p of ps){ p.style.color = 'black';}
            }
        }
    }
}

function portfolioAnimationEnter(){
   
    body.style.backgroundColor = 'black';

    for(x of h2s){x.style.color = 'white';}

    portfolioHeader.style.color = 'white';    
}

function portfolioAnimationExit(){
    body.style.backgroundColor = 'white';

    for(x of h2s){x.style.color = 'black';}
}



window.addEventListener("scroll", animationTrigger);