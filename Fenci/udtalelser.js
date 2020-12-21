$(document).ready(function () {

    function handleClick(event) {

        return function () {

            // Hvis det er det første element
            if (event.prev().length == 0) {
                t = 0.5 * $(document).outerWidth(true) - 0.5 * $(".active").outerWidth(true) - ($(".bla .container").length - 2) * $(".active").outerWidth(true);
                event = $(".bla .container").eq($(".bla .container").length - 2);
                // Hvis det er det sidste element
            } else if (event.next().length == 0) {
                t = 0.5 * $(document).outerWidth(true) - 0.5 * $(".active").outerWidth(true) - $(".bla .container").outerWidth(true);
                event = $(".bla .container").eq(1);
            } else {
                t = 0.5 * $(document).outerWidth(true) - 0.5 * $(".active").outerWidth(true) - event.prevAll().length * $(".active").outerWidth(true);
            }
            // t-= 6;
            $(".bla").css("transform", "translateX(" + t + "px)");
            $(".bla .active").addClass("inactive");
            $(".bla .active").removeClass("active");
            event.removeClass("inactive");
            event.addClass("active");
            $(".bla").css("height", event.outerHeight(true) + 64);
        };
    }

    $("#udtalelser").find(".container").each(function (index) {
        $(this).click(handleClick($(this)));
    });
    $(".bla .active").trigger("click");

    // hvis click på control
    $("#udtalelser .left-control").click(function () {
        $(".bla .active").prev().trigger("click");
    });

    $("#udtalelser .right-control").click(function () {
        $(".bla .active").next().trigger("click");
    });

    // handle resizing
    window.onresize = handleResizing;

    function handleResizing() {
        console.log(screen.width);
        $(".bla .active").trigger("click");
        // SHOULD IDEALLY CHECK IF IT ALREADY HAS AN EVENT HANDLER
        $("#udtalelser").find(".container").each(function (index) {
            $(this).click(handleClick($(this)));
        });
    }

    window.setTimeout(function () {
        $(".bla .active").trigger("click");
    }, 200);
});