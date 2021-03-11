(function () {
    'use strict';
    let overlay = document.querySelector('.overlay')
    let item = document.querySelectorAll('.ticketlist li')
    let overItem = document.querySelectorAll('.overlay-item')
    let overlayContent = document.querySelector('.overlay-content')
    let close = document.querySelector('.close')
    let photo = document.querySelectorAll('.overlay-photo') 
    let text = document.querySelectorAll('.overlay-text') 
 /*    window.onload = function(){
        confirm(`Thank for taking your time test my project. 
        Here are the questions for today's testing:
        1. How is the interface? Is it smooth when you click/browse it?
        2. How are the button positions? Are they comfortable for you to click?
        3. How is the overall design? Font style/Color etc.  
        
        Thank you!
        `)
    } */
    for (let i = 0; i < item.length; i++) {
        item[i].onclick = function () {
            overlay.classList.add('active')
            overlayContent.classList.add('active')
            overItem[i].classList.add('active')
        }
    }
    // mouse in show text
    for (let i = 0; i < photo.length; i++) {
        photo[i].onmouseenter = function () {
            text[i].classList.add('active')
            close.classList.remove('active')
        }
        photo[i].onmouseleave = function () {
            text[i].classList.remove('active')
            close.classList.add('active')
        }
    }
  
    close.onclick = function () {
        overlay.classList.remove('active')
        overlayContent.classList.remove('active')
        for (let i = 0; i < overItem.length; i++) {
            overItem[i].classList.remove('active')
            text[i].classList.remove('active')
        }
    }
  
})()