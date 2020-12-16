
var brand1Animate = false;
var brand2Animate = false;

var animate = function(elem, c){
elem.addClass(c);
}

$(document).scroll(function(){
var omTop = $("#om").offset().top;
var hook1Top = $("#hook-1").offset().top;

if(omTop - window.scrollY < window.innerHeight / 2){
    $("#om").children("h1").addClass("t--on");
    $("#om").find("p").addClass("t--on");
};

if(hook1Top - window.scrollY < window.innerHeight / 2){
    $("#hook-1").find("h1").addClass("t--on");
    $("#hook-1").find("p").addClass("t--on");
}

if(window.scrollY < 20 || window.scrollY + window.innerHeight + 20 > $(document).height()){
    $("#somebar").children(".container").addClass("container--active");
    $("#somebar").children(".container").removeClass("container--inactive");
}
else if(window.scrollY > 20 || window.scrollY + window.innerHeight + 20 < $(document).height()){
    $("#somebar").children(".container").addClass("container--inactive");
    $("#somebar").children(".container").removeClass("container--active");
}

if(window.scrollY > $("#hero").offset().bottom - window.innerHeight * 0.9 && !brand1Animate){
    $("#brands-1").find(".t-2").each(function(index){
        var elem = $(this);
        setTimeout(function(){ animate(elem, "t-2--on")}, index * 100);
    })
    brand1Animate = true;
}


if(window.scrollY > $("#brands-2").offset().top - window.innerHeight * 0.9 && !brand2Animate){
    $("#brands-2").find(".t-2").each(function(index){
        var elem = $(this);
        setTimeout(function(){ animate(elem, "t-2--on")}, index * 100);
    })  
    brand2Animate = true;
}   
});  