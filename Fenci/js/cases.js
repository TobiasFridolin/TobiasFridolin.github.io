$(document).ready(function(){
    
    var outline = $("#cases").find(".outline");
    var content = $("#cases").find(".content");
    var leftCtrl = $("#cases").find(".left-control");
    var rightCtrl = $("#cases").find(".right-control");
    var h1Height = $("#cases").find("h1").outerHeight(true);
    var outlineHeight = outline.outerHeight(true);
    var mobileWidth = 1024;
   
    function getActiveHeight(){
        return $("#cases .content .active").outerHeight(true);
    }  

    function getActive(){
        return $(".outline .active");
    }
    
    function handleClick(event){
        
        var elem = content.find(".case").eq(event.index());
        
        return function(){
            $("#cases").find(".active").removeClass("active");
            event.addClass("active");
            elem.addClass("active");

            $("#cases").css("height", elem.outerHeight(true) + h1Height);
        }

    }

    outline.find("li").each(function( index ){
        $(this).click(handleClick($(this)));
    });

    leftCtrl.click(function(){
        getActive().prev().index() > -1 ? getActive().prev().trigger("click") : $(".outline").find("li").last().trigger("click");
        $("#cases").css("height", getActiveHeight() + h1Height + outlineHeight);
    });

    rightCtrl.click(function(){
        getActive().next().index() > 0 ? getActive().next().trigger("click") : $(".outline").find("li").first().trigger("click");
        $("#cases").css("height", getActiveHeight() + h1Height + outlineHeight);
    })

    $(window).resize(() => screen.width < mobileWidth ? $("#cases").css("height", getActiveHeight() + h1Height + outlineHeight) : $("#cases").css("height", getActiveHeight() + h1Height));
    $(window).trigger("resize");
});