/* eslint-disable react/prop-types */

import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Button from "./Button";
import { UseCart } from "../context/cartContext";

function QuantityControl({ item }) {
  const { dispatch } = UseCart();

  function Increase(id) {
    dispatch({ type: "Increase", data: id });
  }

  function Decrease(id) {
    dispatch({ type: "Decrease", data: id });
  }

  return (
    <div className="flex items-center border border-orangeCustom space-x-2 px-5 py-1">
      <span>{item.Quantity}</span>
      <div className="flex flex-col gap-1">
        <Button onClick={() => Increase(item.Id)} variant="quantity">
          <BiSolidUpArrow className="h-2.5 w-2.5" />
        </Button>
        <Button onClick={() => Decrease(item.Id)} variant="quantity">
          <BiSolidDownArrow className="h-2.5 w-2.5" />
        </Button>
      </div>
    </div>
  );
}

export default QuantityControl;
