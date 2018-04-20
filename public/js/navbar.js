function dropdown() {
  document.querySelector('.navbar__dropdown').classList.toggle('active');
  document.querySelector('.burger-menu').classList.toggle('active');
}
function useScroll() {
  const { innerHeight: pageHeight, pageYOffset: pageOffset } = window;
  const backToTop = document.querySelector('#backToTop');
  if (pageOffset > pageHeight) backToTop.classList.add('active');
  else if (backToTop.classList[0] === 'active') backToTop.classList.remove('active');
}
