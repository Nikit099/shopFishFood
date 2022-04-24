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
         
       
         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     
        
     
     </div>
   
        </div>
    )
}

export default Slider
