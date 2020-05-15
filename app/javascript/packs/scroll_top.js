const scrollTop = () => {
  const button = document.getElementById('scroll-top');
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

export default scrollTop;
