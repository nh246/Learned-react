import { NavLink } from "react-router";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex bg-cyan-600 mt-2 p-2 justify-center gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
