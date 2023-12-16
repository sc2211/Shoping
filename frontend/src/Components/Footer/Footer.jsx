import React from 'react'
import './Footer.css'
import biglogo from '../Assets/biglogo.png'
import instagram from '../Assets/instagram.png'
import pinterest from '../Assets/pinterest.png'
import whatsapp from '../Assets/whatsapp.png'
const Fotter = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={biglogo} alt=''/>
        <p>SHOPPER</p>
      </div>
      <ul className='footer-link'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icon-container'>
            <img src={instagram} alt=''/>
        </div>

        <div className='footer-icon-container'>
            <img src={pinterest} alt=''/>
        </div>

        <div className='footer-icon-container'>
            <img src={whatsapp} alt=''/>
        </div>
      </div>

      <div className='footer-copyright'>
        <hr/>
        <p>CopyRight@2023- All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Fotter



