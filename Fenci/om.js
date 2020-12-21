$(document).ready(function () {
    var om = $("#om");
    var leftCtrl = $("#om .left-control");
    var rightCtrl = $("#om .right-control");

    leftCtrl.click(function () {
        var children = $("#om .child");
        var active = $("#om .active").index();
        $("#om .active").removeClass("active");

        if (active == 1) {
            children.eq(children.length - 1).addClass("active");
        } else {
            children.eq(active - 2).addClass("active");
        }
    });

    rightCtrl.click(function () {
        var children = $("#om .child");
        var active = $("#om .active").index();
        $("#om .active").removeClass("active");

        if (active == children.length) {
            children.first().addClass("active");
        } else {
            children.eq(active).addClass("active");
        }
    });
});