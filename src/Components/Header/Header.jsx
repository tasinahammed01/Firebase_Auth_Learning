import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className=" flex justify-center items-center gap-10 py-10 bg-black text-white ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Header;
