let body = document.querySelector('body');
let toggleMenu = document.querySelector('.toggle-menu');
let clickToggleMenu = document.querySelector('.bars')
let cancelToggleMenu = document.querySelector('.cross');
let home = document.querySelector('.home');

clickToggleMenu.addEventListener('click',function(){
    toggleMenu.style.display = 'block';
    home.style.background = "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('images/Desktop-SolarPanels.jpeg') center no-repeat";
    home.style.backgroundSize = 'cover';
    body.classList.add(toggleMenu);
});

cancelToggleMenu.addEventListener('click', function(){
    toggleMenu.style.display = 'none';
    home.style.background = "url('images/Desktop-SolarPanels.jpeg') center no-repeat";
    home.style.backgroundSize = 'cover';
    body.classList.remove(toggleMenu);
});



























function onScroll(){
    if (body.hasClass('lock-scroll')){
        $('body').removeClass('lock-scroll');
    }
    else{
        body.addClass('lock-scroll');
    }
}