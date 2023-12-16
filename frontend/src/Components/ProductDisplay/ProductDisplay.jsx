import React from 'react'
import './ProductDisplay.css'
import starIcon from '../Assets/star_icon.png';
import starDullIcon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
      <div className='productdisplay-img-list'>
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
      </div>

      <div className='productdisplay-img'>
        <img  className='productdisplay-main-img' src={product.image} alt=''/>
      </div>
      </div>

      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='proddisplay-right-stars'>
            <img src={starIcon} alt=''/>
            <img src={starIcon} alt=''/>
            <img src={starIcon} alt=''/>
            <img src={starIcon} alt=''/>
            <img src={starDullIcon} alt=''/>
            <p>(122)</p>
        </div>

        <div className='productdisplay-right-price'>
          <div className='productdisplay-right-price-old'>${product.oldPrice}</div>
          <div className='productdisplay-right-price-new'>${product.newPrice}</div>
        </div>

        <div className='product-displayright-description'>
          A lightweight, usually kintted,pullover shirt ,close-fitting and
          with a round neckline and short sleeves,warn a 
          undershirt or outer garment.
        </div>

        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
        <p className='productdispay-right-category'><span>Category:</span>Women,TShirt, Crop-Top</p>
        <p className='productdispay-right-category'><span>Tags:</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
