document.addEventListener('scroll',function(){
    const forjs = document.querySelector('.fixed-head#forjs');
    if(window.scrollY>150){
        forjs.classList.remove('invisible');
        forjs.classList.add('visible');
    }
    else{
        forjs.classList.remove('visible');
        forjs.classList.add('invisible');
    }
})