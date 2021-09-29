/*for menu*/
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

/*For music*/
var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon")
icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src = "./img/pause.png";
    }else{
        mysong.pause();
        icon.src = "./img/play.png";
    }

}
