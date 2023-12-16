import React from 'react'
import Hero from '../Components/Hero/Hero'
import Item from '../Components/Item/Item'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollections from '../Components/NewCollections/NewCollection'
import Letter from '../Components/Letter/Letter'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Item/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <Letter/>
    </div>
  )
}

export default Shop
