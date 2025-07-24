import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Header;
