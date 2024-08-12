/* eslint-disable react/prop-types */

import Cart from "./Cart";
import Logo from "./Logo";
import Search from "./Form";


function Header({ toggleCart}) {
  return (
    <div className="mx-28 pt-5 flex justify-between items-center">
      <Logo />
      <Search/>
      <Cart toggleCart={toggleCart} />
      
    </div>
  );
}

export default Header;
