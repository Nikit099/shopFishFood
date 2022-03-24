import React from 'react'

function Slider({categories, onClick, activItem}) {

    // const [arr, setArr] = React.useState([])
  
   
    
    return (
        <div>
             <div className='Chose'>
                 {categories.map((i, index) => {
                     return(
                         <p className= {activItem === index && 'choseLine'} onClick={() => onClick(index)} key={i + index}>{i}</p>
                     )
                 })}
        
     </div>
     <div className='Elem3'>
         <button className='left'><img className='nextleft' src="img/next.svg" alt="l" /></button>
         <button className='right'><img  src="img/next.svg" alt="r" /></button>
        <div className='slide'>
                

       
        </div>
        
     
     </div>
   
        </div>
    )
}

export default Slider
