// header scroll
$(document).ready(function () {
    var scrollPrev;
    $(document).scroll(function () {

        if (window.scrollY > 0) {
            if (window.scrollY > scrollPrev) {
                $("#header").addClass("header--hidden");
            } else {
                $("#header").removeClass("header--hidden");
            }
            if (window.scrollY > $("header").innerHeight()) {
                $("#header").addClass("header--scrolling");
            }
        } else {
            $("#header").removeClass("header--scrolling");
        }
        scrollPrev = window.scrollY;
    });
});

$(document).mousemove(function (event) {
    if (event.clientY < $(".header").innerHeight()) {
        $(".header").removeClass("header--hidden");
    };
});