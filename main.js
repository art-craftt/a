var option = document.getElementById('opt');
var menu = document.getElementById('menu');

option.addEventListener('click', e=>{
    if (option.className=='bars'){
        option.className = '';
        menu.style.marginRight=0;
        menu.style.transition='0.5s all ease-in-out';
    }else{
        option.className='bars';
        menu.style.marginRight='-250px';
        menu.style.transition='0.5s all ease-in-out';
    }
})


