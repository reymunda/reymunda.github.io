let h1 = document.querySelector('.main h1');
h1.style.opacity = 0;
h1.style.transition = '1s';
window.addEventListener('load',() =>{
    h1.style.opacity = 1;
    setTimeout(() => {
        h1.style.opacity = 0;
    },4000)
    setTimeout(() => {
        h1.textContent = 'Silakan pilih salah satu fitur ini!';
        h1.style.opacity = 1;
    },5000)
    setTimeout(() => {
        h1.style.opacity = 0;
    },8000)
    setTimeout(() => {
        h1.textContent = 'Semoga membantu ^_^';
        h1.style.opacity = 1;
    },9000)
})
