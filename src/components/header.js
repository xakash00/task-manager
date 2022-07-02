import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useLocation } from "react-router-dom";
const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate;
  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);
  const location = useLocation();
  console.log(location.pathname);
  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/");
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <nav className="navbar fixed-top">
        <h1 className="navbar_logo poppins_bold orange_c">Task.</h1>
        {!mobile && (
          <ul className="nav-items ms-auto">
            <li className="nav-item list-unstyled">
              <NavLink
                to="/viewTask"
                className={
                  location.pathname === "/viewTask"
                    ? "nav-link dark_c poppins_regular active"
                    : "nav-link dark_c poppins_regular"
                }
                aria-current="page"
              >
                View Task
              </NavLink>
            </li>
            <li className="nav-item list-unstyled">
              <NavLink
                to="/editTask"
                className={
                  location.pathname === "/editTask"
                    ? "nav-link dark_c poppins_regular active"
                    : "nav-link dark_c poppins_regular"
                }
                aria-current="page"
              >
                Edit Task
              </NavLink>
            </li>
            <li className="nav-item list-unstyled">
              <NavLink
                to="/jokeSpot"
                className={
                  location.pathname === "/jokeSpot"
                    ? "nav-link dark_c poppins_regular active"
                    : "nav-link dark_c poppins_regular"
                }
                aria-current="page"
              >
                Joke Spot
              </NavLink>
            </li>
            <li className="nav-item list-unstyled">
              {localStorage.getItem("email") ? (
                <NavLink
                  to="/"
                  onClick={handleLogout}
                  className={
                    location.pathname === "/"
                      ? "nav-link dark_c poppins_regular active"
                      : "nav-link dark_c poppins_regular"
                  }
                  aria-current="page"
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "nav-link dark_c poppins_regular active"
                      : "nav-link dark_c poppins_regular"
                  }
                  aria-current="page"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        )}

        {mobile && (
          <div className="sidebar-toggle">
            <button className="toggle_btn" onClick={() => setSidebar(!sidebar)}>
              <i className={sidebar ? "ri-close-line" : "ri-menu-line"}></i>
            </button>
          </div>
        )}
      </nav>

      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="mt-5">
          <ul className="ms-auto" onClick={() => setSidebar(!sidebar)}>
           
            <li className="list-unstyled">
              <NavLink
                to="/viewTask"
                className="nav-link navLink_sidebar dark_c poppins_regular "
                aria-current="page"
              >
                View Task
              </NavLink>
            </li>
            <li className="list-unstyled">
              <NavLink
                to="/editTask"
                className="nav-link navLink_sidebar dark_c poppins_regular "
                aria-current="page"
              >
                Edit Task
              </NavLink>
            </li>
            <li className="list-unstyled">
              <NavLink
                to="/jokeSpot"
                className="nav-link navLink_sidebar dark_c poppins_regular "
                aria-current="page"
              >
               Joke Spot 
              </NavLink>
            </li>
            <li className="nav-item list-unstyled">
              {localStorage.getItem("email") ? (
                <NavLink
                  to="/"
                  onClick={handleLogout}
                  className="nav-link navLink_sidebar dark_c poppins_regular"
                  aria-current="page"
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/"
                  className="nav-link navLink_sidebar dark_c poppins_regular"
                  aria-current="page"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Header;
