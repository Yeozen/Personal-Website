window.addEventListener('resize', adjustCarouselCaptions);
adjustCarouselCaptions(); // Call the function initially to set the classes correctly

function adjustCarouselCaptions() {
  const carouselCaptions = document.querySelectorAll('.carousel-caption');
  const isMobile = window.innerWidth <= 768;

  carouselCaptions.forEach(caption => {
    if (isMobile) {
      caption.classList.remove('d-none', 'd-md-block');
    } else {
      caption.classList.add('d-none', 'd-md-block');
    }
  });
}
