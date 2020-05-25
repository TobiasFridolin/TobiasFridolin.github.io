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


    // transform.translateY ud af view, istedet for opacity
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



    console.log();

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

