import React from 'react'
import Context from './Why';
import {  Link } from 'react-router-dom'


function sum (n){
    return n 
  }

  
function Test() {
    const {count, setCount} = React.useContext(Context);
  const [isDark, setIsDark] = React.useState(false)
  let obj = React.useRef(null)
  let Tot =  React.useMemo(() => sum(count), [count])

    return (
        <div style = {{backgroundColor: isDark ? 'black' : 'white'}}>
            <button style={{backgroundColor: isDark && 'gray', color: isDark && 'white' }} onClick={() => setCount(count + 1)}>+</button>
    <button  style={{backgroundColor: isDark && 'gray', color: isDark && 'white' }} onClick={() => setCount(count - 1)}>-</button>
    <button  style={{backgroundColor: isDark && 'gray', color: isDark && 'white'}} onClick={() => setIsDark(!isDark)}>{isDark ? 'Установи белую' : 'Установи черную'}</button>
    <div style={{color: isDark && 'white', marginLeft: '1000px', fontSize: '30px'}}>{Tot}</div>
    <input type="text" ref={obj} />
    <button onClick={() => { obj.current.focus()}}>focus</button>
      <Link  className='liner'  to = "/" style={{color: isDark && 'white', marginLeft: '1000px', fontSize: '30px'}}>Главная</Link>
       
        </div>
    )
}

export default Test
