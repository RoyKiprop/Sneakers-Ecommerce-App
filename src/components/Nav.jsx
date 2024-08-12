import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <ul className="flex items-center gap-10">
      <li>
        <NavLink 
          to="/" 
          className="text-black hover:text-orange-500 focus:text-orange-500"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="shop" 
          className="text-black hover:text-orange-500 focus:text-orange-500"
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="#" 
          className="text-black hover:text-orange-500 focus:text-orange-500"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="contactUs" 
          className="text-black hover:text-orange-500 focus:text-orange-500"
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;