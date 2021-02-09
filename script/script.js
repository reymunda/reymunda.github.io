const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;
let profile = document.querySelector('.profile');
let login = document.querySelector('.login-card');
let hamburger = document.querySelector('.hamburger');
let sidebar = document.querySelector('.sidebar');
hamburger.addEventListener('click',() => {
  sidebar.classList.toggle('slide');
})
profile.addEventListener('click',() => {
	login.classList.toggle('login-appear')
})
imgs.addEventListener('click',e => {
  img.forEach(img => (img.style.opacity = 1));

  // Mengganti current image dengan image yang diklik
  current.src = e.target.src;

  // Class fade
  current.classList.add('fade-in');

  // Menghapus class fade-in setelah 500 ms (5 detik)
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Mengganti opacity
  e.target.style.opacity = opacity;
} );

//Event pada hamburger menu

