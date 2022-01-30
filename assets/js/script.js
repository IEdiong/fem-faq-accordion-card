'use strict'

let accordionBtns = document.getElementsByClassName('accordion__btn');

Array.from(accordionBtns).forEach((accordionBtn) => {
    
    console.log(accordionBtn);
    accordionBtn.onclick = function() {
        let content = this.nextElementSibling;
        console.log(content);
    }
})