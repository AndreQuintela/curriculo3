var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img4 = document.getElementById('img4')

var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')


function removeron(){ 
    img1.classList.remove('on'), 
    img2.classList.remove('on'), 
    img3.classList.remove('on'), 
    img4.classList.remove('on'),
    btn1.classList.remove('btnselect'),
    btn2.classList.remove('btnselect'),
    btn3.classList.remove('btnselect'),
    btn4.classList.remove('btnselect')
}

function _img1(){
    img1.classList.add('on')
    btn1.classList.add('btnselect')
}

function _img2(){
    img2.classList.add('on')
    btn2.classList.add('btnselect')
}

function _img3(){
    img3.classList.add('on')
    btn3.classList.add('btnselect')
}

function _img4(){
    img4.classList.add('on')
    btn4.classList.add('btnselect')
}



btn1.addEventListener('click', removeron)
btn1.addEventListener('click', _img1)

btn2.addEventListener('click', removeron)
btn2.addEventListener('click', _img2)

btn3.addEventListener('click', removeron)
btn3.addEventListener('click', _img3)

btn4.addEventListener('click', removeron)
btn4.addEventListener('click', _img4)