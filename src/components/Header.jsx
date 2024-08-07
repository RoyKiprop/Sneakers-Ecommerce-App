import Cart from "./CartIcon";
import Logo from "./Logo";
import Search from "./Form";


function Header() {
  return (
    <div className="mx-28 pt-5 flex justify-between items-center">
      <Logo />
      <Search/>
      <Cart />
      
    </div>
  );
}

export default Header;
