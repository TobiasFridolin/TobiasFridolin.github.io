
document.querySelectorAll('.fullscreen-able').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.add('fullscreen');
        var close = item.previousElementSibling;
        close.style.display = "block";
        document.getElementsByTagName('body')[0].classList.add('locked-in-fullscreen');
    })
});

document.querySelectorAll('.close').forEach(item => {
    item.addEventListener('click', event => {
        var img = item.nextElementSibling;
        img.classList.toggle('fullscreen');
        item.style.display = "none";
        document.getElementsByTagName('body')[0].classList.remove('locked-in-fullscreen');
    })
});
