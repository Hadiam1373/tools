const template = document.createElement('template')
//ایجاد یک قالب
template.innerHTML = `
  <!--       وارد کردن استایل های کامپوننت-->
  <link rel="stylesheet" href="/components/...">
  
   <div>
<!--     قالب کامپوننت  -->

   </div>
`

//ایجاد یک کلاس با نام کامپوننت و ارث بری از HTMLElement
class Sample extends HTMLElement {
    constructor() {
        //صدا زدن سازنده HTMLElement
        super();
        //باز کردن دام برای اتصال
        this.attachShadow({mode: 'open'})
        //اضافه کردن کامپوننت به DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    //متد ها
    method() {

    }

    //چرخه حیات کامپوننت
    connectedCallback() {
    }

    //دریافت مقدار Attributes یا همان props ها
    static observedAttributes() {
        return ['props']
    }
}

export {Sample}