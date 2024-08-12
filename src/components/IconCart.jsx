/* eslint-disable react/prop-types */

import Icon from '../assets/images/cart.svg';
import { UseCart } from '../context/cartContext';

function CartIcon({toggleCart}) {
  const { cart } = UseCart();

  return (
    <div className="relative flex">
      <a className="cursor-pointer" onClick={()=>toggleCart()}><img src={Icon} alt="Cart" /></a>
      <span className="absolute bottom-2 left-6 bg-customBlack text-customWhite text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {cart.length}
      </span>
    </div>
  );
}

export default CartIcon;

