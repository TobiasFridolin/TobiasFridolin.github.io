var slideIndex = 1;
displaySlide(slideIndex);

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
    
    console.log(slideIndex);


}

