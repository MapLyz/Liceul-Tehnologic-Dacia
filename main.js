
// Javascript file


let menupc = document.querySelector('.menu-open-pc');
let informatii = document.querySelector('.info-pc');
let even = document.querySelector('.event-pc');
let linkContainer = document.querySelector('.main-pc-menu');

informatii.addEventListener('click', function(event) {
  event.stopPropagation();
  menupc.style.display = 'block';

  linkContainer.innerHTML = `
  <a href="">Informatii despre site</a>
  <a href="">Informatii despre Liceu</a>
  <a href="">Contacteaza-ne</a>
  <a href="">Vezi regulile scoi</a>
  `;
});

even.addEventListener('click', function(event) {
  event.stopPropagation();
  menupc.style.display = 'block';
  linkContainer.innerHTML = `
  <a href="">Activitati</a>
  <a href="">Evenimente</a>
  <a href="">Proiecte</a>
  `;
});

document.addEventListener('click', function(event) {
  menupc.style.display = 'none';
});


let searchbtn,menubtn,close,menu,wrc,wrm;

  searchbtn = document.querySelector('.search')
  menubtn = document.querySelector('.menu-p')
  menu = document.querySelector('.menu-open')
  close = document.querySelector('.close')
  wrc = document.querySelector('.close-w')
  wrm = document.querySelector('.warnnig')

  searchbtn.addEventListener('click', ()=> {
    window.location.replace("search.html");
  })

  menubtn.addEventListener('click', ()=> {

    menu.style.display = 'block'

  })

  close.addEventListener('click', ()=> {

    menu.style.display = 'none'

  })
  wrc.addEventListener('click', ()=> {

    wrm.style.display = 'none'

  })


