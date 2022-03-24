import React from 'react'

function Strong(props) {
    
    return (
        <div >
       
        <img src={props.link1} alt="kvadr" className='link1'/>
        <img src={props.link2} alt="icon" className='link2'/>
        <h3 className='nik'>{props.nik}</h3>
        <p className='text'>{props.text}</p>
         
        
       
      </div>
    )
}

export default Strong
