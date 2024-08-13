import { UseSelected } from "../context/selectionContext";
import Button from "./Button";
import { UseCart } from "../context/cartContext";
import { FaFacebookF, FaInstagram} from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { FaCcMastercard, FaCcVisa,FaCcPaypal } from "react-icons/fa";

function ProductDetails() {
  const { selectedProduct } = UseSelected();
  const { dispatch } = UseCart();
  return (
    <div className="mx-28 flex space-x-5 h-[555px] mb-10">
      <div className="rounded-lg overflow-hidden w-1/2">
        <img src={selectedProduct.imageUrl} className="h-full w-full" />
      </div>
      <div className="flex flex-col space-y-8 w-1/2 mt-5 ">
        <h2 className="kumbh text-3xl text- veryDarkBlue">
          {selectedProduct.name}
        </h2>
        <h4 className="kumbh text-4xl font-bold text-[#fe735e]">
          {selectedProduct.price}
        </h4>
        <hr className="border-darkGrayishBlue" />
        <p className="kumbh text-md text-darkGrayishBlue w-[80%]">
          {selectedProduct.description}
        </p>
        <div>
         
          <Button
            onClick={() => dispatch({ type: "Add", data: selectedProduct })}
            variant="AddCart"
          >
            Add to Cart
          </Button>
        </div>
        <hr className="border-darkGrayishBlue" />

        <div className="flex space-x-4">
          <p className="kumbh text-xl text-veryDarkBlue font-medium">Share:</p>
          <div className="flex space-x-3">
              <a
                href="#"
                className="text-darkGrayishBlue hover:text-orangeCustom"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-darkGrayishBlue hover:text-orangeCustom"
              >
                <FaInstagram size={27} />
              </a>
              <a
                href="#"
                className="text-darkGrayishBlue hover:text-orangeCustom"
              >
                <BsTwitterX size={24} />
              </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <p className="kumbh text-xl text-veryDarkBlue font-medium">Payment Method:</p>
          <div className="flex space-x-3">
            <FaCcMastercard size={27} className=" text-[#fe735e]"/>
            <FaCcVisa size={27} className=" text-[#fe735e]"/>
            <FaCcPaypal size={27} className=" text-[#fe735e]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
