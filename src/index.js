import initApp from "./js/index";
import "./style/main.scss";

//initApp(); for resume
// hamburger menu
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const hamImg = document.querySelector('.header__main-ham-menu')
const hamClose = document.querySelector('.header__main-ham-menu-close')


hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active');
   /*  hamClose.classList.remove('header__main-ham-menu-close--active');
    hamImg.classList.add('header__main-ham-menu--active'); */
  

  } else {
    smallMenu.classList.add('header__sm-menu--active')
/*     hamClose.classList.add('header__main-ham-menu-close--active');
    hamImg.classList.remove('header__main-ham-menu--active'); */

  }
})

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = '#'
})

