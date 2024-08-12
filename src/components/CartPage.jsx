/* eslint-disable react/prop-types */

import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import { UseCart } from "../context/cartContext";
import CartItemsLayout from "./CartItemsLayout";
import QuantityControl from "./QuantityControl";



function CartPage({ toggleCart }) {
  const { cart, dispatch } = UseCart();
  
 

  function calcPrice(price, quantity) {
    const formatPrice = Number(price.split(' ')[0]);
    const ItemPrice = (formatPrice * quantity);
    return ItemPrice;
  }

  const subTotal = cart.reduce((total, item) => {
    return total + calcPrice(item.price, item.Quantity);
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
     
      <div className="fixed inset-0 bg-black bg-opacity-75" onClick={toggleCart}></div>

 
      <div className="p-7 w-[35%] bg-customWhite h-full shadow-lg z-50">
        <div className="flex items-center justify-between">
          <h3 className="text-darkGrayishBlue font-semibold text-lg">Your Cart</h3>
          <FaTimes className="cursor-pointer" onClick={toggleCart} />
        </div>
        <hr className="mb-2" />
        <div>
          { cart.length > 0 ?
          cart.map(item => (
            <CartItemsLayout key={item.Id}>
              <div className="flex items-center justify-between rounded-lg w-full p-3">
                <div className="w-20 h-20">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col w-[40%] gap-2">
                  <h3 className="text-darkGrayishBlue text-lg">{item.name}</h3>
                  <h3 className="text-darkGrayishBlue font-semibold text-xl">{calcPrice(item.price, item.Quantity)} KES</h3>
                </div>
                <QuantityControl item={item} />
                <Button onClick={() => dispatch({ type: "Remove", data: item.Id })} variant="remove">Remove</Button>
              </div>
            </CartItemsLayout>
          )):
          <div className="flex  justify-center align-middle">
          
            <div><h2 className="text-3xl text-darkGrayishBlue">Your cart is empty!</h2></div>

          </div>

          }
        </div>
        <hr className="mt-3" />
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-darkGrayishBlue font-semibold text-xl">Subtotal</h3>
          <h3 className="text-veryDarkBlue font-semibold text-xl">{subTotal.toLocaleString('en-US')} KES</h3>
        </div>
        <div>
          {cart.length > 0 ? <Button variant="CheckOut">Continue to Checkout</Button>:
          ""
          }
          
        </div>
      </div>
    </div>
  );
}

export default CartPage;
