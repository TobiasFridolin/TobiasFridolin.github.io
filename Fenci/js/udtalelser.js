$(document).ready(function(){
    function getActive(){return $("#udtalelser").find(".active");}
    function getActiveWidth(){return getActive().outerWidth(true);}
    function getContainers(){return $("#udtalelser").find(".container");}
    function getWrapper(){return $("#udtalelser").find(".wrapper");}

    function handleClick(event){
        return function(){

            // Hvis det er det første element
            if(event.prev().length == 0){
                t = 0.5 * $(document).outerWidth(true) - 0.5 * getActiveWidth() - (getContainers().length - 2) * getActiveWidth();
                event = getContainers().eq(getContainers().length - 2);
            // Hvis det er det sidste element
            }else if(event.next().length == 0){
                t = (0.5 * $(document).outerWidth(true)) - (0.5 * getActiveWidth()) - (getContainers().outerWidth(true));
                event = getContainers().eq(1);
            }
            else{
                t = (0.5 * $(document).outerWidth(true)) - (0.5 * getActiveWidth()) - (event.prevAll().length * getActiveWidth());
            }

            getActive().addClass("inactive");
            getActive().removeClass("active");
            event.removeClass("inactive");
            event.addClass("active");
            getWrapper().css({"transform": "translateX(" + t + "px)", "height": event.outerHeight(true) + 64});
        };
    }

    $("#udtalelser").find(".container").each(function(index){$(this).click(handleClick($(this)));});
    
    // hvis click på control
    $("#udtalelser").find(".left-control").click(function(){ 
        getActive().prev().trigger("click");
    });
    
    $("#udtalelser").find(".right-control").click(function(){
        getActive().next().trigger("click");
    });
    
    // handle resizing
    window.onresize = handleResizing;
    
    function handleResizing(){
        console.log(screen.width);
        getActive().trigger("click");
        // SHOULD IDEALLY CHECK IF IT ALREADY HAS AN EVENT HANDLER
        $("#udtalelser").find(".container").each(function(index){$(this).click(handleClick($(this)));});
    }    
});