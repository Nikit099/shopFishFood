import React from 'react'
import {  Link } from 'react-router-dom'


function Header(props) {
    return (
        <div  >
      <img  className='blur' src="img/blur.svg" alt="blur" />

      <div className='logo'>    <img className='icon' src="img/Icon.svg" alt="logo" />
      <h2 className='SeaFood'>SeaFood</h2>
    </div>
    <div className='ul'>
      <Link id='h4' className='liner' to = "/">Главная</Link>
      <Link id='h4'  to = "/Test">Тест</Link>
      <Link id='h4'  to = "/">О сервисе</Link>
      <Link id='h4'  to = "/">Контакты</Link>
      
    </div>
    
    <div className='phone'>
      <img className='telephone' src="img/phone-call1.svg" alt="tel" />
      <h2 className='nomber'>+7 992 198-63-72</h2>
    </div>
      <div className='cart'>
        <img className='ellips' src="img/Ellipse1.svg" alt="ellips" />
        <img className='shopping' src="img/shopping-cart2.svg" alt="cart" />
        <h2 className='scale'>1,324 $</h2>
        <img className='vector' src="img/Vector1.svg" alt="vec" />
      </div>
      
    </div>
    )
}

export default Header
