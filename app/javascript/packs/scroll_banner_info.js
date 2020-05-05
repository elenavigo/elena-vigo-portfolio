const scrolling = () => {
  const lastKnownScollY = 0;
  const currentScrollY = 0;
  const ticking = false;
  const eleHeader = null;
  const classes = {
    pinned: 'header-pin',
    unpinned: 'header-unpin'
  }

  const onScroll = () => {
    currentScrollY = window.pageYOffset;
    if (currentScrollY < lastKnownScollY) {
      pin()
    } else if (currentScrollY > lastKnownScollY) {
      unpin()
    }
    lastKnownScollY = currentScrollY;
  }

  const pin = () => {
    if (eleHeader.classList.contains(classes.unpinned)) {
      eleHeader.classList.remove(classes.unpinned);
      eleHeader.classList.add(classes.pinned);
    }
  }

  const unpin = () => {
    if (
      eleHeader.classList.contains(classes.pinned) ||
      !eleHeader.classList.contains(classes.unpinned)
    ) {
      eleHeader.classList.remove(classes.pinned);
      eleHeader.classList.add(classes.unpinned);
    }
  }
  Window.onload = () => {
    eleHeader = document.getElementById('banner-info');
    document.addEventListener('scroll', onScroll, false)
  }
}

export default scrolling;
