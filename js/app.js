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

    console.log($(document).scrollTop())

    if($(document).scrollTop() != 0){
        $(".header").addClass("header--scrolling");
    }else{
        $(".header").removeClass("header--scrolling");

    }


    // if(naturbasen.position().top - headerHeight < $(document).scrollTop()){
    //     // document.getElementById("signature").style.stroke= "white";
    //     $(".header__links li a").css("color", "white");
    //     $(".signature").css("color", "white");
    // }
    // else{
    //     $(".header__links li a").css("color", black);
    //     $(".signature").css("color", black);
    // }
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
}

$(app);


// Header

