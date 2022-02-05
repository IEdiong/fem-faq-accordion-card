'use strict'

let accordionBtns = document.getElementsByClassName('accordion__btn');

Array.from(accordionBtns).forEach((accordionBtn) => {

    accordionBtn.onclick = function() {
        console.log(accordionBtn.parentElement.nextElementSibling);
        this.parentElement.nextElementSibling.classList.toggle('open');
    }
})