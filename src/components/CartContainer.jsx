import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';


const CartContainer = () => {
  const cart = useSelector((state) => state.cartState.cartItems);
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearCart());
  }
  
  return (
    <>
      {cart.map((item) => {
        return <CartItem key={item.itemId} {...item} />
      })}

      <button className='btn btn-secondary btn-block uppercase' onClick={clear}>clear cart</button>
    </>
  )
}

export default CartContainer