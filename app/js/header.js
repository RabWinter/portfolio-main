'use strict';

function stickyNav() {
 const header = document.querySelector('.header');
 const hero = document.querySelector('.hero');
 const headerHeight = header.getBoundingClientRect().height;
 
 function fixNav(entries) {
  const [entry] = entries;
  
  if (!entry.isIntersecting) {
   header.classList.add('fixed-nav');
  } else {
   header.classList.remove('fixed-nav');
  }
 }

 const headerObserver = new IntersectionObserver(fixNav, {
  root: null,
   threshold: 0,
  rootMargin:`-${headerHeight}px`
 });
 headerObserver.observe(hero);
}
stickyNav();

export default stickyNav;
