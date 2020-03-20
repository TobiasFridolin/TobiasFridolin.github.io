window.addEventListener("scroll", animationTrigger);

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
var footer = document.getElementById("footer");
var prototype = document.getElementById("prototype");

function animationTrigger () {
    
    var portfolioBoundingRect = portfolio.getBoundingClientRect();
    var contactBoundingRect = contact.getBoundingClientRect();
    var aboutBoundingRect = about.getBoundingClientRect();
    var headerBoundingRect = header.getBoundingClientRect();
    let portfolioTop = portfolioBoundingRect.top + this.scrollY;
    let portfolioBottom = portfolioBoundingRect.bottom + this.scrollY;
    let aboutTop = aboutBoundingRect.top + this.scrollY;


    (this.scrollY > portfolioTop - this.innerHeight/6 && this.scrollY < portfolioBottom) ? portfolioAnimationEnter() : reset();

    if(this.scrollY > aboutTop - headerBoundingRect.height){headerAnimate();}
}

function portfolioAnimationEnter(){
    body.style.backgroundColor = 'black';
    for(x of h2s){x.style.color = 'white';}
    portfolioHeader.style.color = 'white';    
    for(h3 of h3s){ h3.style.color = 'white';}
    for(p of ps){ p.style.color = 'white';}
    prototype.style.visibility = 'visible';
    footer.style.backgroundColor = 'black';
}

function headerAnimate(){
    h1s[0].innerHTML = '';
    for(li of lis){ li.style.display = 'none';}  
}

function reset(){
    body.style.backgroundColor = 'white';
    for(p of ps){ p.style.color = 'black';}
    h1s[0].style.color = 'black';
    for(h of h2s){h.style.color = 'black';}
    for(h3 of h3s){ h3.style.color = 'black';}
    footer.style.backgroundColor = 'white';

    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
    h1s[0].innerHTML = 'Tobias Fridolin';
    h1s[0].style.fontSize = "1.5em";
    for(li of lis){ li.style.display = 'initial';}
    for(h1 of h1s){ h1.style.color = 'black';}
    for(h3 of h3s){ h3.style.color = 'black';}
    footer.style.backgroundColor = 'white';
    prototype.style.visibility = 'hidden';
}

function contactAnimation(){

}

function gradual(v0, v1){
    let v0 = this.v0;
    let v1 = this.v1;
    var length = v1 - v0;

    if(this.scrollY > v0 && this.scrollY < v1){
        var transition = this.scrollY - v0 / length;
    }
}

function linearColorChange(elem, v0, v1){
    let elem = this.elem;
    let v0 = this.v0;
    let v1 = this.v1;
    var length = v1 - v0;

    if(this.scrollY > v0 && this.scrollY < v1){
        var transition = this.scrollY - v0 / length;
    }

    elem.style.color = "";
    // interpolation
}
