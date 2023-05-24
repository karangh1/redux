import React from 'react'
import { ChevronDown,ChevronUp } from '../icons'
import { removeItem, toggle } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
export default function CartItem({id, img, price, title, amount }) {
    const dispatch=useDispatch();
  return(
    <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>${price}</h4>
            <button className="remove-btn" onClick={()=>{dispatch(removeItem(id))}}>remove</button>
        </div>
        <div>
            <button className="amount-btn" onClick={()=>{dispatch(toggle({id,"val":"increase"}))}} ><ChevronUp/></button>
            <p className="amount">{amount}</p>
            <button className="amount-btn" onClick={()=>{
                if(amount == 1) {dispatch(removeItem(id)); return}
                dispatch(toggle({id,"val":"decrease"}))}} ><ChevronDown/></button>
        </div>
    </article>
  )
}
