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


    if(naturbasen.position().top - headerHeight < $(document).scrollTop()){
        // document.getElementById("signature").style.stroke= "white";
        $(".header__links li a").css("color", "white");
        $(".signature").css("color", "white");
    }
    else{
        $(".header__links li a").css("color", black);
        $(".signature").css("color", black);
    }
}

function app(jQuery){
    $(document).scroll(scroll);

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#naturbasen"
    })
    .setTween("#animate", 0.5, {opacity: "0"})
    .addTo(controller);
}






$(app);
