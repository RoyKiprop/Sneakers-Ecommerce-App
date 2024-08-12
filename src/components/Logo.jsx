import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

function Logo() {
  return (
    <NavLink to="/">
      <img src={logo} alt="Logo" />
    </NavLink>
  );
}

export default Logo;
