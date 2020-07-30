const navbar = document.querySelector('.navbar');
let navTop = navbar.offsetTop;

const stickyNavigation = () => {
  console.log(`navTop = ${navTop}`);
  console.log(`scrollY = ${window.scrollY}`);

  if (window.scrollY > navTop) {
    navbar.classList.add('fix-navbar');
  } else {
    navbar.classList.remove('fix-navbar');
  }
};

const fixMenu = () => {
  window.addEventListener('scroll', stickyNavigation);
};

export default fixMenu;
