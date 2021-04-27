const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');
const menubox = document.querySelector('.menubox');
const bookmark = document.querySelector('#bkmrk');
const backbtn = document.querySelector('#btn');
const backmenu = document.querySelector('.backmenu');
const closebtn = document.querySelector('#closebtn');
const thanksbtn = document.querySelector('.thanksbtn');
const thanksbtn2 = document.querySelector('.thanksbtn2');
const thanks = document.querySelector('.thanks');
const thnxclose = document.querySelector('#thnxclose');


hamburger.addEventListener('click', function() {


    if (!hamburger.classList.contains('open')) {
        document.getElementById('hamimg').src = './img/icon-close-menu.svg';
        hamburger.classList.add('open');
        menu.classList.add('overlay');
        menubox.classList.remove('hasfade');



    } else {
        document.getElementById('hamimg').src = './img/icon-hamburger.svg';
        hamburger.classList.remove('open');
        menu.classList.remove('overlay');
        menubox.classList.add('hasfade');



    }

})
backbtn.addEventListener('click', function() {


    if (!backbtn.classList.contains('open')) {

        backbtn.classList.add('open');
        menu.classList.add('overlay2');
        backmenu.classList.remove('hasfade');



    }

})
closebtn.addEventListener('click', function() {


    if (backbtn.classList.contains('open')) {

        backbtn.classList.remove('open');
        menu.classList.remove('overlay2');
        backmenu.classList.add('hasfade');



    }

})
thanksbtn.addEventListener('click', function() {

    if (!thanks.classList.contains('open')) {
        thanks.classList.add('open');
        menu.classList.add('overlay2');
        thanks.classList.remove('hasfade');
    }

})
thanksbtn2.addEventListener('click', function() {

    if (!thanks.classList.contains('open')) {
        thanks.classList.add('open');
        menu.classList.add('overlay2');
        thanks.classList.remove('hasfade');
    }

})
thnxclose.addEventListener('click', function() {


    if (thanks.classList.contains('open')) {
        thanks.classList.remove('open');
        menu.classList.remove('overlay2');
        thanks.classList.add('hasfade');
    }

})
bookmark.addEventListener('click', function() {



    document.getElementById("bkmrkh").innerHTML = "Bookmarked";
    document.getElementById("bkmrkh").style.color = "hsl(176, 72%, 28%)";

})
document.querySelector('#brdrbtn').addEventListener('click', function() {
    if (!menubox.classList.contains('open')) {
        menubox.classList.add('open');
        document.querySelector('.bs').style.border = "2px solid hsl(176, 72%, 28%)";
    } else {
        menubox.classList.remove('open');
        document.querySelector('.bs').style.border = "1px solid rgb(207, 207, 207)";
    }
})