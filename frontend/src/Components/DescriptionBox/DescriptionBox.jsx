import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-navbox'>Description</div>
        <div className='descriptionbox-navbox fade'>Reviews(122)</div>
      </div>

      <div className='descriptionbox-description'>
        <p>E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
