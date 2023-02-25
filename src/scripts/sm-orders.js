!(function tooltipSmInit() {
   const tooltipsList = document.querySelectorAll('.sm-start-action-tooltip-block')
   if (tooltipsList) {
      tooltipsList.forEach((el) => {
         const trigEl = el.querySelector('.sm-start-action-tooltip-button')
         tippy(trigEl, {
            content: el.querySelector('.sm-start-action-tooltip-content').innerHTML,
            allowHTML: true,
            trigger: 'click',
            placement: 'bottom',
            arrow: true,
            offset: () => {
               if (window.matchMedia('(min-width: 1200px)').matches && document.dir === 'rtl') return [196, 17]
               if (window.matchMedia('(max-width: 1200px)').matches && document.dir === 'rtl') return [130, 17]
               if (window.matchMedia('(min-width: 1200px)').matches && document.dir === 'ltr') return [-196, 17]
               if (window.matchMedia('(max-width: 1200px)').matches && document.dir === 'ltr') return [-130, 17]
            },
         })
      })
   }
})()
!(function cardSmInit() {
   const smCardsList = document.querySelectorAll('.sm-card')
   if (smCardsList) {
      smCardsList.forEach((card) => {
         card.addEventListener('click', (el) => {
            if (el.target.classList.contains('sm-start-action-button-cancel')) {
               card.classList.add('_reason')
            }
            if (el.target.classList.contains('sm-cancellation-reason-next-btn')) {
               card.classList.remove('_reason')
               card.classList.add('_fee')
            }
            if (el.target.classList.contains('sm-cancellation-reason-back-btn')) {
               card.classList.remove('_reason')
            }
            if (el.target.classList.contains('sm-cancellation-fee-back-btn')) {
               card.classList.remove('_fee')
               card.classList.add('_reason')
            }
         })
      })
   }
})()
!(function simplebarSmConfig() {
   if (document.querySelectorAll('[data-simplebar]').length) {
      document.querySelectorAll('[data-simplebar]').forEach((scrollBlock) => {
         new SimpleBar(scrollBlock, {
            autoHide: false,
         })
      })
   }
})()
