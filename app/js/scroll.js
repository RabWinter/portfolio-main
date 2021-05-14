'use strict';

function scrollToSection() {
 const headerLinks = document.querySelector('.header__links');
 const mobileLinks = document.querySelector('.header__menu');
 const section1 = document.getElementById('section-1');
 const btnScrollTo = document.querySelector('.btn-scroll-to');
 const header = document.querySelector('.header');
 const fadeEls = document.querySelectorAll('.has-fade');
 const body = document.querySelector('body');

 // Srcoll to each section on header link click
 function scrollToTarget(e) {
  if (e.target.classList.contains('header__menu--link')) {
   const targetSection = e.target.getAttribute('href');
   document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
   closeBurgerMenu(e);
  }
 }

 // Close burger menu
 function closeBurgerMenu(e) {
  body.classList.remove('no-scroll');
  header.classList.remove('open');
  fadeEls.forEach(function (el) {
   el.classList.remove('fade-in');
   el.classList.add('fade-out');
  });
 }

 // Scroll to section 1 on click
 btnScrollTo.addEventListener('click', () => {
  section1.scrollIntoView({ behavior: 'smooth' });
  console.log('click');
 });

 headerLinks.addEventListener('click', (e) => {
  scrollToTarget(e);
 });

 mobileLinks.addEventListener('click', (e) => {
  scrollToTarget(e);
 });
}
scrollToSection();

export default scrollToSection;
