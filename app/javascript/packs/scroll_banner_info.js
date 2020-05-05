const scrolling = () => {
  let lastKnownScrollY = 0;
  let currentScrollY = 0;
  let ticking = false;
  const idOfHeader = 'banner-info';
  let eleHeader = null;
  const classes = {
    pinned: 'header-pin',
    unpinned: 'header-unpin',
  };
  const onScroll = () => {
    currentScrollY = window.pageYOffset;
    requestTick();
  };
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(update);
    }
    ticking = true;
  };
  const update = () => {
    if (currentScrollY < lastKnownScrollY) {
      pin();
    } else if (currentScrollY > lastKnownScrollY) {
      unpin();
    }
    lastKnownScrollY = currentScrollY;
    ticking = false;
  };
  const pin = () => {
    if (eleHeader.classList.contains(classes.unpinned)) {
      eleHeader.classList.remove(classes.unpinned);
      eleHeader.classList.add(classes.pinned);
    }
  };
  const unpin = () => {
    if (
      eleHeader.classList.contains(classes.pinned)
      || !eleHeader.classList.contains(classes.unpinned)
    ) {
      eleHeader.classList.remove(classes.pinned);
      eleHeader.classList.add(classes.unpinned);
    }
  };
  window.onload = () => {
    eleHeader = document.getElementById(idOfHeader);
    window.addEventListener('scroll', onScroll, false);
  };
};

export default scrolling;
