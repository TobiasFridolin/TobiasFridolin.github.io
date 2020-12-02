$(document).ready(function(){
    $(document).scroll(function(){
        $(document).scrollTop() != 0 ? $(".header").addClass("header--scrolling") : $(".header").removeClass("header--scrolling");
    });

});