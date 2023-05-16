// فایل استایل های اصلی را وارد میکنیم
import './main.css'

// کامپوننت ها را در main.js وارد میکنیم
import {accordion} from "./public/components/accordion-component/accordion.js";

// در این قسمت کامپوننتی را که وارد کرده ایم به عنوان customElement  با یک نام دلخواه به شی window میشناسانیم
window.customElements.define('accordion-component', accordion)
