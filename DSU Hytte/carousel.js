

var slideIndex = 1;
var counter = 0;

// displaySlide(slideIndex);

function changeSlides(n){
    displaySlide(slideIndex += n);
}

function displaySlide(n){
    var slides = document.getElementsByClassName('item');

    if( n > slides.length){slideIndex = 1;}
    if( n < 1){slideIndex = slides.length;}

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }



    slides[slideIndex-1].style.display = 'flex';
    counter=n;
}

setInterval(function() {displaySlide(counter+=1)}, 2000);
setInterval(function() {console.log(counter)}, 2000);


window.addEventListener("scroll", animate());

function animate(){
    if(this.scrollY > 10){
        // gsap.from("body", {duration: 1.5, opacity: 0}); 
    }
    console.log("animate");  
}

