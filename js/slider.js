'use strict'

let slider = document.querySelector('.js-slider');
let photoList = document.querySelectorAll('.js-slider__item');
let photoNumber = photoList.length;
let title = document.querySelector('.js-main__title');
let photoFront;
let photoFrontId;
let photoBack;
let photoBackId;
let photoNext;
let photoNextId;
let photoPrev;
let photoPrevId;

for (let i = 0; i < photoNumber; ++i) {
    
  if ( photoList[i].classList.contains('slider__item_front') || photoList[i].classList.contains('slider__item_back')) {
    photoList[i].setAttribute('aria-hidden', false);
  } else {
    photoList[i].setAttribute('aria-hidden', true);
  }
}

slider.onclick = change;

function change (event) {

  switch (photoNumber) {
    case 2:
      photoFront = document.querySelector('.slider__item_front');
      photoBack = document.querySelector('.slider__item_back');
    
      if ( event.target.closest('.js-slider__button_next') ) {
        changeSlides(fadeOutTwoSlidesNext, changeTwoSlidesNext, removeAnimationTwoSlidesNext);
      }
    
      if ( event.target.closest('.js-slider__button_prev') ) {
        changeSlides(fadeOutTwoSlidesPrev, changeTwoSlidesPrev, removeAnimationTwoSlidesPrev);
      }
      break;

    default:
      for (let i = 0; i < photoNumber; ++i) {
      
        if ( photoList[i].classList.contains('slider__item_front') ) {
          photoFront = photoList[i];
          photoFrontId = i;
        }
      
        if ( photoList[i].classList.contains('slider__item_back') ) {
          photoBack = photoList[i];
          photoBackId = i;
        }
      }
    
      if ( event.target.closest('.js-slider__button_next') ) {
        photoNextId = (photoFrontId != 0) ? photoFrontId - 1 : photoNumber - 1;
        photoNext = photoList[photoNextId];
        changeSlides(fadeOutThreeSlidesNext, changeThreeSlidesNext, removeAnimationThreeSlidesNext);
      }
    
      if ( event.target.closest('.js-slider__button_prev')) {
        photoPrevId = (photoBackId != (photoNumber - 1)) ? photoBackId + 1 : 0;
        photoPrev = photoList[photoPrevId];
        changeSlides(fadeOutThreeSlidesPrev, changeThreeSlidesPrev, removeAnimationThreeSlidesPrev);
      }
  }
}

function changeSlides (fadeOut, change, remove) {
  slider.onclick = null;
  fadeOut();
  setTimeout (change, 950);
  setTimeout (remove, 2100);
}

function fadeOutTwoSlidesNext() {
  photoBack.classList.add('slider__item_animate_fadeout');
  photoFront.classList.add('slider__item_animate_right-out');
  title.classList.add('main__title_shadow');
}

function changeTwoSlidesNext() {
  photoBack.classList.remove('slider__item_animate_fadeout');
  photoBack.classList.remove('slider__item_back');
  photoBack.classList.add('slider__item_front');
  photoBack.classList.add('slider__item_animate_left-in');
  
  photoFront.classList.remove('slider__item_animate_right-out');
  photoFront.classList.remove('slider__item_front');
  photoFront.classList.add('slider__item_back');
  photoFront.classList.add('slider__item_animate_fadein');
}

function removeAnimationTwoSlidesNext() {
  photoBack.classList.remove('slider__item_animate_left-in');
  photoFront.classList.remove('slider__item_animate_fadein');
  title.classList.remove('main__title_shadow');

  slider.onclick = change;
}

function fadeOutTwoSlidesPrev() {
  photoBack.classList.add('slider__item_animate_fadeout');
  photoFront.classList.add('slider__item_animate_left-out');
  title.classList.add('main__title_shadow');
}

function changeTwoSlidesPrev() {
  photoBack.classList.remove('slider__item_animate_fadeout');
  photoBack.classList.remove('slider__item_back');
  photoBack.classList.add('slider__item_front');
  photoBack.classList.add('slider__item_animate_right-in');
  
  photoFront.classList.remove('slider__item_animate_left-out');
  photoFront.classList.remove('slider__item_front');
  photoFront.classList.add('slider__item_back');
  photoFront.classList.add('slider__item_animate_fadein');
}

function removeAnimationTwoSlidesPrev() {
  photoBack.classList.remove('slider__item_animate_right-in');
  photoFront.classList.remove('slider__item_animate_fadein');
  title.classList.remove('main__title_shadow');

  slider.onclick = change;
}

function fadeOutThreeSlidesNext() {
  photoBack.classList.add('slider__item_animate_fadeout');
  photoFront.classList.add('slider__item_animate_right-out');
  title.classList.add('main__title_shadow');
}

function changeThreeSlidesNext() {
  photoBack.classList.remove('slider__item_animate_fadeout');
  photoBack.classList.remove('slider__item_back');
  photoBack.classList.add('slider__item_front');
  photoBack.classList.add('slider__item_animate_left-in');
  photoBack.setAttribute('aria-hidden', false);
  
  photoFront.classList.remove('slider__item_animate_right-out');
  photoFront.classList.remove('slider__item_front');
  photoFront.classList.add('slider__item_disabled');
  photoFront.setAttribute('aria-hidden', true);

  photoNext.classList.remove('slider__item_disabled');
  photoNext.classList.add('slider__item_back');
  photoNext.classList.add('slider__item_animate_fadein');
  photoNext.setAttribute('aria-hidden', false);
}

function removeAnimationThreeSlidesNext() {
  photoNext.classList.remove('slider__item_animate_fadein');
  photoBack.classList.remove('slider__item_animate_left-in');
  title.classList.remove('main__title_shadow');

  slider.onclick = change;
}

function fadeOutThreeSlidesPrev() {
  photoBack.classList.add('slider__item_animate_fadeout');
  photoFront.classList.add('slider__item_animate_left-out');
  title.classList.add('main__title_shadow');
}

function changeThreeSlidesPrev() {
  photoBack.classList.remove('slider__item_animate_fadeout');
  photoBack.classList.remove('slider__item_back');
  photoBack.classList.add('slider__item_disabled');
  photoBack.setAttribute('aria-hidden', true);
  
  photoFront.classList.remove('slider__item_animate_left-out');
  photoFront.classList.remove('slider__item_front');
  photoFront.classList.add('slider__item_back');
  photoFront.classList.add('slider__item_animate_fadein');
  photoFront.setAttribute('aria-hidden', false);

  photoPrev.classList.remove('slider__item_disabled');
  photoPrev.classList.add('slider__item_front');
  photoPrev.classList.add('slider__item_animate_right-in');
  photoPrev.setAttribute('aria-hidden', false);
}

function removeAnimationThreeSlidesPrev() {
  photoPrev.classList.remove('slider__item_animate_right-in');
  photoFront.classList.remove('slider__item_animate_fadein');
  title.classList.remove('main__title_shadow');

  slider.onclick = change;
}