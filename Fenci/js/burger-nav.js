closeMenu = () =>{
    $(".nav-menu").removeClass("nav-menu--open");
    $(".burger").addClass("burger--collapsed");
    $(".burger").removeClass("burger--open");
    $("body").removeClass("nav-open");
}

openMenu = () =>{
    $(".nav-menu").addClass("nav-menu--open");
    $(".burger").removeClass("burger--collapsed");
    $(".burger").addClass("burger--open");
    $("body").addClass("nav-open");
}

$(".burger").click(function(){
    $(this).hasClass("burger--collapsed") ? openMenu() : closeMenu();
});

$(".nav-links").find("a").click(function(){
    if($(".nav-menu").hasClass("nav-menu--open")){
        closeMenu()
    }else{
        setTimeout(function(){ $(".header").removeClass("header--hidden")}, 20);
    }
})

function transitionNavLinks(navMenu){
    $(".contact-info").addClass("t-4--on");   
    navMenu.find("li").each(function(index){
        var elem = $(this);
        setTimeout(function(){ elem.addClass("t-3--on")}, index * 200);
    }); 
}

function resetNavLinks(navMenu){
    $(".contact-info").removeClass("t-4--on");
    navMenu.find("li").removeClass("t-3--on");
}

// transition contact info in
$("#nav-menu").on("transitionend", function(){
    $(this).hasClass("nav-menu--open") ? transitionNavLinks($(this)) : resetNavLinks($(this));
});
