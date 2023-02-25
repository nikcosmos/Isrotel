import Swiper, { Navigation, Scrollbar, Pagination, EffectFade, Thumbs } from 'swiper'

$(() => {
   //EventsTabsNav========================================================================================================================================================
   $('.sm-events-tabs-content').on('click', function (el) {
      const t = $(el.target)
      if (t.hasClass('sm-events-tabs-head-item') && !t.hasClass('_active')) {
         $(this).find('.sm-events-tabs-head-item').removeClass('_active')
         const $val = t.addClass('_active').data('headTab')
         $(this).find('.sm-events-tabs-body-item._active').removeClass('_active')
         $(this).find(`[data-body-tab= ${$val}]`).addClass('_active').addClass('_blur')
         setTimeout(() => {
            $(this).find(`[data-body-tab= ${$val}]`).removeClass('_blur')
         }, 300)
      }
   })
   //EventsShowMore========================================================================================================================================================
   $('.events-show-more').on('click', '.events-show-more-button', function () {
      $(this).toggleClass('_active').prev('.events-show-more-body').slideToggle('fast')
   })
   $('.sm-events-members-image-side').on('click', function () {
      $(this).closest('.sm-events-members-card').addClass('_card-open')
   })
   $('.sm-events-members-descr-back').on('click', function () {
      $(this).closest('.sm-events-members-card').removeClass('_card-open')
   })
   //Members========================================================================================================================================================
   new Swiper('.sm-events-members-slider', {
      modules: [Navigation, Scrollbar, Pagination],
      speed: 800,
      spaceBetween: 24,
      watchOverflow: true,
      observeParents: true,
      observeSlideChildren: true,
      observer: true,
      navigation: {
         nextEl: '.sm-events-members-next-btn',
      },
      breakpoints: {
         0: {
            slidesPerView: 1.36,
            spaceBetween: 14,
         },
         575: {
            slidesPerView: 2,
         },
         776: {
            slidesPerView: 3,
         },
         1500: {
            slidesPerView: 4,
         },
      },
      pagination: {
         el: '.sm-events-members-fraction',
         type: 'fraction',
         renderFraction: (current, total) => {
            return `
            <span class='${current}'>0</span>
            <span class='${total}'>0</span>
            `
         },
         formatFractionCurrent: (val) => '0' + val,
         formatFractionTotal: (val) => '0' + val,
      },
      scrollbar: {
         el: '.sm-events-members-progress-bar',
      },
   })
   //Gallery========================================================================================================================================================
   $('.sm-events-gallery').length &&
      new Swiper('.sm-events-gallery-full-screen-slider', {
         modules: [Navigation, EffectFade, Thumbs],
         speed: 800,
         spaceBetween: 0,
         watchOverflow: true,
         observeParents: true,
         observeSlideChildren: true,
         observer: true,
         grabCursor: true,
         slidesPerView: 1,
         centeredSlides: true,
         effect: 'fade',
         autoHeight: true,
         fadeEffect: {
            crossFade: true,
         },
         navigation: {
            nextEl: '.sm-events-gallery-full-screen-slider-next',
            prevEl: '.sm-events-gallery-full-screen-slider-prev',
         },
         thumbs: {
            swiper: {
               el: '.sm-events-gallery-prevue-slider',
               modules: [Navigation],
               speed: 800,
               spaceBetween: 16,
               watchOverflow: true,
               observeParents: true,
               observeSlideChildren: true,
               observer: true,
               navigation: {
                  nextEl: '.sm-events-gallery-prevue-slider-next',
                  prevEl: '.sm-events-gallery-prevue-slider-prev',
               },
               breakpoints: {
                  0: {
                     slidesPerView: 1,
                     spaceBetween: 14,
                  },
                  575: {
                     slidesPerView: selectAmoutnSlide()[1],
                  },
                  776: {
                     slidesPerView: selectAmoutnSlide()[0],
                  },
               },
            },
         },
      })
   function selectAmoutnSlide() {
      if ($('.sm-events-gallery._one').length) return [1, 1]
      if ($('.sm-events-gallery._two').length) return [2, 2]
      if ($('.sm-events-gallery._three').length) return [3, 2]
   }
   $('.sm-events-gallery-prevue-slide').on('click', function () {
      $('.sm-events-gallery-full-screen-wrap').addClass('_gallery-open')
   })
   $('.sm-events-gallery-full-screen-wrap').on('click', function (el) {
      const $el = $(el.target)
      if ($el.hasClass('sm-events-gallery-full-screen') || $el.hasClass('sm-events-gallery-full-screen-slider-close')) {
         $('.sm-events-gallery-full-screen-wrap').removeClass('_gallery-open')
      }
   })
   //EventsSchedule========================================================================================================================================================
   $('.sm-events-schedule-tabs-head-slider').length &&
      new Swiper('.sm-events-schedule-tabs-head-slider', {
         modules: [Navigation],
         speed: 800,

         grabCursor: true,
         slidesPerView: 'auto',
         freeMode: true,
         navigation: {
            nextEl: '.sm-events-schedule-tabs-head-nav-next',
            prevEl: '.sm-events-schedule-tabs-head-nav-prev',
         },
         breakpoints: {
            0: {
               spaceBetween: 16,
            },
            1200: {
               spaceBetween: 24,
            },
         },
      })
   $('.sm-schedule-show-more-head').on('click', function (e) {
      e.preventDefault()
      $(this).closest('.sm-schedule-show-more').find('.sm-schedule-show-more-body').css('display', 'block')
   })
   $('.sm-schedule-show-more-body-btn').on('click', function () {
      $(this).closest('.sm-schedule-show-more-body').css('display', 'none')
   })
   $('.sm-events-schedule-tabs-content').on('click', function (el) {
      const t = $(el.target)
      if (t.hasClass('sm-events-schedule-tabs-head-item') && !t.hasClass('_active')) {
         $(this).find('.sm-events-schedule-tabs-head-item').removeClass('_active')
         const $val = t.addClass('_active').data('headTab')
         $(this).find('.sm-events-schedule-tabs-body-item._active').removeClass('_active')
         $(this).find(`[data-body-tab= ${$val}]`).addClass('_active').addClass('_blur')
         setTimeout(() => {
            $(this).find(`[data-body-tab= ${$val}]`).removeClass('_blur')
         }, 300)
      }
   })
   //ActionsTabs========================================================================================================================================================
   $('.sm-events-table-actions-tabs').on('click', function (el) {
      const t = $(el.target)
      if (t.hasClass('sm-events-table-actions-head-item') && !t.hasClass('_active')) {
         $(this).find('.sm-events-table-actions-head-item').removeClass('_active')
         const $val = t.addClass('_active').data('headTab')
         $(this).find('.sm-events-table-actions-tabs-body-block._active').removeClass('_active')
         $(this).find(`[data-body-tab= ${$val}]`).addClass('_active').addClass('_blur')
         setTimeout(() => {
            $(this).find(`[data-body-tab= ${$val}]`).removeClass('_blur')
         }, 300)
      }
   })
   //ActionSlider========================================================================================================================================================
   $('.sm-events-table-actions-tabs-head-slider').length &&
      new Swiper('.sm-events-table-actions-tabs-head-slider', {
         speed: 800,
         slidesPerView: 'auto',
         freeMode: true,
         spaceBetween: 16,
      })
})
