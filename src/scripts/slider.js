function handleThumbClick(event){
  const index = event.target.getAttribute('data-index');
  if (!index) {
    return;
  }
  const activeSlide = document.querySelector('.slide-active');
  const activeThumb = document.querySelector('.slider-thumb-active');
  const newActiveSlide = document.querySelector(`.slide[data-index="${index}"]`);
  activeSlide.classList.remove('slide-active');
  activeThumb.classList.remove('slider-thumb-active');
  newActiveSlide.classList.add('slide-active');
  setTimeout(() => {
    event.target.classList.add('slider-thumb-active');
  }, 0);
}

function initThumbs() {
  const thumbs = document.getElementById('thumbs');
  thumbs.addEventListener('click', handleThumbClick)
}

export function initSlider() {
  initThumbs();
}
