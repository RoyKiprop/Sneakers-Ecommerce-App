import Cart from "./Cart";
import Logo from "./Logo";
import Search from "./Search";

function Header() {
  return (
    <div className="mx-28 mt-5 flex justify-between items-center">
      <Logo />
      <Search />
      <Cart />
      
    </div>
  );
}

export default Header;
