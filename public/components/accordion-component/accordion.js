const template = document.createElement('template')
//ایجاد یک قالب
template.innerHTML = `
  <!--       وارد کردن استایل های کامپوننت-->
  <link rel="stylesheet" href="/components/accordion-component/accordion.css">
<!--  وارد کردن استایل های عمومی -->  
  <link rel="stylesheet" href="/main.css">
  
    <!--    قسمت محتوای اصلی کامپوننت-->
    <div class="accordion-cart shadow">
            <!--            قسمت هدر هر آکاردیون -->
            <div class="header-accordion">
                <!--                قسمت عنوان هر تب -->
                <div class="title"></div>
                <!--                قسمت آیکون هر تب -->
                <div class="icon">
                  <img class="img icon" src="" alt="">
                </div>
            </div>
            <!--            قسمت محتوای هر آکاردیون -->
            <div class="content-accordion hidden-accordion">
                 <p class="content"></p>
             </div>
    </div>
`

//ایجاد یک کلاس با نام کامپوننت و ارث بری از HTMLElement
class accordion extends HTMLElement {
    constructor() {
        //صدا زدن سازنده HTMLElement
        super();
        //باز کردن دام برای اتصال
        this.attachShadow({mode: 'open'})
        //اضافه کردن کامپوننت به DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    //متد ها
    toggle() {
        // تعریف متغیر ها
        let header = this.shadowRoot.querySelector('.header-accordion');
        let content = this.shadowRoot.querySelector('.content-accordion');
        let img = this.shadowRoot.querySelector('.img')


        // هنگامی که روی هدر آکوردیون کلیک شود متد زیر اجرا می شود
        header.addEventListener('click', function () {
            content.classList.toggle('hidden-accordion')
            if (!content.classList.contains('hidden-accordion')) {
                header.classList.add('open-accordion')
                img.src = '../../image/top-flash.svg'
            } else {
                header.classList.remove('open-accordion')
                img.src = '../../image/bottom-flash.svg'
            }
        })
    }

    //چرخه حیات کامپوننت
    connectedCallback() {
        this.shadowRoot.querySelector('.img').src = '../../image/bottom-flash.svg'
        // هنگامی که چرخه حیات متصل شد متد را اجرا میکنیم
        this.toggle();
        // مقدار دهی عناصر با props  های دریافتی
        this.shadowRoot.querySelector('.title').innerText = this.getAttribute('title');
        this.shadowRoot.querySelector('.content').innerText = this.getAttribute('content')
    }

    //دریافت مقدار Attributes یا همان props ها
    static observedAttributes() {
        return ['title', 'content', 'headerColor']
    }
}

export {accordion}