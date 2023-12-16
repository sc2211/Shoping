

import React from 'react'
import './Offer.css'
import exclusiveImage from '../Assets/exclusive.jpg'
const Offer = () => {
  return (
    <div className='offer'>
        <div className='offer-left'>
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>Only On Best Seller Product</p>
          <button>Check Now</button>
        </div>

        <div className='offer-right'>
         <img src={exclusiveImage} alt='/' width="150px"></img>
        </div>
      
    </div>
  )
}

export default Offer
