import React, { createContext, useState } from "react";
import Items from "./Items";
import "./Datos.css";
import { Link } from "react-router-dom";

export const contextItems = createContext([
  
  {
    id: 0,
    img: "https://i.pinimg.com/564x/49/fd/4c/49fd4c257ad2bbcf9767f046eaeeddca.jpg",
    title: "My melody",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 8000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 1,
    img: "https://i.pinimg.com/564x/65/fa/fe/65fafe8605316744ad979ac87d17fbad.jpg",
    title: "Cinamoroll",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 9000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/47/5f/97/475f97dbf561139a64483e6b8399c34d.jpg",
    title: "Kuromi",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 11000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/80/0a/5f/800a5f8bee9adc831b267b09daf9983c.jpg",
    title: "Hello Kitty",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 8000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/11/ee/96/11ee9674b5ad657d91012725e2f80eb6.jpg",
    title: "Blueberry",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 8000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/e0/74/a0/e074a0363c977f35b6bf33f19ac245a5.jpg",
    title: "Flower",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 9500,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/564x/21/37/ce/2137ce35057702b96db599c531b0c612.jpg",
    title: "Strawberry",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 15000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 7,
    img: "https://i.pinimg.com/564x/31/17/1a/31171abfc46a90b9de972b3974000e87.jpg",
    title: "Kirby",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 15000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 8,
    img: "https://i.pinimg.com/564x/b2/78/16/b278162cd02756ea5883b4c54345a68b.jpg",
    title: "Little frog",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 15000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 9,
    img: "https://i.pinimg.com/564x/4a/01/89/4a0189bc221867c32ce1a4799bb5f859.jpg",
    title: "Cream",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 15000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 10,
    img: "https://i.pinimg.com/564x/c3/51/8f/c3518f83df85614947c89fdb9242d749.jpg",
    title: "Orange",
    description: "Personalized decoration, available flavors: Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 15000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 11,
    img: "https://i.pinimg.com/564x/85/69/87/85698766da2acb1831e407f8e3776533.jpg",
    title: "Pink",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 15000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 12,
    img: "https://i.pinimg.com/564x/c5/f1/24/c5f124f5dcb0efef866d217d06e886f3.jpg",
    title: "Cow",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 15000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 13,
    img: "https://i.pinimg.com/564x/8d/4b/a1/8d4ba1dc5a3ba822d480e11603c56635.jpg",
    title: "Rainbow",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 15000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 14,
    img: "https://i.pinimg.com/564x/3c/6e/56/3c6e56a2cf9e06a75b1e67d0152367e6.jpg",
    title: "Bear",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 15000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 15,
    img: "https://i.pinimg.com/564x/ef/4c/82/ef4c829a44e533537481e178e4d2e158.jpg",
    title: "WinniePooh",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 15000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
  {
    id: 16,
    img: "https://i.pinimg.com/564x/16/55/3f/16553f9a493b8bc6adbad8420fafdde2.jpg",
    title: "Disney",
    description: "Strawberry, vanilla, chocolate, cheesecake, peach",
    value: 15000,
    currency: "₡",
    contactNumber: "+50688348975",
  },
])

export function Datos ({ children }) {
  const [items, setitems] = useState([
    {
      id: 0,
      img: "https://i.pinimg.com/564x/49/fd/4c/49fd4c257ad2bbcf9767f046eaeeddca.jpg",
      title: "My melody",
      description: "Personalized decoration, available flavors: Strawberry, vanilla, chocolate, cheesecake, peach",
      value: 8000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 1,
      img: "https://i.pinimg.com/564x/65/fa/fe/65fafe8605316744ad979ac87d17fbad.jpg",
      title: "Cinamoroll",
      description: "Personalized decoration, available flavors: Strawberry, vanilla, chocolate, cheesecake, peach",
      value: 9000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/47/5f/97/475f97dbf561139a64483e6b8399c34d.jpg",
      title: "Kuromi",
      description: "Personalized decoration, available flavors: Strawberry, vanilla, chocolate, cheesecake, peach",
      value: 11000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/80/0a/5f/800a5f8bee9adc831b267b09daf9983c.jpg",
      title: "Hello Kitty",
      description: "Personalized decoration, available flavors: Strawberry, vanilla, chocolate, cheesecake, peach",
      value: 8000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/564x/11/ee/96/11ee9674b5ad657d91012725e2f80eb6.jpg",
      title: "Blueberry",
      description: "Personalized decoration, available flavors: Strawberry, vanilla, chocolate, cheesecake, peach",
      value: 8000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/564x/e0/74/a0/e074a0363c977f35b6bf33f19ac245a5.jpg",
      title: "Flower",
      description: "Personalized decoration, available flavors: Strawberry, vanilla, chocolate, cheesecake, peach",
      value: 9500,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/564x/21/37/ce/2137ce35057702b96db599c531b0c612.jpg",
      title: "Strawberry",
      description: "Este producto es el mejor porque...",
      value: 15000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/564x/31/17/1a/31171abfc46a90b9de972b3974000e87.jpg",
      title: "Kirby",
      description: "Este producto es el mejor porque...",
      value: 15000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/564x/b2/78/16/b278162cd02756ea5883b4c54345a68b.jpg",
      title: "Little frog",
      description: "Este producto es el mejor porque...",
      value: 15000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 9,
      img: "https://i.pinimg.com/564x/4a/01/89/4a0189bc221867c32ce1a4799bb5f859.jpg",
      title: "Cream",
      description: "Este producto es el mejor porque...",
      value: 15000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 10,
      img: "https://i.pinimg.com/564x/c3/51/8f/c3518f83df85614947c89fdb9242d749.jpg",
      title: "Orange",
      description: "Este producto es el mejor porque...",
      value: 15000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 11,
      img: "https://i.pinimg.com/564x/85/69/87/85698766da2acb1831e407f8e3776533.jpg",
      title: "Pink",
      description: "Este producto es el mejor porque...",
      value: 15000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 12,
      img: "https://i.pinimg.com/564x/c5/f1/24/c5f124f5dcb0efef866d217d06e886f3.jpg",
      title: "Cow",
      description: "Este producto es el mejor porque...",
      value: 15000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 13,
      img: "https://i.pinimg.com/564x/8d/4b/a1/8d4ba1dc5a3ba822d480e11603c56635.jpg",
      title: "Rainbow",
      description: "Este producto es el mejor porque...",
      value: 15000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 14,
      img: "https://i.pinimg.com/564x/3c/6e/56/3c6e56a2cf9e06a75b1e67d0152367e6.jpg",
      title: "Bear",
      description: "Este producto es el mejor porque...",
      value: 15000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 15,
      img: "https://i.pinimg.com/564x/ef/4c/82/ef4c829a44e533537481e178e4d2e158.jpg",
      title: "WinniePooh",
      description: "Este producto es el mejor porque...",
      value: 15000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
    {
      id: 16,
      img: "https://i.pinimg.com/564x/16/55/3f/16553f9a493b8bc6adbad8420fafdde2.jpg",
      title: "Disney",
      description: "Este producto es el mejor porque...",
      value: 15000,
      currency: "₡",
      contactNumber: "+50688348975",
    },
  ]); return (<contextItems.Provider value={{items, setitems}}>

          {children}

       </contextItems.Provider>)

  // return (
  //   <div className="row">
  //     {items.map((items) => {
        
  //       return (
  //         <>
          
  //           <div class="card">
  //             <div class="card-img">
  //               <Link to={`/Details/${items.id}`}><img className="fotos" src={items.img} /></Link>
  //             </div>
  //             <br />
  //             <br />
  //             <br />

  //             <div class="card-info">
  //               <br />
  //               <p id="text-body">{items.title}</p>
  //             </div>
  //             <div id="card-footer">
  //               <span class="text-price">
  //                 {items.currency}
  //                 {items.value}
  //               </span>
  //               <div class="card-button">
  //                 <svg class="svg-icon" viewBox="0 0 20 20">
  //                   <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
  //                   <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
  //                   <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
  //                 </svg>
  //               </div>
  //             </div>
  //           </div>
  //         </>
  //       );
  //     })}
  //   </div>
  // );
};
// return <Items title={items.title} value={items.value} img={items.img}
