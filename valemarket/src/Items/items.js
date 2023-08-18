import React from 'react'

const Items = (props) => {
  return (
    <div>
        <img src={props.img} />
        <h1>{props.title}</h1>
        <h1>{props.value}</h1>
        <h1>{props.description}</h1>
        
    </div>
  )
  
}

       
       


export default Items