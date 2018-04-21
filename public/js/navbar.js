// DECLARATION OF CONSTANTS
const backbtn = document.querySelector('#backbtn');
const vendors = document.querySelector('.vendors').classList;
const burgerMenu = document.querySelector('.burger-menu').classList;
const navbarDropdown = document.querySelector('.navbar__dropdown').classList;
const navbarMobile = document.querySelector('.navbar__list-mobile').classList;
let isScrollable = true;

function useScroll() {
  const pageHeight = window.innerHeight;
  const pageYOffset = window.pageYOffset;

  if (isScrollable) {
    if (pageYOffset + 100 > pageHeight) {
      backbtn.classList.add('active');
      if (!navbarDropdown.contains('active')) {
        navbarMobile.add('opaque');
      }
    } else if (backbtn.classList.contains('active')) {
      backbtn.classList.remove('active');
      navbarMobile.remove('opaque');
    }
  }
}

function dropdown() {
  navbarDropdown.toggle('active');
  burgerMenu.toggle('active');
  navbarMobile.remove('opaque');
}

function popDropdown() {
  navbarDropdown.remove('active');
  burgerMenu.remove('active');
}

function activateVendors() {
  isScrollable = false;
  vendors.add('active');
  backbtn.name = 'exitVendors';
  backbtn.classList.add('active');
  backbtn.firstChild.classList.add('rotate-90deg');
  popDropdown();
}

function backbtnHandler(e) {
  if (e.name === 'backToTop') return scrollToPlace(e.name);
  else if (e.name === 'exitVendors') {
    vendors.remove('active');
    isScrollable = true;
    popDropdown();
  } else if (e.name.startsWith('exitShopProducts')) {
    document.querySelector(`#shpp_${e.name.split('_')[2]}`).classList.remove('active');
  }
  backbtn.name = 'backToTop';
  backbtn.firstChild.classList.remove('rotate-90deg');
  backbtn.classList.remove('active');
  popDropdown();
}
