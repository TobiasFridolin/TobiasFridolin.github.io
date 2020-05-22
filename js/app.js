// $(document).on("click", ".portfolio__button", function(){

//     // create a div in body with class = 
//     $(this).css("position","fixed");
//     $(this).css("top","0");
//     $(this).css("left","0");
//     $(this).css("width","100%");
//     $(this).css("height","100%");
//     $(this).css("margin","0");
//     $(document).css("overflow-y", "hidden");
//     $("a").toggle();
// })


function scroll(){
    var black = "#1f1f1f";
    var naturbasen = $("#naturbasen");
    var headerHeight = $(".header").innerHeight();

    if($(document).scrollTop() != 0){
        $(".header").addClass("header--scrolling");
    }

    if($(document).scrollTop() == 0 && $('.portfolio-subnav').css("display") == "none" && $('.nav--open').css("display") == "none"){
        $(".header").removeClass("header--scrolling");
    }

    // if h1 is halfway on y, start animating from 0 opacity to 1 when top
    
}

function app(jQuery){
    $(document).scroll(scroll);
    
    $('.nav__burger').on("click", function(){
        // $('.header').css("height", "100%")
        // animate burger closed

        // change header style (background color, height to fit new content)
        $('.nav--open').toggle();

        // Switch burger menu icons
        $('.nav__burger--open').toggle();
        $('.nav__burger--collabsed').toggle();

    });

    // close menu when selecting a link
    $('.nav--open a').on("click", function(){
        $('.nav--open').toggle();
        $('.nav__burger--open').toggle();
        $('.nav__burger--collabsed').toggle();
    });

    $('#portfolio-navlink').on("click", function(){

        $('.portfolio-subnav').toggle();

        if($('.portfolio-subnav').css("display") == "block"){
            $(".header").addClass("header--scrolling");
        }else if($(document).scrollTop() == 0){
            $(".header").removeClass("header--scrolling");

        }
    });

    $('.portfolio-subnav a').on("click", function(){
        $('.portfolio-subnav').toggle();
    });

    $('.signature a').on("click", function(){
        $('.portfolio-subnav').css("display", "none");
    });

    $('.close').on("click", function(){
        $('.nav--open').toggle();
    });
}

$(app);


// Header

