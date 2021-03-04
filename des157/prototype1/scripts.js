(function () {
    'use strict';
    let overlay = document.querySelector('.overlay')
    let item = document.querySelectorAll('.ticket—list li')
    let overItem = document.querySelectorAll('.overlay-item')
    let overlayContent = document.querySelector('.overlay-content')
    let close = document.querySelector('.close')
    for (let i = 0; i < item.length; i++) {
        item[i].onclick = function () {
            overlay.classList.add('active')
            overlayContent.classList.add('active')
            overItem[i].classList.add('active')
        }
    }
  
    close.onclick = function () {
        overlay.classList.remove('active')
        overlayContent.classList.remove('active')
        for (let i = 0; i < overItem.length; i++) {
            overItem[i].classList.remove('active')
        }
    }
})()