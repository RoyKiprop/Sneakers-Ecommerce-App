import CartIcon from './IconCart'
import Button from './Button'


function Cart() {

  return (
    <div className='flex gap-8'>
      <Button variant="login">Login</Button>
      <div className='flex items-center gap-7'>
        <CartIcon/>
        <p className='text-darkGrayishBlue'>Your Cart</p>
      </div>
    </div>

  )

  
}

export default Cart
