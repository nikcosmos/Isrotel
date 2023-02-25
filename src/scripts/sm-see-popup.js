!(function smSeePopup() {
   const seePopup = document.querySelector('.sm-see-order-dynamic-block')
   seePopup &&
      seePopup.addEventListener('click', (el) => {
         if (el.target.classList.contains('sm-data-send-submit-btn')) {
            seePopup.querySelector('.sm-see-order-first-step').style.display = 'none'
            seePopup.querySelector('.sm-see-order-second-step').style.display = 'block'
            seePopup.querySelector('.sm-enter-code-input:first-child').focus()
         }
      })
})()
!(function smEnterCode() {
   const smEnterCodeList = document.querySelectorAll('.sm-enter-code-input')
   smEnterCodeList &&
      smEnterCodeList.forEach((input) => {
         input.addEventListener('input', (el) => {
            const _t = el.target
            _t.value = _t.value.replace(/\D/, '')
            if (_t.value !== '' && _t.nextElementSibling) {
               _t.nextElementSibling.focus()
            }
            // if (_t.value === '' && _t.previousElementSibling) {
            //    _t.previousElementSibling.focus()
            // }
         })
      })
})()
!(function smDatePickerInit() {
   if (document.getElementById('smSeeDatepicker')) {
      if (document.dir === 'rtl') {
         const datePickSm = $('#smSeeDatepicker').datepicker({
            closeText: 'סגור',
            prevText: 'הקודם',
            nextText: 'הבא',
            currentText: 'היום',
            monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
            monthNamesShort: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יוני', 'יולי', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
            dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
            dayNamesShort: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
            dayNamesMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
            weekHeader: 'Wk',
            dateFormat: 'dd/mm/yy',
            firstDay: 0,
            isRTL: true,
            showMonthAfterYear: false,
            yearSuffix: '',
            // onSelect: (data) => {
            //    $('.sm-data-send-input').val(data)
            // },
         })
         datePickSm.hide()
         $('.sm-see-datepicker-cancel-btn').on('click', () => {
            datePickSm.hide()
         })
         $('.sm-see-datepicker-done-btn').on('click', () => {
            $('.sm-data-send-input').val(datePickSm[0].value)
            datePickSm.hide()
         })
         $('#smDateInput').on('click', () => {
            datePickSm.show()
         })
      } else {
         const datePickSm = $('#smSeeDatepicker').datepicker({
            weekHeader: 'Wk',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: '',
            // onSelect: (data) => {
            //    $('.sm-data-send-input').val(data)
            // },
         })
         datePickSm.hide()
         $('.sm-see-datepicker-cancel-btn').on('click', () => {
            datePickSm.hide()
         })
         $('.sm-see-datepicker-done-btn').on('click', () => {
            $('.sm-data-send-input').val(datePickSm[0].value)
            datePickSm.hide()
         })
         $('#smDateInput').on('click', () => {
            datePickSm.show()
         })
      }
   }
})()
