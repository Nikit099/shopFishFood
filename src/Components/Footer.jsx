import React from 'react'

function Footer(props) {
    return (
        <div className='footer'>
            <h1>Остались вопросы? Задавайте!</h1>
            <input className='i1' type="text" placeholder='Ваше имя' />
            <input type="text" className='i2' placeholder='Введите E-mail' />
            <input type="text" className='i3' placeholder='Введите телефон' />
            <select className="lsd" id="">
                <option value="how">Как купить?</option>
                <option value="Else">Как привезут товар?</option>
                <option value="sale">Как получить скидку?</option>
            </select>
            <div className='messege'>
            <p>Введите сообщение</p>
            <input type="text" />
            <button><img src="img/messege.svg" alt="" /></button>
            <img className='riba' src="img/riba.svg" alt="dsfs" />
            </div>
           <div className='end'>
               {/* <img className='white' src="img/Iconka.svg" alt="" /> */}
               <p className='Loggo'>SeaFood</p>
               <p className='Data'>{new Date().getFullYear()} Все права защищены</p>
                <img src="img/up.svg" className='up' alt="fsd" />
                <img className='telephone2' src="img/phone-call1.svg" alt="tel" />
                <h2 className='nomber2'>{props.data}</h2>
           </div>

        </div>
    )
}

export default Footer
