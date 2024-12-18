import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <ul className="flex justify-between align-center m-4 p-4 bg-cyan-300 rounded-lg text-2xl font-semibold cursor-pointer">
        <li>Home</li>
        <li>Posts</li>
        <li><NavLink to="/postdetails">PostDetails </NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
