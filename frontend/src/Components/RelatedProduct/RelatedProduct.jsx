import React from 'react'
import './RelatedProduct.css'
 import data from '../Assets/data'
 import Item from '../Item/Item'
const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
      <h1>Related Products</h1>
      <hr/>

      <div className='relatedproduct-item'>
        {data.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new-price={item.newPrice} old-price={item.oldPrice}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
