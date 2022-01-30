'use strict';
const mode = document.querySelector('.btn');
mode.addEventListener('click', function(){
    document.body.classList.toggle('darktheme');

    const classBody = document.body.className
    if(classBody == 'darktheme'){
        this.textContent = "Light"
    }else{
        this.textContent = "Dark"
    }

    console.log('current class name: ' + classBody);
});