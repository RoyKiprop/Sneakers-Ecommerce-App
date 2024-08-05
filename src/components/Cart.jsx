import cart from '../assets/images/cart.svg'
import Button from './Button'

function Cart() {
  return (
    <div className='flex gap-10 items-center'>
       <Button variant="login">Login</Button>
       <div className='flex gap-2 items-center'>
        <img src={cart}/>
        <p className='text-darkGrayishBlue'>Your Cart</p>
       </div>
        
      
    </div>
  )
}

export default Cart
