var nav = document.getElementsByTagName("nav")[0];
var logo = document.getElementById("logo");

welcome = document.getElementById("welcome");

console.log(document.getElementById("welcome").getBoundingClientRect().top);

const headerAnimate = () =>{
    console.log(this.scrollY);

    if(window.scrollY > document.getElementById("welcome").getBoundingClientRect().top + this.scrollY){
        
        nav.style.height="70px";
        logo.style.display ="flex";
        
        
    }else{
        logo.style.display="none";
        nav.style.height="auto";
    }

}