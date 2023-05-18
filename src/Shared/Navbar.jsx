import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full bg-white shadow-2xl py-4">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <img
            src="https://i.ibb.co/WxTw08d/39cc8ddffab5435abb08bfa5b997d6df-removebg-preview-1.png"
            className="w-28"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allToys"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myToys"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                My Toys
              </NavLink>
            </li>

            {user && (
              <li>
                <NavLink
                  to="/AddAToy"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Add A Toy
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-3 items-center">
              <span>
                {user.photoURL === null ? (
                  <FaUserCircle className="text-2xl" title={user.displayName} />
                ) : (
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={user.photoURL}
                    title={user.displayName}
                  />
                )}
              </span>
              <button
                onClick={handleLogOut}
                className="text-white bg-red-500 text-md  font-bold rounded-lg py-3 px-6 tracking-widest cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn primary-bg-color border-0">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
