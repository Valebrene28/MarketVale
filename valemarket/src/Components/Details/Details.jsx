
import React, { useContext } from 'react'
import { contextItems } from '../../Items/Datos'
import { Link, useParams } from 'react-router-dom'
import "./Details.css";


const Details = () => {
  const all = useContext(contextItems)
  const { id } = useParams()
 
  

  


  return ( 
    <>
    <div className='ALL'>
       <div class="card1">
  <div class="card__image"> <img src={all[id].img} className="fotos" srcset="" /></div>
  
</div>
<div>
<div class="card2">
  
  <div class="card__content">
  <p id="text-body">{all[id].title}</p>
    <p id="text-body1">Available flavors:</p><p class="text-price3">{all[id].description}</p>
    <br/>
    <span class="text-price">
        Price: {all[id].currency} {all[id].value}
      </span>
      <br/>
      <span class="text-price">
       Contact: {all[id].contactNumber}
       
      </span>
  </div>
</div>
</div>
</div>

<Link to={`/`}>
      <button class="button3"  role="button">Back</button>

      </Link>

    
</>
  )
}
{/* <div class="card1">
      <div class="card-img1">
      <img src={all[id].img} className="fotos" srcset="" />
      </div>
      <br />
      <br />
      <br />

      <div class="card-info">
      <p id="text-body">{all[id].title}</p>
      <span class="text-price">
       Contact: {all[id].contactNumber}
       
      </span>
      <span class="text-price">
        <br />
       {all[id].description}
       
      </span>
        <br />
        <span class="text-price">
        Price: {all[id].currency} {all[id].value}
       
      </span>
      <br />
      <Link to={`/`}>
      <button class="button1" role="button">Back</button>

      </Link>
      </div>
      
  </div> */}
  //  <span>
  //       {all[id].title}
  //       </span>
  //       <span>
  //       {all[id].description}
  //       </span>
  //       <span>
  //       {all[id].contactNumber}
  //       </span>

  //       <span>
  //         <img src={all[id].img} alt="" srcset="" />
  //       </span>

export default Details