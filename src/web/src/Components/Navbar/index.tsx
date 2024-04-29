import { NavLink } from "react-router-dom";
import LogoutButton from "../Logout";
import LoginButton from "../Login";
import Profile from "../Profile";

const Navbar = () => {
  const activeStyle = "underline text-gray-500 underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-md font-light top-0">
  <ul className="flex items-center gap-3">
    <li className="font-semibold text-lg">
      <NavLink to="/">Falling Thunder</NavLink>
    </li>
    <li>
      <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
        All
      </NavLink>
    </li>
    <li>
      <NavLink to="/clothing" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Clothing
      </NavLink>
    </li>
    <li>
      <NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Electronics
      </NavLink>
    </li>
    {/* Additional categories */}
    <li>
      <NavLink to="/sports" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Sports
      </NavLink>
    </li>
    <li>
      <NavLink to="/toys" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Toys
      </NavLink>
    </li>
    <li>
      <NavLink to="/outdoor" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Outdoor
      </NavLink>
    </li>
    <li>
      <NavLink to="/clearance" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Clearance
      </NavLink>
    </li>
  </ul>
    <div className="flex items-center gap-3">
    <li className="list-none">
      <LoginButton/>
    </li>
    <li className="list-none">
      <LogoutButton/>
    </li>
    <li className="list-none">
      <Profile/>
    </li>
  </div>

</nav>


  );
}

export default Navbar;
