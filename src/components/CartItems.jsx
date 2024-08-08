import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import { UseCart } from "../context/cartContext";
import CartItemsLayout from "./CartItemsLayout";
import QuantityControl from "./QuantityControl";

function Cart() {
  const { cart, dispatch } = UseCart();

  return (
    <div className="p-7 w-[550px] bg-customWhite">
      <div className="flex items-center justify-between">
        <h3 className="text-darkGrayishBlue font-semibold text-lg">Your Cart</h3>
        <FaTimes />
      </div>
      <hr className="mb-2" />
      <div>
        {cart.map(item => (
          <CartItemsLayout key={item.Id}>
            <div className="flex items-center justify-between bg-gray-100 rounded-lg w-full p-3 ">
              <div className="w-20 h-20 ">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-darkGrayishBlue text-lg">{item.name}</h3>
                <h3 className="text-darkGrayishBlue font-semibold text-xl">{item.price}</h3>
              </div>
              <QuantityControl item={item} />
              <Button onClick={()=> dispatch({type: "Remove", data: item.Id})} variant='remove'>Remove</Button>
            </div>
          </CartItemsLayout>
        ))}
      </div>
      <hr className="mt-3" />
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-darkGrayishBlue font-semibold text-xl">Subtotal</h3>
        <h3 className="text-veryDarkBlue font-semibold text-xl">11000 KES</h3>
      </div>
      <div>
        <Button variant="CheckOut">Continue to Checkout</Button>
      </div>
    </div>
  );
}

export default Cart;