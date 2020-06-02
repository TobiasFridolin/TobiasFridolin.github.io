
function scroll(){

    // if document is not at top, header--scrolling
    if($(document).scrollTop() != 0){
        $(".header").addClass("header--scrolling");
    }

    // if document at top and none of the navs are open, remove header scrolling
    if($(document).scrollTop() == 0 && $('.portfolio-subnav').css("display") == "none" && $('.nav--open').css("display") == "none"){
        $(".header").removeClass("header--scrolling");
    }


    // if scrolling up and less than 500 px from top, hide header if no menu is open, if a menu is open, remove header--hidden.
    if($(document).scrollTop() > previousScrollPosition && $(document).scrollTop() > 500) {

        if($('.portfolio-subnav').css("display") == "none" && $('.nav--open').css("display") == "none"){
            // $(".header").css("opacity","0");
            $(".header").addClass("header--hidden");
        }
    }else{
        // $(".header").css("opacity","1");
        $(".header").removeClass("header--hidden");
    }

    previousScrollPosition = $(document).scrollTop()

    function headingAnimate(elem){

        if($(elem).offset().top < $(document).scrollTop() + $(window).height() / 2 && $(elem).find("h2").css("display") == "none"){
            $(elem).find("h2").fadeIn("slow");
        }
    }

    headingAnimate("#naturbasen");
    headingAnimate("#gn");
    headingAnimate("#cj-app");
    headingAnimate("#cj-hjemmeside");
}

function app(jQuery){
    previousScrollPosition = 0;

    $(document).scroll(scroll);
    
    $('.nav__burger').on("click", function(){

        $('.nav--open').toggle();
        $('.nav--open').css("display") == "block" ? $('body').css("overflow-y", "hidden") : $('body').css("overflow-y", "auto");

        

        // Switch burger menu icons
        $('.nav__burger--open').toggle();
        $('.nav__burger--collabsed').toggle();

    });

    // close menu when selecting a link
    $('.nav--open a').on("click", function(){
        $('.nav--open').toggle();
        $('.nav--open').css("display") == "block" ? $('body').css("overflow-y", "hidden") : $('body').css("overflow-y", "auto");

        $('.nav__burger--open').toggle();
        $('.nav__burger--collabsed').toggle();
    });

    $('#portfolio-navlink').on("click", function(){

        // toggle this
        // $(this).css("color", "#FEB48B");
        // $(this).css("border-bottom", "4px solid #FEB48B");      
          
        // vent indtil animation end
        $(this).toggleClass("active");

        $('.portfolio-subnav').slideToggle(function(){
            if($('.portfolio-subnav').css("display") == "none" && $(document).scrollTop() == 0){
                $(".header").removeClass("header--scrolling");
            }
        });

        if($('.portfolio-subnav').css("display") == "block"){
            $(".header").addClass("header--scrolling");
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
        $('.nav--open').css("display") == "block" ? $('body').css("overflow-y", "hidden") : $('body').css("overflow-y", "auto");

    });

    $('section').on("click", function(){

        if($('.portfolio-subnav').css("display") == "block"){
            $('.portfolio-subnav').slideToggle();
            $('#portfolio-navlink').toggleClass("active");
        }
    })

}

$(app);


// Header

