function scroll(){

    $(document).top != 480 ? headerScrolling : headerNotScrolling;
    if($('#header').offset().top != 480){
        headerScrolling();
    }else{
        headerNotScrolling();
    }

    console.log("scrolling");
}

function headerScrolling(){
    $('#header').addClass('header--scrolling');
}

function headerNotScrolling(){
    $('#header').removeClass('header--scrolling');
}

function app(jQuery){

    $(document).scroll(scroll);
    console.log("loaded");

}

$(app);