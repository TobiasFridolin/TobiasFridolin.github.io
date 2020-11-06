document.querySelector('.nav__burger--collabsed').addEventListener('click', event =>{
    document.querySelector('.burger-menu').style.transform = "translateY(0)";
    document.querySelector('.nav__burger--collabsed').style.display = "none";
    document.querySelector('.nav__burger--open').style.display = "block";
});

document.querySelector('.nav__burger--open').addEventListener('click', event =>{
    document.querySelector('.burger-menu').style.transform = "translateY(-100%)";
    document.querySelector('.nav__burger--open').style.display = "none";
    document.querySelector('.nav__burger--collabsed').style.display = "block";
})