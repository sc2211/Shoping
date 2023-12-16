import React, {useContext} from 'react'
import './CartItems.css'
import { ShopContext} from '../../Context/ShopContext'
import removeIcon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
  const { getTotalCartAmount, allProduct, CartItems, removeFromCart }=useContext(ShopContext);
  return (
    <div className='cartitem'>
        <div className='cartitem-format-main'>
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Remove</p>
    </div>
    <hr/>
    {allProduct.map((e)=>{
       console.log('allProduct:', allProduct);
       console.log('CartItems:', CartItems);
       console.log('e.id:', e.id);
      if( e && CartItems[e.id]>0)
      {
        return <div>
        <div key={e.id} className='cartitem-format cartitem-format-main'>
        <img src={e.image} alt="" className='cartitem-product-icon'/>
            <p>{e.name}</p>
            <p>${e.newPrice}</p>
            <button className='cartitem-quantity'>{CartItems[e.id]}</button>
            <p>${e.newPrice*CartItems[e.id]}</p>
            <img className="cartitem-remove-icon" src={removeIcon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
        </div>
        <hr/>
      </div>
      }
      return null;
    })}
    <div className='cartitem-down'>
      <div className='cartitem-total'>
        <h1>Cart Totals</h1>
        <div>
          <div className='cartitem-total-item'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className='cartitem-total-item'>
            <p>Shipping Free</p>
            <p>Free</p>
          </div>
          <hr/>
          <div className='cartitem-total-item'>
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>
        <button>Proceed To CheckOut</button>
      </div>
      <div className='cartitem-promocode'>
        <p>if you have a promo code then, enter  it here</p>
        <div className='cartitem-promobox'>
          <input type='text' placeholder='promo code'/>
          <button>Submit</button>
        </div>
      </div>
    </div>
      </div>
  )
}

export default CartItems
