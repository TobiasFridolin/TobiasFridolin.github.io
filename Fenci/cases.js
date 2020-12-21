$(document).ready(function () {

    var outline = $("#cases .outline");
    var content = $("#cases .content");

    function handleClick(event) {

        var elem = content.find(".case").eq(event.index());

        return function () {
            $("#cases").find(".active").removeClass("active");
            event.addClass("active");

            elem.addClass("active");

            $("#cases").css("height", elem.outerHeight(true) + 140);
        };
    }

    outline.find("li").each(function (index) {
        $(this).click(handleClick($(this)));
    });
});