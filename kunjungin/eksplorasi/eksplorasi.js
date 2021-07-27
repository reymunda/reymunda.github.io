window.addEventListener('load',() =>{
    let h1 = document.querySelector('.main h1'),
    menu = document.querySelectorAll('.col-md-2 div');
    h1.style.transition = '1.5s';
    h1.style.opacity = 1;
    menu.forEach(e => {
        e.style.transition = '1.5s'
    })
    menu.forEach(e => {
        e.style.opacity = 1;
    })
    setTimeout(() => {
        h1.style.opacity = 0;
    },3000)
    setTimeout(() => {
        h1.textContent = 'Silakan pilih salah satu fitur ini!';
        h1.style.opacity = 1;
    },4500)
    setTimeout(() => {
        h1.style.opacity = 0;
    },7500)
    setTimeout(() => {
        h1.textContent = 'Semoga membantu ^_^';
        h1.style.opacity = 1;
    },9000)
})
