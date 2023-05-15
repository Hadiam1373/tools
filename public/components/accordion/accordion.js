// تعریف متغیر ها
let header = document.querySelector('.header-accordion');
let content = document.querySelector('.content-accordion');

// هنگامی که روی هدر آکوردیون کلیک شود متد زیر اجرا می شود
header.addEventListener('click', function () {
   content.classList.toggle('hidden')
})