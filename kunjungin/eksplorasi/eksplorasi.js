window.addEventListener('load',() =>{
    let h1 = document.querySelector('.main h1'),
    menu = document.querySelectorAll('.col-md-2 div');
    h1.style.transition = '1.3s';
    h1.style.opacity = 1;
    menu.forEach(e => {
        e.style.transition = '1.3s'
    })
    menu.forEach(e => {
        e.style.opacity = 1;
    })
    setTimeout(() => {
        h1.style.opacity = 0;
    },1300)
    setTimeout(() => {
        h1.textContent = 'Silakan pilih salah satu fitur ini!';
        h1.style.opacity = 1;
    },2500)
    setTimeout(() => {
        h1.style.opacity = 0;
    },5000)
    setTimeout(() => {
        h1.textContent = 'Semoga membantu ^_^';
        h1.style.opacity = 1;
    },6000)
})
