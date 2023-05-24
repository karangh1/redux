import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"

const initialState={
  cartItems:cartItems,
  amount:2,
  total:0,
  isLodaing:true,
}

const cartSlice=createSlice({
   name:'cart',
   initialState,
   reducers: {
     clearCart: (state)=>{
        state.cartItems=[];
     },
     removeItem:(state,action)=>{
        const itemId=action.payload;
        state.cartItems=state.cartItems.filter((item)=>{
           return item.id!==itemId;
        }) 
     },
     toggle:(state,{ payload })=>{
        const cartItem= state.cartItems.find((item)=> item.id===payload.id)  
        
        payload.val==="increase"?  cartItem.amount=cartItem.amount+1 :cartItem.amount=cartItem.amount-1;
     },
     calTotal:(state)=>{
        let amount=0, total=0;
        state.cartItems.forEach((item)=>{
            amount=amount+item.amount;
            total=total+item.amount*item.price;
        })
        state.amount=amount;
        state.total=total;
     }
   }
})

// console.log(cartSlice)
export const { clearCart, removeItem, toggle, calTotal } = cartSlice.actions;
export default cartSlice.reducer;

