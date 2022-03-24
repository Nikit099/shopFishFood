import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Body from './Components/Body';
import Footer from './Components/Footer';
import Galer from './Components/Galer';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Strong from './Components/Strong';


function Main() {
    const info = [{link1: 'img/1Kvadr.svg', link2: 'img/Fish.svg', nik: 'Всё свежее', text: 'Нашим товарам меньше двух дней. Мы не жалеем средств для поддержания свежести продуктов.'}, 
    {link1: 'img/2Kvadr.svg', link2: 'img/SpeedCar.svg', nik: 'Скоростная доставка', text: 'Мы используем скоростные машины. Они оборудованы холодильниками, так как мы заботимся о вас.'}, 
    {link1: 'img/3Kvadr.svg', link2: 'img/Baks.svg', nik: 'Маленькие и стабильные цены', text: 'Мы сохранили как качество, так и цену наших продуктов.'}]
    const [activItem, setActivItem] = useState(2)
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('/api').then(response => {
            
            setData(response.data.messege)
        })
    }, [])

    return (
        <div>

            <div className='mainPage'>
               
    <Header data = {data}/>
    <Body/>
    </div>

    <h2 className='heading'>Почему стоит выбирать нас?</h2>
    <div className='Elem2'>
    {info.map(item => {
            return(
                <Strong 
                key = {item.nik  + item.text}
                link1 = {item.link1}
                link2 = {item.link2}
                nik ={item.nik}
                text = {item.text}
                />
            )
        })}
    </div>
    <Slider 
    onClick = {(index) => setActivItem(index)}
    activItem = {activItem}

    categories = {['Рыбы', 'Членистоногии', 'Все', 'Молюски', 'Головоногии']}/>
       
       <Galer/>
       <Footer data = {data}/>
        </div>
    )
}

export default Main
