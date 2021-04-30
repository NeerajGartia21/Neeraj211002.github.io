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
const body = document.querySelector('.body');
const brdrbtn = document.querySelector('#brdrbtn');


hamburger.addEventListener('click', function() {


    if (!hamburger.classList.contains('open')) {
        document.getElementById('hamimg').src = './img/icon-close-menu.svg';
        hamburger.classList.add('open');
        menu.classList.add('overlay');
        menubox.classList.remove('hasfade');
        body.classList.add('noscroll');




    } else {
        document.getElementById('hamimg').src = './img/icon-hamburger.svg';
        hamburger.classList.remove('open');
        menu.classList.remove('overlay');
        menubox.classList.add('hasfade');
        body.classList.remove('noscroll');



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
        body.classList.add('noscroll');
    }

})
thanksbtn2.addEventListener('click', function() {

    if (!thanks.classList.contains('open')) {
        thanks.classList.add('open');
        menu.classList.add('overlay2');
        thanks.classList.remove('hasfade');
        body.classList.add('noscroll');
    }

})
thnxclose.addEventListener('click', function() {


    if (thanks.classList.contains('open')) {
        thanks.classList.remove('open');
        menu.classList.remove('overlay2');
        thanks.classList.add('hasfade');
        body.classList.remove('noscroll');
    }

})
bookmark.addEventListener('click', function() {


    if (!thanks.classList.contains('open')) {
        thanks.classList.add('open');
        document.getElementById("bkmrkh").innerHTML = "Bookmarked";
        document.getElementById("bkmrkh").style.color = "hsl(176, 72%, 28%)";
        bookmark.getElementsByTagName("circle")[0].style.fill = "hsl(176, 50%, 47%)";
        bookmark.getElementsByTagName("path")[0].style.fill = "white";
    } else {
        thanks.classList.remove('open');

        document.getElementById("bkmrkh").innerHTML = "Bookmark";
        document.getElementById("bkmrkh").style.color = "hsl(0, 0%, 48%)";
        bookmark.getElementsByTagName("circle")[0].style.fill = "#2F2F2F";
        bookmark.getElementsByTagName("path")[0].style.fill = "#B1B1B1";
    }

})

function border1() {
    document.getElementsByClassName("bs")[0].style.border = "2px solid hsl(176, 72%, 28%)";
}

function border2() {
    document.getElementsByClassName("bs")[1].style.border = "2px solid hsl(176, 72%, 28%)";
}

function border3() {
    document.getElementsByClassName("bs")[2].style.border = "2px solid hsl(176, 72%, 28%)";
}