
$(document).ready(function(){
    var logo = document.getElementById("logo");  
    welcome = document.getElementById("welcome");
    console.log(document.getElementById("welcome").getBoundingClientRect().top);
    
    const headerAnimate = () =>{
        
        if($(document).scrollTop() > welcome.getBoundingClientRect().top + $(document).scrollTop()){      
            logo.style.display ="flex";
        }else{
            logo.style.display="none";
        }
        
    }
    
    
    const navSlide = () =>{
        const burger = document.querySelector(".nav__burger");
        const nav = document.querySelector(".nav__links");

        burger.addEventListener('click', () => {
            nav.classList.toggle("open");
            console.log(nav.classList);
        });

        console.log(burger);
    }
    
    navSlide();
    $(document).scroll(headerAnimate);

  
});
