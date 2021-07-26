window.addEventListener('load',() =>{
    let h1 = document.querySelector('section#jumbotron h1'),
        p = document.querySelector('section#jumbotron p'),
        i = 0,
        span = document.querySelector('section#jumbotron h1 span'),
        provinsi = ["Jawa Barat", "Bali" ,"Jawa Tengah", "Banten" ,"Jawa Timur","DI Yogyakarta", "Aceh Darussalam", "Sumatera Utara", "Sumatera Barat", "Riau", "Kepulauan Riau", "Jambi", "Bengkulu", "Sumatera Selatan", "Bangka Belitung", "Lampung", "NTB", "NTT", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kalimantan Utara", "Gorontalo", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tenggara", "Sulawesi Tengah", "Sulawesi Utara", "Maluku", "Maluku Utara", "Papua", "Papua Barat", "DKI Jakarta", "Indonesia"];

    h1.style.transition = '3s';
    p.style.transition = '3s';

    h1.style.opacity = 1;
    p.style.opacity = 1;

    let changingProvince = setInterval(() => {
            span.textContent = provinsi[i];
            i++
            console.log(provinsi[i]);
            if(i === 35){
                clearInterval(changingProvince)
            }
    }, 1000);
})
window.addEventListener('scroll',() => {
    let navbar = document.querySelector('nav');
    navbar.style.transition = '0.5s';
    navbar.classList.add('addShadow');
    setTimeout(() =>{
        navbar.classList.remove('addShadow');
    },3000)
})
