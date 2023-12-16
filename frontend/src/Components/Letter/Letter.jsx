import React from 'react'
import './Letter.css'
const Letter = () => {
  return (
    <div className='letter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Emai-id'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default Letter