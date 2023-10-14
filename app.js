// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

window.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.switch-btn');
  const video = document.querySelector('.video-container');
  const title = document.querySelector('.title');

  //preloader

  const preloader = document.querySelector('.preloader');

  window.addEventListener('load', function () {
    preloader.classList.add('hide-preloader');
  });

  function loadMobileVideo() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      video.src = '/mobile-bike.mp4';
      title.textContent = 'Mihai Childesco';
    } else {
      video.src = '/fruit-box.mp4';
      title.textContent = 'Video Project';
    }
  }
  // load the appropiate video when the page loads
  loadMobileVideo();
  // Re-check when the window is resized
  window.addEventListener('resize', loadMobileVideo);

  btn.addEventListener('click', function () {
    // check if the button has the class of .slide
    if (!btn.classList.contains('slide')) {
      btn.classList.add('slide');
      video.pause();
    } else {
      btn.classList.remove('slide');
      video.play();
    }
  });
});
