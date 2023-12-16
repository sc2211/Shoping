import React, { createContext, useState } from "react";
import allProduct  from "../Components/Assets/allProduct.js";


 export const ShopContext=createContext(null);

 const getDefaultCart=()=>{
   let cart={};
   for (let index = 0; index <allProduct.length; index++) {
      cart[index]=0;
   }
   return cart;
 }
 const ShopContextProvider=(props)=>{
   const [CartItems,setCartItem]=useState(getDefaultCart());
    

    const addToCart=(itemId)=>{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
      console.log(CartItems);
    }

    const removeFromCart=(itemId)=>{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
      let totalAmount=0;
      for(const item in CartItems)
      {
        if(CartItems[item]>0)
        {
          let itemInfo=allProduct.find((product)=>product.id===Number(item))
          totalAmount+= itemInfo.newPrice*CartItems[item];
        }
        return totalAmount;
      }
     
    
    }
    const getTotalCartItem=()=>{
      let totalItem=0;
      for(const item in CartItems)
      {
        if (CartItems[item]>0)
        {
          totalItem+=CartItems[item];
        }
      }
      return totalItem;
    }
   
    const contextValue={ getTotalCartItem,getTotalCartAmount,allProduct,CartItems,addToCart,removeFromCart};
    return (
       <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider;