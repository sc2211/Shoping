/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {

  const {all_product}=useContext(ShopContext);
  if (!all_product) {
    return null;
  }
  console.log('Banner:', props.banner);
  return (
    <div className='shop-category'>
      <img  className='shopcategory-banner' src={props.banner} alt="Men's Fashion Banner"/>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>

        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>


      <div className='shopcategory-product'>
       {all_product.map((item,i)=>{
        if (props.category===item.category) {
           return<Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.newprice} oldPrice={item.oldprice} />          
        }
        else {
          return null;
        }
       })}
      </div>

      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
