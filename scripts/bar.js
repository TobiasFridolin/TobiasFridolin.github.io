$(document).ready(function(){
    var scrollPrev;
    
    function addScrollBar(){
        $(".bar").addClass("bar--scrolling");
    }
    function removeScrollBar(){
        $(".bar").removeClass("bar--scrolling");
    }

    function handleScroll(){

        return function(){
            if(window.scrollY > $(".hero").innerHeight()){
                window.scrollY > scrollPrev ? addScrollBar() : removeScrollBar();
                $(".bar").removeClass("bar--transparent");
            }else{
                $(".bar").addClass("bar--transparent");
            }
            scrollPrev = window.scrollY;
        }
    }


    $(document).scroll(handleScroll());
});