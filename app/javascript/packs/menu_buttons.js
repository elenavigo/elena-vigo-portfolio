const buttonPressed = () => {
  const helloButton = document.getElementById('hello-button');
  const helloLocation = document.getElementById('hello');
  const resumeButton = document.getElementById('resume-button');
  const resumeLocation = document.getElementById('resume');
  const portfolioButton = document.getElementById('portfolio-button');
  const portfolioLocation = document.getElementById('portfolio');
  const contactButton = document.getElementById('contact-button');
  const contactLocation = document.getElementById('contact-me');

  const heightNavbar = 100;

  helloButton.addEventListener('click', (event) => {
    window.scroll({ top: (helloLocation.offsetTop - heightNavbar), behavior: 'smooth' });
    event.preventDefault();
  });

  resumeButton.addEventListener('click', (event) => {
    window.scroll({ top: (resumeLocation.offsetTop - heightNavbar), behavior: 'smooth' });
    event.preventDefault();
  });

  portfolioButton.addEventListener('click', (event) => {
    window.scroll({ top: (portfolioLocation.offsetTop - heightNavbar), behavior: 'smooth' });
    event.preventDefault();
  });

  contactButton.addEventListener('click', (event) => {
    window.scroll({ top: (contactLocation.offsetTop - heightNavbar), behavior: 'smooth' });
    event.preventDefault();
  });
};

export default buttonPressed;
