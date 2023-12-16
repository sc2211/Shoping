import React from 'react'
import './NewCollection.css'
import newcollections from '../Assets/new_collections.js'
import Items from '../Item/Item'
const NewCollection = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className='collections'>
        {newcollections.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} newPrice={item.newprice} oldPrice={item.oldprice} />;

        })}
      </div>
    </div>
  )
}

export default NewCollection
