import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../features/cart/cartSlice'
export default function CartContainer() {
  const dispatch=useDispatch()
  const { cartItems, amount, total } = useSelector((state)=>state.cart)  
  if(amount<1)
  return (
    <section className='cart'>
        <header>
          <h2>Your Bag</h2>
          <h4 className='empty-cart'>is currewntly empty</h4>
        </header>
    </section>
  )
  return (
    <section className='cart'>
        <header>
          <h2>Your Bag</h2>
        </header>
        <div>
          {cartItems.map((item)=>{
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <footer>
          <hr/>
            <div className="cart-total">
              <h4>Total <span>${total.toFixed(2)}</span> </h4>
            </div>
            <button className='btn clear-btn' onClick={()=>{dispatch(clearCart())}} >Clear</button>
        </footer>
    </section>
  )
}
