import React, {useContext, useState} from 'react'
import "./Form.css"
import { Link, useParams } from 'react-router-dom'
import { contextItems } from '../../Items/Datos'
import Swal from 'sweetalert2'



const Cart = () => {
  const all = useContext(contextItems)
 

  console.log(all.length);
  const [contactNumber, setName] = useState("")
  const [title, setProduct] = useState("")
  const [description, setDetails]= useState("")
  const [value, setPrice]= useState("")
  const [img, setImage]= useState("")
  const [currency, setCurrency]= useState("")

  const objets = all.map((items) => items)
  console.log(objets);

  const changeCurrency = (e) => {
    const value =e.target.value;
    console.log(value);
    setCurrency(value)
  }


  const changeName = (e) => {
    const value =e.target.value;
    console.log(value);
    setProduct(value)
  }

  const changeContact = (e) => {
    const value =e.target.value;
    console.log(value);
    setName(value)
  }

  const changeDetails = (e) => {
    const value =e.target.value;
    console.log(value);
    setDetails(value)
  }

  const changePrice = (e) => {
    const value =e.target.value;
    console.log(value);
    setPrice(value)
  }

  const changeImage = (e) => {
    const value =e.target.value;
    console.log(value);
    setImage(value)
  }

  const click = () => {
    Swal.fire({
      title: 'Your cake has been added!💗',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url(https://media.tenor.com/cwSQQcd_CAsAAAAi/kirby-cute.gif)
        left top
        no-repeat
      `
    })

    const newData = {id: all.length, img: img, title : title, description: description, value : value, currency : currency, contactNumber : contactNumber}
    all.push(newData)
    console.log(all);
  }


  return (
   
    
    <form class="form">
       <p class="form-title">Add products</p>
        <div class="input-container">
      <input placeholder="Enter URL" name="img" onChange={changeImage} value={img} type="text"/>

          
        </div>
        <div class="input-container">
          <input placeholder="Enter title" onChange={changeName} value={title} type="text"/>
          
      </div>
      <div class="input-container">
      <input placeholder="Enter currency" name="img" onChange={changeCurrency} value={currency} type="text"/>

          
        </div>
      <div class="input-container">
      <input placeholder="Enter flavors" onChange={changeDetails} value={description} type="text"/>

          
        </div> 
         <div class="input-container">
          <input placeholder="Enter price" onChange={changePrice} value={value} type="text"/>
          
          
{/* Botoooooooooooooon */}
      </div>
      <div class="input-container">
      <input placeholder="Enter contact" onChange={changeContact} value={contactNumber} type="text"/>

         
        </div>
        
      
         <button class="submit"  onClick={click} type="button">
        ADD
      </button>
    
      <Link to={`/`}>
      <button class="button3"  role="button">Back</button>

      </Link>
     
   </form>

    

   
  )
}

export default Cart