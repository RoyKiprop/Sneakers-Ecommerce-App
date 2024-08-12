/* eslint-disable react/prop-types */

import CartIcon from './IconCart'
import Button from './Button'


function Cart({ toggleCart}) {

  return (
    <div className='flex gap-8'>
      <Button variant="login">Login</Button>
      <div className='flex items-center gap-7'>
        <CartIcon toggleCart={toggleCart}/>
        <p className='text-darkGrayishBlue'>Your Cart</p>
      </div>
    </div>

  )

  
}

export default Cart
