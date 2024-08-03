const send3 = (id) => {
    let form =`
        <div class="pagecrm_order-item">
            <div class="pagecrm_price-block">
              <span>Продление лицензий amoCRM и Битрикс24</span>
              <span class="pagecrm_price">от 10 000 ₽</span>
            </div>
            <ul>
              <li><span style="top:-3.5vw">Возможность продления лицензий со скидкой от официальных цен</span></li>
            </ul>
            <button onclick="send('${id}')" class="pagecrm_mail-sand-submit">Заказать<img src="image/strelka.svg"></button>
          </div>`
        if(id == 'crm1') {
          form = `
            <div class="pagecrm_order-item">
            <div class="pagecrm_price-block">
              <span>Подключение системы CRM</span>
              <span class="pagecrm_price">от 10 000 ₽</span>
            </div>
            <ul>
              <li><span>Покупка любого тарифа со скидкой</span></li>
            </ul>
            <button onclick="send('crm1')" class="pagecrm_mail-sand-submit">Заказать<img src="image/strelka.svg"></button>
          </div>`
        }
        else if(id == 'crm2') {
          form = `
          <div class="pagecrm_order-item" >
            <div class="pagecrm_price-block">
              <span>Подключение системы CRM + настройка</span>
              <span class="pagecrm_price">от 15 000 ₽</span>
            </div>
            <ul>
              <li><span>Покупка любого тарифа со скидкой</span></li>
              <li><span>Индивидуальная настройка системы</span></li>
              </ul>
            <button onclick="send('crm2')" class="pagecrm_mail-sand-submit">Заказать<img src="image/strelka.svg"></button>
          </div>
          `
        }

 document.getElementById(id).innerHTML = form
 
}
const send = (id) =>{
const form =`
<form class="pagecrm_send">
  <label class="pagecrm_send-big-text">Форма для заполнения</label>
  <label class="pagecrm_send-small-text">Оставьте свои контактные данные, и мы свяжемся с Вами в течение 20 минут</label>
  <input type="number" placeholder="Ваш телефон">
  <input type="email" placeholder="@Почта*">
  <button onclick="send2(event, '${id}')" class="pagecrm_btn-alpha3">ОТПРАВИТЬ ЗАЯВКУ</button>
  <div class="pagecrm_conf">
      <label class='pagecrm_checkbox pagecrm_red'>
    <input checked type='checkbox'>
    <span class='pagecrm_indicator'></span>
    <label>Нажимая на кнопку, я соглашаюсь с условиями <br> <a href="#">Политики конфиденциальности</a></label>
  </label>
  </div>
</form>`

 document.getElementById(id).innerHTML = form
}

const send2 = (e, id) => {
    e.preventDefault()
    const form =`
        <div class='pagecrm_end'>
            <img class="pagecrm_x" onclick="send3('${id}')" src='image/x.svg'>
            <img class="pagecrm_check" src='image/Check.webp'>
            <span>Ваша заявка успешно <br>отправлена!</span>
        </div>`

 document.getElementById(id).innerHTML = form
}

const block = document.querySelector(".pagecrm_menu")
const block2 = document.querySelector(".pagecrm_hider")

document.querySelector(".pagecrm_toggle-menu").onclick = () => {
  block.classList.remove("pagecrm_hide")
  block2.classList.remove("pagecrm_hide")
}
document.querySelector(".pagecrm_hider").onclick = () => {
  block.classList.add("pagecrm_hide")
  block2.classList.add("pagecrm_hide")
}



const opensearch = () => {
  document.querySelector(".pagecrm_search-mode").classList.add("pagecrm_show")
}
const closesearch = () => {
  document.querySelector(".pagecrm_search-mode").classList.remove("pagecrm_show")
}

if(window.screen.width > 1199){
  document.getElementById("map").setAttribute("src", "Image/image-3.webp")
}