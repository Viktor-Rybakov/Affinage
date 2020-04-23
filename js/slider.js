let slider = document.querySelector('.js-slider');
let photoList = document.querySelectorAll('.js-slider__item');
let title = document.querySelector('.js-main__title');
let photoFront;
let photoFrontId;
let photoBack;
let photoBackId;
let photoNext;
let photoNextId;
let photoPrev;
let photoPrevId;

for (let i = 0; i < photoList.length; ++i) {
    
  if ( photoList[i].classList.contains('slider__item_front') || photoList[i].classList.contains('slider__item_back')) {
    photoList[i].setAttribute('aria-hidden', false);
  } else {
    photoList[i].setAttribute('aria-hidden', true);
  }
}

slider.onclick = function(event) {

  if (photoList.length == 2) {
    photoFront = document.querySelector('.slider__item_front');
    photoBack = document.querySelector('.slider__item_back');

    if ( event.target.closest('.js-slider__button_next') || event.target.closest('.js-slider__button_prev') ) {
      photoBack.classList.add('slider__item_animate_out');
      photoFront.classList.add('slider__item_animate_out');
      title.classList.add('main__title_shadow');

      setTimeout (function(){
        photoBack.classList.remove('slider__item_animate_out');
        photoBack.classList.remove('slider__item_back');
        photoBack.classList.add('slider__item_front');
        photoBack.classList.add('slider__item_animate_in');
        
        photoFront.classList.remove('slider__item_animate_out');
        photoFront.classList.remove('slider__item_front');
        photoFront.classList.add('slider__item_back');
        photoFront.classList.add('slider__item_animate_in');
      }, 950);

      setTimeout (function(){
        photoBack.classList.remove('slider__item_animate_in');
        photoFront.classList.remove('slider__item_animate_in');
        title.classList.remove('main__title_shadow');
      }, 2000);
    }
  }

  if (photoList.length > 2) {
    for (let i = 0; i < photoList.length; ++i) {
    
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
      if ( photoFrontId != 0 ) {
        photoNextId = photoFrontId - 1;
      } else {
        photoNextId = photoList.length - 1;
      }

      photoNext = photoList[photoNextId];

      photoBack.classList.add('slider__item_animate_out');
      photoFront.classList.add('slider__item_animate_out');
      title.classList.add('main__title_shadow');

      setTimeout (function(){
        photoBack.classList.remove('slider__item_animate_out');
        photoBack.classList.remove('slider__item_back');
        photoBack.classList.add('slider__item_front');
        photoBack.classList.add('slider__item_animate_in');
        photoBack.setAttribute('aria-hidden', false);
        
        photoFront.classList.remove('slider__item_animate_out');
        photoFront.classList.remove('slider__item_front');
        photoFront.classList.add('slider__item_disabled');
        photoFront.setAttribute('aria-hidden', true);

        photoNext.classList.remove('slider__item_disabled');
        photoNext.classList.add('slider__item_back');
        photoNext.classList.add('slider__item_animate_in');
        photoNext.setAttribute('aria-hidden', false);
      }, 950);

      setTimeout (function(){
        photoNext.classList.remove('slider__item_animate_in');
        photoBack.classList.remove('slider__item_animate_in');
        title.classList.remove('main__title_shadow');
      }, 2000);
    }
  
    if ( event.target.closest('.js-slider__button_prev')) {
      if ( photoBackId != photoList.length - 1) {
        photoPrevId = photoBackId + 1;
      } else {
        photoPrevId = 0;
      }

      photoPrev = photoList[photoPrevId];

      photoBack.classList.add('slider__item_animate_out');
      photoFront.classList.add('slider__item_animate_out');
      title.classList.add('main__title_shadow');

      setTimeout (function(){
        photoBack.classList.remove('slider__item_animate_out');
        photoBack.classList.remove('slider__item_back');
        photoBack.classList.add('slider__item_disabled');
        photoBack.setAttribute('aria-hidden', true);
        
        photoFront.classList.remove('slider__item_animate_out');
        photoFront.classList.remove('slider__item_front');
        photoFront.classList.add('slider__item_back');
        photoFront.classList.add('slider__item_animate_in');
        photoFront.setAttribute('aria-hidden', false);

        photoPrev.classList.remove('slider__item_disabled');
        photoPrev.classList.add('slider__item_front');
        photoPrev.classList.add('slider__item_animate_in');
        photoPrev.setAttribute('aria-hidden', false);
      }, 950);

      setTimeout (function(){
        photoPrev.classList.remove('slider__item_animate_in');
        photoFront.classList.remove('slider__item_animate_in');
        title.classList.remove('main__title_shadow');
      }, 2000);
    }
  }
}